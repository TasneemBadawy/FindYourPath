import '../Style/Home.css'
import logy from'../assets/logo-withoutbg.png'
import { Link } from 'react-router-dom'
export default function Home(){
       return(<>
       <div className='logo'><img src = {logy}/></div>
       <div className='main'>
          <div className='container'>
            <h1>White-Hackers</h1>
            <div className='typewriter'>
            <h3>Tech Path Finder ✨</h3>
            </div>
         <div className='info'>
            <p className='text-balance'>Answer questions about your personality, 
               work style, and what excites you and we’ll help 
               you discover which tech field suits you best.
               Whether you're into design, logic, security, 
               data, or building complete systems, you'll get 
               a personalized recommendation with a clear path forward.
               </p>
         </div> 
           <Link to = "/login"><button>Let's go 😉</button></Link> 
          </div>
         </div> 
       
       </>)
}