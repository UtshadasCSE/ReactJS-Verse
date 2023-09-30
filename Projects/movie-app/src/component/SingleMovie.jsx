import { useParams } from "react-router-dom";

function SingleMovie() {
  const { id } = useParams();
  return <>Our Single Movie id is {id}</>;
}

export default SingleMovie;
