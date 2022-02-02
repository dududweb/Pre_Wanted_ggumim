import "../components/styles/ToolTipBox.scss";
import RightArrow from "../asset/icon/rightarrow.png";

function ToolTipBox(props) {
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
    <div className="tool-tip-box">
      <div className="tool-tip-contents">
        <div className="tool-tip-image">
          <img src={productUrl} alt="에틱타일" />
        </div>
        <div className="tool-tip-word">
          <div className="tool-tip-title">
            <h3 className="product-title">{name}</h3>
          </div>
          <div className="tool-tip-price">
            <span>예상가</span>
            <span>76,000</span>
          </div>
        </div>
        <div className="view-more-button">
          <img src={RightArrow} alt="moreView" />
        </div>
      </div>
    </div>
  );
}

export default ToolTipBox;
