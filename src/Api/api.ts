import axios, { AxiosResponse } from "axios";
import { CreateReportApiModel, Summary } from "../Models/reports";
import { User, UserAuth } from "../Models/users";

let base_url: string = `${import.meta.env.VITE_APP_API_URL}`;

axios.defaults.baseURL = "https://backend.kwikbet.co.ke/api";

export const handleGetData = async (): Promise<Summary> => {
  let response = await axios({
    method: "GET",
    url: `/reports`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
export const handleGetFilteredData = async (
  dataProps: any
): Promise<Summary> => {
  let data = await axios(`/reports/filter`, {
    method: "GET",
    params: dataProps,
  });

  return data.data;
};

export const handleAuth = async (
  data: UserAuth
): Promise<AxiosResponse<User>> => {
  let resp = await axios(`/login`, {
    method: "POST",
    data,
  });

  return resp;
};
export const handleAddReport = async (
  data: CreateReportApiModel
): Promise<AxiosResponse> => {
  let resp = await axios(`/reports`, {
    method: "POST",
    data: data,
  });

  return resp;
};

export const handleUploadCsvReport = async (
  data: FormData
): Promise<AxiosResponse> => {
  try {
    let resp = await axios({
      method: "POST",
      url: "http://134.209.208.164:8080/v1/upload-bets",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return resp;
  } catch (error: unknown) {
    throw error;
  }
};

export const handlePnrUpload = async (data: any): Promise<AxiosResponse> => {
  try {
    let res = await axios({
      url: "http://taxpay.kwikbet.co.ke/api/v1.0/payment/initiate",
      data: data,
    });

    return res;
  } catch (error: unknown) {
    throw error;
  }
};
