import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { handlePnrUpload } from "../../Api/api";
import Loader from "../Layout/Loader";

export default function PnrUpload() {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const notify = (msg: string) => toast(msg);
  const onsubmit = (data: any) => {
    setLoading(true);
    handlePnrUpload(data)
      .then((res) => {
        setLoading(false);
        notify("Report added successfully");
      })
      .catch((err: any) => {
        setLoading(false);
        notify("Error while uploading PNR" + " " + err.message);
      });
  };
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div className="grid">
          <label htmlFor="pnr">Pnr</label>
          <input
            type="text"
            className="py-4 border-2 border-opacity-60 border-secondary rounded-lg focus:outline-primary bg-transparent px-2"
            {...register("pnr", { required: "PNR is required" })}
          />
          <ErrorMessage errors={errors} name="pnr" />
        </div>
        <div className="grid">
          <label htmlFor="pnr">Amount</label>
          <input
            type="text"
            className="py-4 border-2 border-opacity-60 border-secondary rounded-lg focus:outline-primary bg-transparent px-2"
            {...register("Amount", { required: "The Amount is required" })}
          />
          <ErrorMessage errors={errors} name="Amount" />
        </div>
        {!loading ? (
          <button className="hover:bg-secondary bg-primary  text-white hover:text-white w-full py-2 rounded px-8 col-span-2">
            Submit
          </button>
        ) : (
          <div className="col-span-2 py-2">
            <Loader />
          </div>
        )}
      </form>
    </div>
  );
}
