import React, { useState } from "react";

const Test = () => {
  const [adat, setAdat] = useState([]);
  const fetchData = async () => {
    const response = await fetch("/api/getdata");
    const data = await response.json();
    setAdat(data.results);
  };
  return (
    <div>
      <button onClick={fetchData}>Load data</button>
      {adat.map((data) => {
        return (
          <div key={data.name}>
            {data.name} {data.population}
          </div>
        );
      })}
    </div>
  );
};

export default Test;
