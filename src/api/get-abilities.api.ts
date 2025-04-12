import axios from "axios";
import {IHeroAbilities } from "../types";

export const getHeroAbilities = async (): Promise<IHeroAbilities> => {
    const res = await axios.get(`https://api.opendota.com/api/constants/hero_abilities`);
    return res.data;
};
