import "../components/styles/ToolTipBox.scss";
import RightArrow from "../asset/icon/rightarrow.png";
import ExitButton from "../asset/icon/toolExitButton.png";
import SearchButton from "../asset/icon/toolSearchButton.png";

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
    selectId,
    isClicked,
  } = props;

  const handleTag = {
    top: pointX * 1.6,
    left: pointY * 1.6,
  };

  return (
    <div
      className="tag"
      id={id}
      style={handleTag}
      onClick={() => {
        handleToolBox(id);
      }}
    >
      <img
        src={selectId === id && isClicked ? ExitButton : SearchButton}
        alt="searchIcon"
      />
      <div
        className={`tool-tip-box ${
          selectId === id && isClicked ? "block" : "hidden"
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
                <span>예상가</span>
              ) : (
                <span>{discountRate ? `${discountRate}%` : "가격"}</span>
              )}
              <span>
                {priceOriginal === priceDiscount
                  ? priceOriginal
                  : priceDiscount}
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
