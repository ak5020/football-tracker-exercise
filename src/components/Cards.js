import React, { useEffect } from "react";
import "../styles.css";

const data = [
  { id: 1, title: "Prime Division", name: "tokyo" },
  { id: 2, title: "Prime Division", name: "tokyo" },
  { id: 3, title: "Prime Division", name: "tokyo" },
  { id: 4, title: "Prime Division", name: "tokyo" }
];

function Cards(props) {
  // const fetchFunc = () => {
  //   const res = fetch("https://jsonplaceholder.typicode.com/photos")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
  // }

  // useEffect(() => {
  //   fetchFunc()
  // })

  const addToFavorite = (item, key) => {
    if (item) {
      console.log("click", item);
    }
  };

  return (
    <div className="cards d-flex">
      {data.length ? (
        data.map((item, key) => (
          <div key={item.id} className="cards-items">
            <div className="d-flex flex-column">
              <strong>{item.title}</strong>
              <hr />

              <div className="d-flex">
                <div className="col-6">
                  <h5>{item.name}</h5>
                  {/* button should a component, no time thats why put here */}
                  <button
                    type="button"
                    className="button btn btn-primary"
                    onClick={() => addToFavorite(item, key)}
                  >
                    star
                  </button>
                </div>
                <div className="col-6">
                  <h5>{item.name}</h5>
                  <button
                    type="button"
                    className="button btn btn-danger"
                    onClick={() => addToFavorite(item, key)}
                  >
                    Match Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
export default Cards;
