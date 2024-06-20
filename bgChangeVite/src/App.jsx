import { useState } from "react"

function App() {
  let [color, setColor] = useState("black");

  return (
    <div className="h-screen w-full bg-black flex justify-center items-end" style={{backgroundColor: color}}>
      <div className="sm:w-1/2 w-11/12 bg-white m-2 h-20 p-2 rounded-xl flex justify-around items-center">
        <button 
        className="bg-red-500 rounded-xl w-20 h-10 gap-x-1 hover:bg-red-600 hover:cursor-pointer"
        onClick={(e)=>{
          setColor(e.target.innerHTML.toLowerCase())
        }}
        >Red</button>
        <button 
        className="bg-green-500 rounded-xl w-20 h-10 hover:bg-green-600 hover:cursor-pointer"
        onClick={(e)=>{
          setColor(e.target.innerHTML.toLowerCase())
        }}
        >Green</button>
        <button 
        className="bg-blue-500 rounded-xl w-20 h-10 hover:bg-blue-600 hover:cursor-pointer"
        onClick={(e)=>{
          setColor(e.target.innerHTML.toLowerCase())
        }}
        >Blue</button>
        <button 
        className="bg-orange-500 rounded-xl w-20 h-10 hover:bg-orange-600 hover:cursor-pointer"
        onClick={(e)=>{
          setColor(e.target.innerHTML.toLowerCase())
        }}
        >Orange</button>
        <button 
        className="bg-pink-500 rounded-xl w-20 h-10 hover:bg-pink-600 hover:cursor-pointer"
        onClick={(e)=>{
          setColor(e.target.innerHTML.toLowerCase())
        }}
        >Pink</button>
        <button 
        className="bg-purple-500 rounded-xl w-20 h-10 hover:bg-purple-600 hover:cursor-pointer"
        onClick={(e)=>{
          setColor(e.target.innerHTML.toLowerCase())
        }}
        >Purple</button>
        <button 
        className="bg-gray-500 rounded-xl w-20 h-10 hover:bg-gray-600 hover:cursor-pointer"
        onClick={(e)=>{
          setColor(e.target.innerHTML.toLowerCase())
        }}
        >Gray</button>
      </div>
    </div>
  )
}

export default App
