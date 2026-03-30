import '../Style/LogInStyle.css'
import { useState } from 'react';
import { FaSignInAlt } from "react-icons/fa"
import logy from'../assets/logo-withoutbg.png'
import { ToastContainer , toast } from "react-toastify"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css"
export default function Login(){
    const navigate = useNavigate();
    const[info , setInfo] = useState({
    email:"",
    name:""
  });
  const[emailValid , setEmailValid] = useState(null);
  


  // Validat the email

  const validateEmail = (value)=>{
     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
     setEmailValid(isValid);
     return isValid;
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const isEmailOK = validateEmail(info.email);

    if(!isEmailOK){
        toast.error("please fix the errors before Submitting the form 😊");
    }else{
        toast.success("Great login Successfully 😍");
        
         localStorage.setItem("userEmail", info.email);
         localStorage.setItem("userName", info.name);
        setTimeout(() => {
      navigate("/quizpage");
       }, 1500);

    }
  }
    return(<>
       <div className="app">
        <div className='logo'><img src = {logy}/></div>
        <form className="loginForm" onSubmit={handleSubmit}>
            <div className="formHeader">
               
                <h1>Login</h1>
                <p>Welcome to White-Hackers</p>
            </div>

            <div className="inputWrapper">
                <label htmlFor="email">Email</label>
                <input type="text" id = "email" placeholder="e.g. whiteHacker@gmail.com"
                      value = {info.email}
                      onChange={(e) =>{setInfo({...info , email:e.target.value});
                       validateEmail(e.target.value)}}/>


                {emailValid === false && info.email.trim() !== "" && (
                  <span className="error">The email format is not valid 🫣</span>
                )}
            </div>

             <div className="inputWrapper">
                <label htmlFor="user-name">Username

                </label>
                <input type="text" id = "user-name" placeholder="enter your name here ..."
                       value={info.name}
                       onChange={(e)=>{setInfo({...info , name:e.target.value});}}/>
                {info.name.trim() ==="" && (
                  <span className="error">You must enter your name🫣</span>
                )}
                
            </div>
            
             <button>Login <FaSignInAlt/></button>
        </form>

        <ToastContainer position="top-right" autoClose ={3000}/>
       </div>
    </>)
}