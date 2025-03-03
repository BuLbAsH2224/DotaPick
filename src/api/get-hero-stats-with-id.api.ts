import axios from "axios";
import { IHeroStats } from "../types";

export const getHeroStatsWithIdAPI = async (id : string) => {
  try {
    const res = await axios.get("https://api.opendota.com/api/heroStats");
    res.data = res.data.filter((item : IHeroStats) => item.id == Number(id))
    if (!res.data[0]) return
    return res.data[0];
  } catch(error) {
    console.error(error);
    return [];
  }
};
