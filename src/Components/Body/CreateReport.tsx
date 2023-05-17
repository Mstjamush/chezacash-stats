import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handleAddReport } from "../../Api/api";
import { CreateReportModel } from "../../Models/reports";

import Loader from "../Layout/Loader";

const CreateReport = () => {
  const [registrations, setRegistrations] = useState<string>("");
  const [deposits, setDeposits] = useState<string>("");
  const [withdrawals, setWithdrawals] = useState<string>("");
  const [bonuses, setBonuses] = useState<string>("");
  const [stakes, setStakes] = useState<string>("");
  const [payouts, setPayout] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const notify = (msg: string) => toast(msg);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const mutations = useMutation(handleAddReport, {
    onSuccess: async () => {
      queryClient.invalidateQueries("backendData");
      notify("Report added successfully");
    },
    onError: (err: any) => {
      notify("record has not been added");
    },
  });

  const fields: CreateReportModel[] = [
    { name: "Registrations" },
    { name: "Deposits" },
    { name: "Withdrawals" },
    { name: "BettingTax" },
    { name: "ExciseDuty" },
    { name: "Stakes" },
    { name: "Payouts" },
    { name: "ProfitAndLoss" },
    { name: "StakeAfterTax" },
    { name: "WinningAmount" },
    { name: "WithholdingTax" },
  ];

  const handleOnSubmit = async (data: any) => {
    await mutations.mutateAsync({
      registrations: parseInt(data.registrations.toLowerCase()) || 0,
      deposits: parseInt(data.deposits) || 0,
      withdrawals: parseInt(data.withdrawals) || 0,
      // bonuses: parseInt(data.bonuses),
      stakes: parseInt(data.stakes) || 0,
      payouts: parseInt(data.payouts) || 0,
      exciseDuty: parseInt(data.exciseduty) || 0,
      bettingTax: parseInt(data.bettingtax) || 0,
      profitAndLoss: parseInt(data.profitandloss) || 0,
      stakeAfterTax: parseInt(data.stakeaftertax) || 0,
      winningAmount: parseInt(data.winningamount) || 0,
      withholdingTax: parseInt(data.withholdingtax) || 0,
      createdAt: new Date(data.date),
    });
  };

  return (
    <div className="w-full h-full flex justify-center my-10 ">
      <form
        className="grid grid-cols-3 gap-6"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        {fields.map((field) => (
          <div className="w-full flex gap-2 flex-col" key={field.name}>
            <label className="w-1/2">{field.name} </label>
            <input
              {...register(`${field.name.toLowerCase()}`)}
              type="text"
              className="border border-black py-2 rounded w-full focus:outline-none px-2"
            />
            {errors[field.name] && <span>This field is required</span>}
          </div>
        ))}
        <div className="w-full flex  flex-col gap-2 ">
          <label className="w-1/3"> Date</label>
          <input
            {...register("date", { required: true })}
            type="datetime-local"
            className="border border-black py-2 rounded w-full focus:outline-none px-2"
          />
          {errors.date && <span>This field is required</span>}
        </div>
        <div className="w-full flex  flex-col gap-2 items-center justify-center pb-10">
          {!mutations.isLoading ? (
            <input
              type="submit"
              value="Submit"
              className="bg-black text-white hover:border-black hover:border hover:bg-white hover:text-black cursor-pointer py-2 rounded w-2/3 focus:outline-none px-2"
            />
          ) : (
            <Loader />
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateReport;
