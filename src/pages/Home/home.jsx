import Sidebar from "../../components/SideBar/sidebar";
import Footer from "../../components/Footer/footer";
import styles from "./home.module.css";
import logoNCC from "../../assets/home/logoNCC.png";
import cssIcon from "../../assets/home/css-icon.png";
import htmlIcon from "../../assets/home/html-icon.png";
import urlIcon from "../../assets/home/url-icon.png";

const data = [
    {
        title: "Lorem ipsum dolor sit amet",
        image: cssIcon,
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ",
        content2: "ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
    },
    {
        title: "Lorem ipsum dolor sit amet",
        image: htmlIcon,
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ",
        content2: "ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
    },
    {
        title: "Lorem ipsum dolor sit amet",
        image: urlIcon,
        content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ",
        content2: "ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis."
    },
]

const Home = () => {
  return (
    <div className={styles.home__container}>
      <Sidebar id="0"></Sidebar>
      <div className={styles.home__content}>
        <div className={styles["home__content--detail"]}>
          <img
            src={logoNCC}
            alt="logoNCC"
            className={styles["home__content--img"]}
          ></img>
          <div className={styles["home__content--desc"]}>
            <p className={styles["home__content--desc__title"]}>Lorem ipsum dolor sit asmet?</p>
            <p className={styles["home__content--desc__content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
          <div className={styles["home__content--list"]}>
          {
            data.map((item, index) => (
                <div key={index} className={styles["home__content--item"]}>
                    <p className={styles["home__content--item__title"]}>{item.title}</p>
                    <div className={styles["home__content--item__flex"]}>
                        <img src={item.image} alt={item.title} className={styles["home__content--item__img"]}></img>
                        <p className={styles["home__content--item__content1"]}>{item.content1}</p>
                    </div>
                    <p className={styles["home__content--item__content2"]}>{item.content2}</p>
                </div>
            ))
          }
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
