
export const getHeroVideoUrlFromName = (name: string): string => {
    return `https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${name.replace("npc_dota_hero_", '')}.webm`;
  };