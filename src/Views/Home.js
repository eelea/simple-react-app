import React from "react";
import useAxiosGet from "../Hooks/HttpRequest";
import Spinner from "../Components/Spinner";
import BikeCard from "../Components/BikeCard";

function Home() {
  const url = "http://localhost:3001/bikes";

  let bikes = useAxiosGet(url);
  let content = null;

  if (bikes.error) {
    content = <p>There was an error try again later.</p>;
  }
  if (bikes.loading) {
    content = <Spinner />;
  }
  if (bikes.data) {
    content = bikes.data.map((bike, key) => (
      <div key={key}>
        {/* We add a prop key to avoid  Warning: Each child in a list should have a unique "key" prop.*/}
        <BikeCard bike={bike} />
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Home;
