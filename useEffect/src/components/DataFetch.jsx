import { useEffect, useState } from "react";

function DataFetch() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/posts/1", { signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("API request canceled!");
        } else {
          console.error("Failed to fetch data:", error);
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h2>API se fetched data:</h2>
      {data ? (
        <p>
          Title: {data.title} <br /> Body: {data.body}
        </p>
      ) : (
        <p>Data is Loading...</p>
      )}
    </div>
  );
}

export default DataFetch;
