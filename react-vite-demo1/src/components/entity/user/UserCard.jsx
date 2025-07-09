import PropTypes from "prop-types";
import { Card } from "../../UI/Card.jsx";
import "./UserCard.scss";

function UserCard({ user }) {
  //Initialisation
  //State
  //Handler
  //View
  return (
    <div className="studentCard">
      <Card>
        <p>{user.UserEmail.substring(0, 8)}</p>
        <p>{`${user.UserFirstname} ${user.UserLastname}`}</p>
        <img src={user.UserImageURL} />
      </Card>
    </div>
  );
}

UserCard.propTypes = {
  module: PropTypes.shape({
    UserEmail: PropTypes.string.inRequired,
    UserFirstname: PropTypes.string.inRequired,
    UserImageURL: PropTypes.string.isRequired,
  }),
};

export default UserCard;
