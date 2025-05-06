import axios from "axios";
import {IAbilityFromApi } from "../types";
import { apiURL } from "../config";

export const getHeroAbilities = async (heroName : string): Promise<IAbilityFromApi> => {
    const res = await axios.get(`${apiURL}/getHeroAbilities/${heroName}`);
    return res.data;
};
