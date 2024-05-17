import { Link } from "react-router-dom";

const EventsList = () => {
  return (
    <ul>
      <li>
        <h4>Title</h4>
        <p>Description</p>
        <p>Date</p>
        <p>Organizer</p>
        <div>
          <Link to="/register">Register</Link>
          <Link to="/participants">View</Link>
        </div>
      </li>
    </ul>
  );
};

export default EventsList;
