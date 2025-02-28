import "./singleHeroPage.styles.css"
import { useParams } from "react-router-dom";


const SingleHeroPage = () => {
    const {id} = useParams();
  return (
    <>
        <div className="singleHeroDiv">
          <p>test</p>
        </div>
    </>
  );
}

export {SingleHeroPage};
