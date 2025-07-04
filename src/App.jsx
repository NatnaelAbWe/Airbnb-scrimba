import "./App.css";
import NavBar from "../Component/NavBar";
import Hero from "../Component/Hero";
import Card from "../Component/Cards";
import data from "../Component/data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div>
      <NavBar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
