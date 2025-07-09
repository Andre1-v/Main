import { useState } from "react";
import useLoad from "../../api/useLoad.js";
import Modal from "../../UI/Modal.jsx";
import Action from "../../UI/Actions.jsx";
import ModuleForm from "./ModuleForm.jsx";
import { CardContainer } from "../../UI/Card.jsx";
import ModuleCard from "./ModuleCard.jsx";

function ModuleCrudler({ endpoint }) {
  //Initialisation
  //State------------------------------------------------
  const [modules, , loadingMessage, loadModules] = useLoad(endpoint);
  const [showForm, setShowForm] = useState(false);

  //Handler----------------------------------------------------
  const handleAdd = () => setShowForm(true);

  const handleCancel = () => setShowForm(false);

  const handleSuccess = async () => {
    handleCancel();
    await loadModules(endpoint);
  };
  //View
  return (
    <>
      <Modal>
        <p>This is a modal!</p>
      </Modal>
      {!showForm && (
        <Action.Tray>
          <Action.Add
            showText
            buttonText="Add new module"
            onClick={handleAdd}
          />
        </Action.Tray>
      )}
      {showForm && (
        <ModuleForm onCancel={handleCancel} onSuccess={handleSuccess} />
      )}
      {!modules ? (
        <p>{loadingMessage}</p>
      ) : modules.length === 0 ? (
        <p>No records found ...</p>
      ) : (
        <CardContainer>
          {modules.map((module) => (
            <ModuleCard module={module} key={module.ModuleID} />
          ))}
        </CardContainer>
      )}
    </>
  );
}

export default ModuleCrudler;
