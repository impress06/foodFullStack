import  { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {

    const { setToken,  loadCartData,setUser } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Login");
    const url="http://127.0.0.1:8000"

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()

        let new_url = url;
        if (currState === "Login") {
            new_url += "/auth/login";
        }
        else {
            new_url += "/user"
        }
        const response = await axios.post(new_url, data);
       
        if (!response.data.error) {
           console.log("user14",response.data.user)
            setToken(response.data.token)
            setUser(response.data.user)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user",JSON.stringify(response.data.user) )
            loadCartData({ token: response.data.token })
            setShowLogin(false)
        }
        else {
            toast.error(response.data.message)
        }
    }

    const closePopup = (e) => {
        if (e.target.className === 'login-popup') {
            setShowLogin(false)
        }
    }

    return (
        <div className='login-popup' onClick={closePopup}>
            <form onClick={(e) => e.stopPropagation()} onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2> <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required /> : <></>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                {currState==="Login" && (  <div className="login-popup-condition">
                    <input type="checkbox" name="rememberMe" id="rememberMe" required />
                    <p>RememberMe</p>
                </div>)}
                <button>{currState === "Login" ? "Login" : "Create account"}</button>
              {currState==="Sign Up" && (  <div className="login-popup-condition">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>)}
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
