import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-content">
        <h2>Order your favourite food here!</h2>
        <p>
          Welcome to FoodiA, Where Flavor Meets
          Convenience! Indulge in a World of Culinary Delights Delivered Right
          to Your Doorstep. 
        </p>
        <a href="#exploreMenu">View Menu</a>
      </div>
    </div>
  );
};

export default Header;
