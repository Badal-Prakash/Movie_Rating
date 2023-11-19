import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Star from './component/StarRating'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Star maxrating={5} message={["Terrible","Bad","Okey","Good","Amazing"]}/>
    <Star maxrating={10} size={20} color={"red"} className="test"/>
  </React.StrictMode>,
)
