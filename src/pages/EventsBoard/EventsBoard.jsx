import EventsList from "../../components/EvenstList/EventsList";
import styles from "./EventBoard.module.scss";
const EventBoard = () => {
  return (
    <section className={styles.eventBoard}>
      <h1>Events</h1>
      <EventsList />
    </section>
  );
};

export default EventBoard;
