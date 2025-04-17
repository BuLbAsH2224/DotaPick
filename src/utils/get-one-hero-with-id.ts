import { IHeroStats } from "../types";

export const getOneHeroWithId = (heroesStats: IHeroStats[], id: number): IHeroStats | null => {
    return heroesStats.find(item => item.id === id) || null;
}