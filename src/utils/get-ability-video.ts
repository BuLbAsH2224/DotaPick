export const getAbilityVideo = (
  heroName: string,
  abilityName: string
): string => {
  const heroNameFilter = heroName.replace(/^npc_dota_hero_/, "");
  const abilityFilter = abilityName.replace(
    /\/apps\/dota2\/images\/dota_react\/abilities\/|\.png/g,
    ""
  )
  const url = `https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/abilities/${heroNameFilter}/${abilityFilter}.mp4`;

  return url;
};
