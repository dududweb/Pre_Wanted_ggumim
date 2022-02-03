import SaleTag from "../asset/icon/saleIcon.png";
import "./styles/ProductCard.scss";

function ProductCard(props) {
  const {
    id,
    selectId,
    name,
    productUrl,
    handleToolBox,
    isClicked,
    discountRate,
  } = props;
  return (
    <div
      className={`star-view-product-card-part ${
        selectId === id && isClicked && "selected-box"
      }`}
    >
      <div
        className="star-view-product-card"
        onClick={() => {
          handleToolBox(id);
        }}
      >
        {discountRate !== 0 && (
          <div className="saletag">
            <h1 className="sale-info">
              {discountRate}
              <span>%</span>
            </h1>
          </div>
        )}
        <img src={productUrl} alt={name} />
      </div>
    </div>
  );
}

export default ProductCard;
