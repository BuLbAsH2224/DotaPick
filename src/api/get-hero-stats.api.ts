import axios from "axios";
import { IHeroStats } from "../types";
import { apiURL } from "../config";

export const getHeroStatsAPI = async (id: string): Promise<IHeroStats> => {
  const res = await axios.get(`${apiURL}/getHeroStats/${id}`);
  return res.data;
};
