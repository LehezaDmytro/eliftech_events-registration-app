import EventsList from "../../components/EvenstList/EventsList";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { getEvents } from "../../api/events";
import styles from "./EventBoard.module.scss";

const EventBoard = () => {
  const [isLoading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const featchEvents = async () => {
      try {
        setLoading(true);
        const data = await getEvents();
        setEvents([...data]);
        setLoading(false);
      } catch (error) {
        console.log(error.name);
        console.log(error.message);
      }
    };
    featchEvents();
  }, []);

  return (
    <section className={styles.eventBoard}>
      <h1>Events</h1>
      {isLoading ? <RotatingLines /> : <EventsList events={events} />}
    </section>
  );
};

export default EventBoard;
