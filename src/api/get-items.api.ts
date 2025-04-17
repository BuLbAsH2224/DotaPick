import axios from "axios";
import { IItems } from "../types";

export const getItemsAPI = async (): Promise<IItems> => {
    const res = await axios.get("https://api.opendota.com/api/constants/items");
    return res.data;
};
