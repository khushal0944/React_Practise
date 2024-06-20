import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route ,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Github,{useGit} from './components/Github.jsx'

// const route = createBrowserRouter([
//     {path: "/",
//     element: <Layout />,
//     children: [
//         {
//             path: "",
//             element: <Home />
//         },
//         {
//             path: "about",
//             element: <About />
//         }
//     ]
// }
// ])

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />   
            <Route path="about" element={<About />} />
            <Route path=":userid" element={<User />} />
            <Route loader={useGit} path="github" element={<Github />} />
        </Route>
    )
)

// const route = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<Layout />}>
//         <Route path='' element={<Home />} />
//         <Route path='about' element={<About />} />
//       </Route>
//     )
//   )

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={route}/>
    </React.StrictMode>,
)
