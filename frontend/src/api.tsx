import axios from "axios";
import { PlotData } from "./Types";

export const getWhoAsked = async (): Promise<PlotData> => {
  const data = await axios.get("http://localhost:8080/api/v1/plots/whoasked");
  console.log(data.data);
  return data.data;
};

export const getSanity = async (): Promise<PlotData> => {
  const data = await axios.get("http://localhost:8080/api/v1/plots/sanity");
  console.log(data.data);
  return data.data;
};

export const getAccuracy = async (): Promise<PlotData> => {
  const data = await axios.get("http://localhost:8080/api/v1/plots/accuracy");
  return data.data;
};

export const getReward = async (): Promise<PlotData> => {
  const data = await axios.get("http://localhost:8080/api/v1/plots/reward");
  return data.data;
};
