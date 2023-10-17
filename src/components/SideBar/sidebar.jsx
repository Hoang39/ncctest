import styles from "./sidebar.module.css";

const Sidebar = (props) => {
  const id = props.id;

  return (
    <div className={styles.sidebar__container}>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <a
            href="#"
            className={
              id === "0" ? styles.sidebar__linkSpec : styles.sidebar__link
            }
          >
            Home
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="#"
            className={
              id === "1" ? styles.sidebar__linkSpec : styles.sidebar__link
            }
          >
            Services
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="#"
            className={
              id === "2" ? styles.sidebar__linkSpec : styles.sidebar__link
            }
          >
            News
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="#"
            className={
              id === "3" ? styles.sidebar__linkSpec : styles.sidebar__link
            }
          >
            Blog
          </a>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="#"
            className={
              id === "4" ? styles.sidebar__linkSpec : styles.sidebar__link
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
