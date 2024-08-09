import { useContext } from 'react';
import Home from './pages/home';
import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom"
import { AuthContext } from './context/authContext';



function App() {
  const currentUser = useContext(AuthContext)
  const user = {
    firstName: 'Zainab',
    lastName: 'Imadulla',
  }
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div> 
        <Landing/>
      </div>,
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/closet",
      element:
      <ProtectedRoute>
        <Home user = {user}/>
      </ProtectedRoute>
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
