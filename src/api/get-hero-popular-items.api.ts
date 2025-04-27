import axios from "axios";
import { IHeroPopularItems } from "../types";
import { apiURL } from "../config";

export const getHeroPopularItems = async (id : number): Promise<IHeroPopularItems> => {
    const res = await axios.post(`${apiURL}/getHeroPopularItems`,{id});
    return res.data;
};
