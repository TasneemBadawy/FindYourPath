import { Routes, Route } from 'react-router-dom';
import './App.css'
import QuizPage from './Pages/QuizPage';
import Login from './Pages/LogIn';
import Home  from './Pages/Home'
import Result from './Pages/Result';
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/quizpage" element={<QuizPage/>}/>
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
