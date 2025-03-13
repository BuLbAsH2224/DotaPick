import axios from "axios";

export const getHeroesStatsAPI = async (): Promise<IHeroStats[]> => {
    const res = await axios.get("https://api.opendota.com/api/heroStats");
    return res.data;
};
