import React from "react";
import './DescriptionBox.css'
const DescriptionBox = () => {

    return(  
       <div className="descriptionbox">
         <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
         </div>
         <div className="descriptionbox-description">
            <p>An eCommerce website is an online platform that allows businesses 
                to sell products or services to customers over the internet. It provides users with 
                a convenient way to browse items, compare prices, and make purchases from anywhere at any time. 
                These websites typically include features such as product listings with images and descriptions, 
                search and filter options, shopping carts, and secure checkout systems.</p>
             <p>Customers can create accounts to manage their orders, track deliveries, and save their preferences 
                for future purchases. Payment options usually include credit/debit cards, digital wallets, and sometimes 
                cash on delivery. On the business side, eCommerce platforms help manage inventory, process orders, 
                and analyze customer behavior to improve sales strategies.
            </p>    
         </div>
       </div>
    )
}

export default DescriptionBox