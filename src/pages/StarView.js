import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ToolTipBox from "../components/ToolTipBox";
import "./StarView.scss";

function StarView() {
  const [data, setData] = useState([]);
  const [selectId, setSelectId] = useState("");
  const [isClicked, setIsClicked] = useState(false);

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

  const handleToolBox = (targetId) => {
    setSelectId(targetId);
    setIsClicked(!isClicked);
    // const result = data.productList?.filter((el) => el.productId === targetId);
    // return result;
  };

  return (
    <div className="star-view-content">
      <div className="star-view-content-image">
        {data && <img src={data.imageUrl} alt="스타뷰" />}
      </div>
      {data &&
        data.productList?.map((el, idx) => {
          return (
            <ToolTipBox
              key={idx}
              id={el.productId}
              name={el.productName}
              outside={el.outside}
              pointX={el.pointX}
              pointY={el.pointY}
              priceDiscount={el.priceDiscount}
              priceOriginal={el.priceOriginal}
              discountRate={el.discountRate}
              productUrl={el.imageUrl}
              handleToolBox={handleToolBox}
              selectId={selectId}
              outside={el.outside}
              isClicked={isClicked}
            />
          );
        })}
      <div className="star-view-card-wrap">
        <ul className="star-view-card-swiper">
          {data &&
            data.productList?.map((el) => {
              return (
                <ProductCard
                  key={el.id}
                  name={el.productName}
                  outside={el.outside}
                  pointX={el.pointX}
                  pointY={el.pointY}
                  productUrl={el.imageUrl}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default StarView;
