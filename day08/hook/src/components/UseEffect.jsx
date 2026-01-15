import React, { useEffect, useState } from "react";

const UseEffect = () => {
  //     const [data, setData] = useState(null);
  //     useEffect(() => {
  //         // console.log("Component Mounted");
  //        fetch("https://dummyjson.com/products")
  //         .then(response => response.json())
  //         .then(json => setData(json));
  //     }, []);

  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      let response = await fetch("https://dummyjson.com/products");
      let result = await response.json();
      setData(result);
    })();
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch("https://dummyjson.com/products");
    //         const json = await response.json();
    //         setData(json);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // fetchData();
  }, []);

  return (
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default UseEffect;
