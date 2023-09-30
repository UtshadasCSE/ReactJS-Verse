import { useContext } from "react";
import { AppContext } from "./context";
import { useGlobalContext } from "./context";

function Home() {
  // const name = useContext(AppContext);
  const name = useGlobalContext();
  return (
    <>
      <div>
        <p>My Home Page</p>
        <p>{name}</p>
      </div>
    </>
  );
}

export default Home;
