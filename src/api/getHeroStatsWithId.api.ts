import axios from "axios";
import { I_HeroStats } from "../types";

export const getHeroStatsWithIdAPI = async (id : number) => {
  try {
    const res = await axios.get("https://api.opendota.com/api/heroStats");
    res.data = res.data.filter((item : I_HeroStats) => item.id == id)
    if (!res.data[0]) return
    return res.data[0];
  } catch(error) {
    console.error(error);
    return [];
  }
};
