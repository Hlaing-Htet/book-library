import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function GetSingleBook({ id }) {
  const [response, setResponse] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    setResponse(null);

    axios
      .get(
        `https://book-library-backend-production.up.railway.app/api/books/${id}?populate=image&populate=categories`
      )
      .then(({ data }) => {
        setResponse(data.data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [id]);
  return { response, loading };
}
