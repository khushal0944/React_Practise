import {UserContextProvider} from './Context/UserContext'
import Login from './Components/Login'
import Profile from './Components/Profile'

export default function App() {
  
  return (
    <div  className = 'w-full h-screen bg-black text-white flex items-center justify-center flex-col'>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
  )
}