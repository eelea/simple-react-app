import React from "react";
import useAxiosGet from "../Hooks/HttpRequest";
import Spinner from "../Components/Spinner";

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
    content = bikes.data.map((bike, key) => <div>{bike.name}</div>);
  }

  return <div>{content}</div>;
}

export default Home;
