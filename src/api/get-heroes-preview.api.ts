import axios from "axios";
import { IHeroStats } from "../types";

export const getHeroesStatsAPI = async (): Promise<IHeroStats[]> => {
    const res = await axios.get("https://api.opendota.com/api/heroStats");
    res.data.sort((a : IHeroStats, b : IHeroStats) => a.localized_name.toLocaleLowerCase() > b.localized_name.toLocaleLowerCase() ? 1 : -1)
    return res.data;
};
