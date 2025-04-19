import axios from "axios";
import { IHeroStats } from "../types";

export const getHeroesStatsAPI = async (): Promise<IHeroStats[]> => {
    const res = await axios.get("https://api.opendota.com/api/heroStats");
    return res.data;
};
