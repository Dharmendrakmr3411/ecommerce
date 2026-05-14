import React,{useState,useEffect} from "react";
import './NewCollections.css'

import Item from '../Item/Item'
const NewCollections = () => {
  const [new_collections,setNew_Collections] = useState([])
   useEffect(()=>{
    fetch('http://127.0.0.1:4000/newcollections')
    .then((response) => response.json())
    .then((data) => setNew_Collections(data))
   },[])
    return(  
       <div className='new-collections'>
       <h1>NEW COLLECTIONS</h1>
       <hr/>
       <div className='collections'>
       {new_collections.map((item,i) => {
         return <Item key={item.id} props={item}/>
       })}
       </div>
       </div>
    )
}
export default NewCollections