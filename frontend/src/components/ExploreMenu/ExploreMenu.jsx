import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="exploreMenu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Explore our menu below and embark on a gastronomic journey with us. Our
        carefully curated menu is a celebration of flavors, crafted to delight
        every palate. Let's make your next meal extraordinary!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
