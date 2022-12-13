import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function GetBooks() {
  const [response, setResponse] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    setResponse(null);

    axios
      .get(
        "https://book-library-backend-production.up.railway.app/api/books?pagination[page]=1&pagination[pageSize]=51&populate=image&populate=categories"
      )
      .then(({ data }) => {
        setResponse(data.data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);
  return { response, loading };
}
