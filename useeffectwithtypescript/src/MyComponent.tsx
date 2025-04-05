//Imports useState for managing state and useEffect for performing side effects like fetching data in the component.
import { useState, useEffect } from "react";

//Defines a Product type to represent the structure of product data, including fields like id, title, price, and images.
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const MyComponent = () => {
  // State with type annotation. Initializes state data with useState, where the type is either Product or null (for the initial empty state).
  const [data, setData] = useState<Product | null>(null);

  //The useEffect hook runs on component mount ([] as the dependency array), fetching data asynchronously and updating state with setData once the data is received.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/1");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    //Renders the product details from data if it's available. If not, displays "Loading..." while waiting for the API response. Maps over the images array to display product images.
    <div>
      {data ? (
        <div>
          <p>ID : {data.id}</p>
          <p>Title : {data.title}</p>
          <p>Description : {data.description}</p>
          <p>Price : {data.price}</p>
          <p>DiscountPercentage : {data.discountPercentage}</p>
          <p>Rating : {data.rating}</p>
          <p>Stock : {data.stock}</p>
          <p>Brand : {data.brand}</p>
          <p>Category : {data.category}</p>
          <p>Thumbnail : {data.thumbnail}</p>
          {data.images.map((img) => (
            <img src={img} />
          ))}
        </div>
        ) : (
          <p>Loading...</p>
      )}
    </div>
  );
};

export default MyComponent;