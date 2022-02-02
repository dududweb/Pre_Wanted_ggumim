import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function StarView() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await (
      await fetch("https://cdn.ggumim.co.kr/test/image_product_link.json")
    ).json();
    setData(result);
  };

  console.log(data);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="star-view-content">
      <div className="star-view-content-image">
        <img src={data.imageUrl} alt={data.id} />
      </div>
      <ProductCard />
    </div>
  );
}

export default StarView;
