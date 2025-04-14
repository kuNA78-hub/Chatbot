import React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import Landing from './pages/landing'
import Mypage from './pages/my-page'
import { ThemeProvider } from "@/components/theme-provider"
import ProtectedRoute from "./components/protected-route";
import Library from "./pages/library";

const router= createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Landing/>
        
      },
      {
        path:'/my-page',
        element:
        <ProtectedRoute> <Mypage/></ProtectedRoute> 
      },
      {
        path: "/library",
        element: (
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        ),
      },
    ]
  }
]);
function App() {
  

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
           <RouterProvider router={router}/>;
           </ThemeProvider>

  )
}

export default App
