import React, {useState,useEffect} from "react";
import './Popular.css'
import Item from '../Item/Item'
const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([])
    useEffect(()=>{
        fetch('http://127.0.0.1:4000/popularinwomen')
        .then((response) => response.json())
        .then((data) => setPopularProducts(data))
       },[])
    return(  
        <div className="popular">
        <h1>POPULAR IN WOMENS</h1>
        <hr/>
        <div className='popular-item'>
            {
                popularProducts.map((item,i)=>{
                return <Item key={item.id} props={item}/>
             })
            }
        </div>
        </div>
    )
}
export default Popular