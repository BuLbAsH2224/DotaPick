export interface IAbilityAttrib {
  key: string;
  header: string;
  value: string | string[];
  generated?: boolean;
}

export interface IAbility {
  dname: string;
  behavior: string[] | string;
  dmg_type?: string;
  bkbpierce?: string;
  desc?: string;
  attrib: IAbilityAttrib[];
  mc?: string | string[];
  cd?: string | string[];
  dispellable?: string;
  img: string;
  lore?: string;
  notes?: string[];
  cmb?: string | string[];
  hurl?: string | string[];
  cast_range_pve?: string | string[];
  vision?: string | string[];
  duration?: string;
  charge?: string;
  is_innate?: boolean;
  target_team: string[];
  target_type: string[];
  videoSRC: string;
  is_shard?: boolean;
  is_aghs?: boolean;
}
export interface IAghsDesc {
  has_scepter: boolean;
  scepter_desc: string;
  scepter_skill_name: string;
  scepter_new_skill: boolean;
  scepter_videoSRC: string;
  scepter_imgSRC: string;
  has_shard: boolean;
  shard_desc: string;
  shard_skill_name: string;
  shard_new_skill: boolean;
  shard_videoSRC: string;
  shard_imgSRC: string;
}
export interface IAspect {
  id: number;
  name: string;
  icon: string;
  color: string;
  gradient_id: number;
  title: string;
  description: string;
  abilities?: string[];
  deprecated?: string;
  img: string;
}
export interface IAbilityFromApi {
  abilities: IAbility[];
  aghsAndShard: IAghsDesc;
  aspects: IAspect[];
}

export type IAbilities = Record<string, IAbility>;
