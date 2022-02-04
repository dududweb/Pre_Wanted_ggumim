import "./styles/ProductCard.scss";

function ProductCard(props) {
  const { id, isSelected, name, productUrl, handleToolBox, discountRate } =
    props;

  const handleToggle = () => {
    handleToolBox(isSelected ? null : id);
  };

  return (
    <div
      className={`star-view-product-card-part ${isSelected && "selected-box"}`}
    >
      <div className="star-view-product-card" onClick={handleToggle}>
        {discountRate !== 0 && (
          <div className="sale-tag">
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
