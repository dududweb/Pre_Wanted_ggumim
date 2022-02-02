import "./styles/ProductCard.scss";

function ProductCard(props) {
  const {
    name,
    outside,
    pointX,
    pointY,
    priceDiscount,
    priceOriginal,
    productUrl,
  } = props;
  return (
    <div className="star-view-product-card">
      <img src={productUrl} alt={name} />
    </div>
  );
}

export default ProductCard;
