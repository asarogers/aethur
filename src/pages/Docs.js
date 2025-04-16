import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Docs = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      window.location.href = `/${id}`;
    }
  }, [id]);

  return <p>Redirecting to document...</p>;
};

export default Docs;
