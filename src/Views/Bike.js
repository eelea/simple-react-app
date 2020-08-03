import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import useAxiosGet from "../Hooks/HttpRequest";

function Bike() {
  // JS Destructuring :)
  const { id } = useParams();
  const url = `http://localhost:3001/bikes/${id}`;

  let bike = useAxiosGet(url);

  let content = null;

  if (bike.error) {
    content = <p>There was an error try again later.</p>;
  }

  if (bike.loading) {
    content = <Spinner />;
  }
  if (bike.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{bike.data.name}</h1>
        <div>
          <img
            className="w-full h-64 bg-blue bg-cover"
            src={bike.data.img}
            alt={bike.data.name}
          />
        </div>
        <div className="font-bold text-xl mb-3">$ {bike.data.price}</div>
        <div>{bike.data.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Bike;
