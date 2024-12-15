
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ToDolist from './components/ToDolist/ToDolist'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserAuthentication from './components/UserAuthentication/UserAuthentication'
import BlogApp from './components/BlogApp/BlogApp'
import CompleteECommerce from './components/CompleteECommerce/CompleteECommerce'
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle'
import CounterContext from './components/CounterContext/CounterContext'
import ECommCart from './components/ECommCart/ECommCart'
import FetchDisplayUser from './components/FetchDisplayUser/FetchDisplayUser'
import WeatherApp from './components/WeatherApp/WeatherApp' 
import MultiStepForm from './components/MultiStepForm/MultiStepForm'


function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<ToDolist />} />
        <Route path="userauthentication"  element={<UserAuthentication />}/> 
        <Route path="blogapp" element={<BlogApp/>}/>
        <Route path="completeecommerce" element={<CompleteECommerce/>}/>
        <Route path="darkmodetoggle" element={<DarkModeToggle />}/>
        <Route path="countercontex" element={<CounterContext/>}/>
        <Route path="ecommcart" element={<ECommCart/>}/>
        <Route path="fetchdisplay" element={<FetchDisplayUser/>}/>
        <Route path="weather" element={<WeatherApp/>}/>
        <Route path="multistepform" element={<MultiStepForm/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
