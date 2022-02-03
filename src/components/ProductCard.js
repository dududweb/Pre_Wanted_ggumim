import "./styles/ProductCard.scss";

function ProductCard(props) {
  const { id, selectId, name, productUrl, handleToolBox } = props;
  return (
    <div
      className={`star-view-product-card-part ${
        selectId === id && "selected-box"
      }`}
      onClick={() => {
        handleToolBox(id);
      }}
    >
      <div className="star-view-product-card">
        <img src={productUrl} alt={name} />
      </div>
    </div>
  );
}

export default ProductCard;
