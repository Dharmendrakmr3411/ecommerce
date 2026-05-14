import React,{createContext,useState,useEffect} from "react";  
export const ShopContext = createContext(null)
const getDefaultCart = ()=> {
    let cart={}
    for(let index=0;index<300+1;index++)
    {
     cart[index]=0
    }
    return cart
 }
const ShopContextProvider = (props)=>{
    const [all_products, setAll_Products] = useState([])
    const [cartItems,setCartItems] = useState(getDefaultCart())
    
    useEffect(()=>{
       fetch('http://127.0.0.1:4000/allproducts')
       .then((response)=>response.json())
       .then((data)=>{setAll_Products(data)})
        
       if(localStorage.getItem('auth-token'))
       {
        fetch('http://127.0.0.1:4000/getcart', {
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json'
            },
        body:'',
        }).then((res)=>res.json())
        .then((data)=>setCartItems(data))
       }

    },[])
    

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) 
        if(localStorage.getItem('auth-token'))
        {
            fetch('http://127.0.0.1:4000/addtocart',{
                method:'POST',
                headers:{
                    Aceept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://127.0.0.1:4000/removefromcart',{
                method:'POST',
                headers:{
                    Aceept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({"itemId":itemId})
            }).then((res)=>res.json())
            .then((data)=>console.log(data))
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0
        console.log(all_products)
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((product)=> product.id===Number(item))
                totalAmount += itemInfo.new_price*cartItems[item]
            }
            console.log(totalAmount)
        }
        return totalAmount
    }

    const getTotalCartItems = ()=> {
          let totalItems = 0
          for(const item in cartItems)
          {
            if(cartItems[item]>0)
            {
                totalItems += cartItems[item]
            }
          }
          return totalItems
    }
    const contextValue = {getTotalCartAmount,getTotalCartItems,all_products,cartItems,addToCart,removeFromCart}
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider