import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plants = {
  Indoor: [
    { id: 1, name: "Snake Plant", price: 10, img: "/images/snake.jpg" },
    { id: 2, name: "Peace Lily", price: 12, img: "/images/lily.jpg" },
    { id: 3, name: "Aloe Vera", price: 8, img: "/images/aloe.jpg" },
    { id: 4, name: "ZZ Plant", price: 11, img: "/images/zz.jpg" },
    { id: 5, name: "Spider Plant", price: 9, img: "/images/spider.jpg" },
    { id: 6, name: "Rubber Plant", price: 14, img: "/images/rubber.jpg" }
  ],
  Outdoor: [
    { id: 7, name: "Rose", price: 7, img: "/images/rose.jpg" },
    { id: 8, name: "Hibiscus", price: 9, img: "/images/hibiscus.jpg" },
    { id: 9, name: "Tulsi", price: 5, img: "/images/tulsi.jpg" },
    { id: 10, name: "Jasmine", price: 6, img: "/images/jasmine.jpg" },
    { id: 11, name: "Bougainvillea", price: 10, img: "/images/bougain.jpg" },
    { id: 12, name: "Sunflower", price: 4, img: "/images/sunflower.jpg" }
  ],
  Succulents: [
    { id: 13, name: "Cactus", price: 6, img: "/images/cactus.jpg" },
    { id: 14, name: "Echeveria", price: 7, img: "/images/eche.jpg" },
    { id: 15, name: "Haworthia", price: 8, img: "/images/haw.jpg" },
    { id: 16, name: "Sedum", price: 5, img: "/images/sedum.jpg" },
    { id: 17, name: "Crassula", price: 9, img: "/images/crassula.jpg" },
    { id: 18, name: "Aloe Mini", price: 6, img: "/images/aloe-mini.jpg" }
  ]
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      {Object.keys(plants).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {plants[category].map((plant) => (
              <div key={plant.id} className="product-card">
                <img src={plant.img} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
