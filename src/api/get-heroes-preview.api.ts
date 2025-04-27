import axios from "axios";
import { HeroPreviews } from "../types";
import { apiURL } from "../config";

export const getHeroesPreviewAPI = async (): Promise<HeroPreviews> => {
    const res = await axios.get(`${apiURL}/getHeroesPreviewInfo`);
    return res.data;
};
