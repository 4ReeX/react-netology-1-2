import * as PropTypes from "prop-types";
import {Component} from "react";

class ShopItemFunc extends Component {
    render() {
        let {item} = this.props;
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">
                    {item.descriptionFull}
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">
                        {item.currency}
                        {item.price.toFixed(2)}
                    </div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}

ShopItemFunc.propTypes = {item: PropTypes.any}

export default ShopItemFunc;

