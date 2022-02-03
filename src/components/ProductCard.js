import "./styles/ProductCard.scss";

function ProductCard(props) {
  const { name, outside, productUrl } = props;
  return (
    <li className="star-view-product-card">
      <img src={productUrl} alt={name} />
    </li>
  );
}

export default ProductCard;
