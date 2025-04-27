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
}
export interface IAghsDesc {
  hero_name: string;
  hero_id: number;
  has_scepter: number;
  scepter_desc: string;
  scepter_skill_name: string;
  scepter_new_skill: false;
  has_shard: boolean;
  shard_desc: string;
  shard_skill_name: string;
  shard_new_skill: boolean;
}
export interface IAbilityFromApi {
  abilities: IAbility[];
  aghsAndShard: IAghsDesc;
}

export type IAbilities = Record<string, IAbility>;
