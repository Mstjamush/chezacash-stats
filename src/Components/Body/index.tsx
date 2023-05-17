import moment from "moment";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useLocation } from "react-router-dom";
import { handleGetData, handleGetFilteredData } from "../../Api/api";
import Loader from "../Layout/Loader";
import DataTable from "./DataTable";

const index = () => {
  const { pathname } = useLocation();

  const queryClient = useQueryClient();

  const [gridApi, setGridApi] = useState(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const onBtnExport = () => {
    //@ts-ignore: Object is possibly 'null'
    gridApi.exportDataAsCsv();
  };

  const onGridReady = (params: any) => {
    setGridApi(params.api);
  };

  const mutations = useMutation(handleGetFilteredData);

  const handleSearch = async (e: any) => {
    let data = await mutations.mutateAsync({
      startTime: moment(startTime).format("yyyyMMDDHHmmss"),
      endTime: moment(endTime).format("yyyyMMDDHHmmss"),
    });
    queryClient.setQueryData("backendData", data);
  };

  const { data, isFetching, isLoading } = useQuery("backendData", handleGetData, { staleTime: 1000 * 60 * 60 * 24 });

  if (isFetching || isLoading) return <Loader />;

  return (
    <div className="w-full h-full ">
      <div className="my-20 w-1/4 mx-8 bg- py-6 rounded-lg bg-gradient-to-b from-secondary to-black text-center">
        <h1 className="text-2xl text-white">{`Total ${pathname.split("/")[1] || "registrations"}`}</h1>
        <h1 className="text-2xl text-white font-bold pt-2">
          {
            //@ts-ignore
            data[pathname.split("/")[1] || "registrations"] || 0
          }
        </h1>
      </div>
      <div className="flex mx-8 my-2 items-center">
        <div className="flex flex-col items-start">
          <label>Start Date</label>
          <input
            type="datetime-local"
            name=""
            id=""
            className="border border-black rounded py-2 focus:outline-none "
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-start mx-8">
          <label>End Date</label>
          <input
            type="datetime-local"
            name=""
            id=""
            className="border border-black rounded py-2 "
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <input
          type="button"
          value="Search"
          onClick={handleSearch}
          className="border-black border text-black py-2 hover:bg-black hover:text-white hover:border-none rounded px-4 cursor-pointer mt-5"
        />
        <input
          type="button"
          value="Downlaod"
          onClick={onBtnExport}
          className=" text-white bg-black py-2 hover:bg-white hover:text-black hover:border-black hover:border rounded px-4 cursor-pointer mt-5 mx-8"
        />
      </div>
      <div className="mx-8">{isLoading || mutations.isLoading ? <Loader /> : <DataTable onReady={onGridReady} dataProp={data} />}</div>
    </div>
  );
};

export default index;
