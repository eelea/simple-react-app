import React from "react";
import { Link } from "react-router-dom";

function BikeCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/bikes/${props.bike.id}`}>
        <div
          style={{ backgroundImage: `url('${props.bike.img}')` }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/bikes/${props.bike.id}`}>{props.bike.name}</Link>
        </h3>
        <div className="font-bold mb-3">$ {props.bike.price}</div>
        <div className="mb-3"> {props.bike.description}</div>

        <Link
          to={`/bikes/${props.bike.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default BikeCard;
