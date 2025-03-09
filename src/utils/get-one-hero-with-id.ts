import { IHeroStats } from "../types";

export const getOneHeroWithId = (heroesStats: IHeroStats[], id: number): IHeroStats | null => {
    console.log(heroesStats);
    return heroesStats.find(item => item.id === id) || null;
}