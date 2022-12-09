import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function GetCategories() {
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    setResponse(null);

    axios
      .get("http://localhost:1337/api/categories")
      .then(({ data }) => {
        setResponse(data.data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);
  return { response, loading };
}
