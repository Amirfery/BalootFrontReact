import Thumbnail from "./Images/thumbnail.png"
import CommodityButton from "./CommodityButton";
import {useEffect, useState} from "react";

function CartItem(props) {
    const [inStock, setInStock] = useState(0)
    useEffect(() => {
        setInStock(props.commodity.inStock)
    }, [props.commodity, props.inCart])
    return (
        <tr className="shadow">
            <td scope="row"><img className="item-image" src={props.commodity.image} alt="commodity-image"/>
            </td>
            <td>{props.commodity.name}</td>
            <td>{props.commodity.categories}</td>
            <td>${props.commodity.price}</td>
            <td>{props.commodity.providerId}</td>
            <td className="rating-text">{props.commodity.rating}</td>
            <td className="remaining-text">{inStock}</td>
            <td>
                {!props.purchased ? <CommodityButton setInStock={setInStock} count={props.inCart}
                                                    commodity={props.commodity}/> : props.inCart}
            </td>
        </tr>
    )
}

export default CartItem;