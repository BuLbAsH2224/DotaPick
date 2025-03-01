import axios from "axios";

export const getHeroesStatsAPI = async () => {
  try {
    const res = await axios.get("https://api.opendota.com/api/heroes");

    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
