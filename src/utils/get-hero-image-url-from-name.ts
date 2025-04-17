
export const getHeroImageUrlFromName = (name: string): string => {
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${name.replace(/^npc_dota_hero_/, '')}.png`;
  };