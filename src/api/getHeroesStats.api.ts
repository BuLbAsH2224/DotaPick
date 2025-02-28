import axios from "axios";

export const getHeroesStatsAPI = async () => {
  try {
    const res = await axios.get("https://api.opendota.com/api/heroStats");

    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
