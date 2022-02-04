import "../components/styles/ToolTipBox.scss";
import RightArrow from "../asset/icon/rightarrow.png";
import ExitIcon from "../asset/icon/toolExitButton.png";
import SearchIcon from "../asset/icon/toolSearchButton.png";

function ToolTipBox(props) {
  const {
    id,
    name,
    outside,
    pointX,
    pointY,
    priceDiscount,
    priceOriginal,
    discountRate,
    productUrl,
    handleToolBox,
    isSelectId,
    imageWidthSize,
    imageHeightSize,
  } = props;

  const magnification = 1.6;

  const handleTag = {
    top: pointX * magnification,
    left: pointY * magnification,
  };
  const { top, left } = handleTag;
  const handleToggle = () => {
    handleToolBox(isSelectId ? null : id);
  };

  return (
    <div
      className="tag"
      data-x={pointX}
      data-y={pointY}
      id={id}
      onClick={handleToggle}
      style={handleTag}
    >
      <img src={isSelectId === id ? ExitIcon : SearchIcon} alt="searchIcon" />
      <div
        className={`tool-tip-box-default ${
          isSelectId === id ? "block" : "hidden"
        } ${
          top >= imageHeightSize / 4 && left >= imageWidthSize / 4
            ? "tool-tip-box1"
            : "tool-tip-box2"
        }`}
      >
        <div className="tool-tip-contents">
          <div className="tool-tip-image">
            <img src={productUrl} alt={name} />
          </div>
          <div className="tool-tip-word">
            <div className="tool-tip-title">
              <h3 className="product-title">{name}</h3>
            </div>
            <div className="tool-tip-price">
              {outside ? (
                <span className="price-info">예상가</span>
              ) : (
                <span className="price-discount-info">
                  {discountRate ? `${discountRate}%` : "가격"}
                </span>
              )}
              <span className="price">
                {priceOriginal === priceDiscount
                  ? priceOriginal.toLocaleString()
                  : priceDiscount.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="view-more-button">
            <img src={RightArrow} alt="moreView" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolTipBox;
