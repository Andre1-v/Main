import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import "./ModuleCard.scss";

function ModuleCard({ module }) {
  //Initialisation
  //State
  //Handler
  //View
  return (
    <div className="moduleCard">
      <Card>
        <p>{module.ModuleCode}</p>
        <p>{module.ModuleName}</p>
        <img src={module.ModuleImageURL} alt={module.ModuleName} />
      </Card>
    </div>
  );
}

ModuleCard.propTypes = {
  module: PropTypes.shape({
    ModuleCode: PropTypes.string.inRequired,
    ModuleName: PropTypes.string.inRequired,
    ModuleImageURL: PropTypes.string.isRequired,
  }),
};

export default ModuleCard;
