import Airbnblogo from "../src/assets/airbnb 1.png";

export default function NavBar() {
  return (
    <nav>
      <img src={Airbnblogo} className="nav--logo" alt="airbnb logo" />
    </nav>
  );
}
