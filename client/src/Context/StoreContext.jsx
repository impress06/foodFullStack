import { createContext, useEffect, useState } from "react";
import useAxios from "../service/useAxios"
import { food_list, menu_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
     const {axiosWithToken} =useAxios()
    const url = import.meta.env.VITE_BASE_URL
    const [food_list, setFoodList] = useState([])
    const [user, setUser] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "$";
    const deliveryCharge = 5;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axiosWithToken.post(`/card/add`,{itemId})
            
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axiosWithToken.post(`/card/remove`,{itemId})
            
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
        
            try {
              if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }  
            } catch (error) {
                
            }
            
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response= await axiosWithToken.get(`/food`)
        console.log("response",response)
    
        setFoodList(response.data.data)
    }

    const loadCartData = async () => {
        const response = await axiosWithToken.post(`/card/get`, {});
     
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData() {
          const res=  await fetchFoodList();
          console.log("res",res)
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    console.log("userContext",user)

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge,
        user,
        setUser
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;