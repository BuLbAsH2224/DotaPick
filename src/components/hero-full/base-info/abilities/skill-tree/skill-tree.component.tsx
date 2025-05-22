import { useState } from "react";
import { ISkillTree } from "../../../../../types";
import { SkillTreeLvl } from "./skill-tree-lvl";
import "./skill-tree.styles.css";

interface ISkillTreeProps {
  skillTree: ISkillTree;
}

export const SkillTree: React.FC<ISkillTreeProps> = ({ skillTree }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const handleMouseEnter: React.MouseEventHandler<HTMLImageElement> = () => {
    setVisible(true);
  };
  const handleMouseLeave: React.MouseEventHandler<HTMLImageElement> = () => {
    setVisible(false);
  };

  return (
    <div className="skillsTreeContainer">
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="skillTreeIcon"
        src="https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/icons/talents.svg"
        alt="skill tree icon"
      />
      <div className={`skillTreeLvlsContainer skillTreeLvlsContainer${visible ? "Visible" : "Hide"}`}>
        <p className="skillTreeHeaderText">ДЕРЕВО ТАЛАНТОВ</p>
        <SkillTreeLvl skillTree={skillTree.level4} lvl="25" />
        <SkillTreeLvl skillTree={skillTree.level3} lvl="20" />
        <SkillTreeLvl skillTree={skillTree.level2} lvl="15" />
        <SkillTreeLvl skillTree={skillTree.level1} lvl="10" />
      </div>
    </div>
  );
};
