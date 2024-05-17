import styles from "./EventRegistration.module.scss";

const EventRegistration = () => {
  return (
    <section>
      <h2>Event Registration</h2>
      <form className={styles.form} action="">
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="date">Date of birth</label>
        <input type="date" id="date" />
        <p>Where did you hear about this event?</p>
        <label>
          <input type="radio" name="source" value="social media" />
          Social media
        </label>
        <label>
          <input type="radio" name="source" value="friends" />
          Friends
        </label>
        <label>
          <input type="radio" name="source" value="found myself" />
          Found myself
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default EventRegistration;
