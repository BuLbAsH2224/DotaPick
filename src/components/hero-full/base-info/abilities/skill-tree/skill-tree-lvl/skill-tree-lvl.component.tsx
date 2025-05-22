import "./skill-tree-lvl.styles.css";

interface ISkillTreeLvlProps {
  skillTree: string[];
  lvl: string;
}

export const SkillTreeLvl: React.FC<ISkillTreeLvlProps> = ({
  skillTree,
  lvl,
}) => {
  return (
    <div className="skillTreeLvlContainer">
      <p className="skillTreeName">{skillTree[0]}</p>
      <div className="skillTreeLvlContainerText">
        <p className="skillTreeLvl">{lvl}</p>
      </div>
      <p className="skillTreeName">{skillTree[1]}</p>
    </div>
  );
};
