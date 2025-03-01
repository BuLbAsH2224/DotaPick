export const getHeroAttributeImage = (value: string): string => {
  switch (value) {
    case "all": //universal
      return `https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png`;
    case "int": //intelligence
      return `https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`;
    case "str": //strength
      return `https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`;
    case "agi": //agility
      return `https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png`;
    default:
      return ``;
  }
};
