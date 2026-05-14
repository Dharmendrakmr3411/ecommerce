import React from "react";
import arrow_icon from '../Assets/breadcrum_arrow.png'
import './Breadcrum.css'
const Breadcrum = (props) => {
const {product} = props
    return(  
       <div className="breadcrum">
        HOME<img src={arrow_icon} alt=''></img>SHOP<img src={arrow_icon} alt=''></img>{product.category}<img src={arrow_icon} alt=''></img>
        {product.name}
        </div>
    )
}
export default Breadcrum