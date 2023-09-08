import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1
        style={{ color: "red", fontSize: "32px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </div>
  );
}

function Menu() {
  const pizza = pizzaData;
  const numPizza = pizza.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <div className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizza={pizza} key={pizza.name} />;
            })}
          </div>
        </>
      ) : (
        <p>We're working on our menu. Please visit later!</p>
      )}
    </main>
  );
}
function Pizza({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>

        {/* {pizza.soldOut ? (
          <span className="">Sold Out</span>
        ) : (
          <span className="">{pizza.price}</span>
        )} */}

        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const openHours = 6;
  const closeHours = 20;
  const hours = new Date().getHours();
  const open = hours >= openHours && hours <= closeHours;

  console.log(open);
  return (
    <div className="footer">
      {open ? (
        <Order closeHours={closeHours} />
      ) : (
        <p>
          We will open on {openHours}:00 and close at {closeHours}:00
        </p>
      )}
    </div>
  );
}

function Order({ openhour, closeHours }) {
  return (
    <div className="order">
      <p>We will open until {closeHours}. You can visit or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
