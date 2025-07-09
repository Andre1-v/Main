import { useAuth } from "../auth/useAuth.jsx";
import API from "../api/API.js";
import ModuleCrudler from "../entity/module/ModuleCrudler.jsx";

function Modules() {
  //Initialisation ----------------------------------------
  const { loggedInUser } = useAuth();
  const myModulesEndpoint =
    loggedInUser.UserUsertypeID === 1
      ? `/modules/leader/${loggedInUser.UserID}`
      : `/modules/users/${loggedInUser.UserID}`;

  //State------------------------------------------------
  //Handler----------------------------------------------------
  //View-------------------------------------------------------
  return (
    <>
      <h1>Modules</h1>
      <ModuleCrudler endpoint={myModulesEndpoint} />
    </>
  );
}

export default Modules;
