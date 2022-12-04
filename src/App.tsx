import {ChakraProvider} from "@chakra-ui/react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import PostDetailPage from "./pages/PostDetailPage";
import Sidebar from "./components/Sidebar";

const MainLayout = () => (
  <div className='min-h-screen flex flex-col items-center bg-slate-100'>
    <Navbar/>
    <div className='w-full max-w-7xl mt-5 flex justify-start p-2 gap-2'>
      <Sidebar/>
      <Outlet/>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/users',
        element: <ProfilePage/>,
      },
      {
        path: '/profile',
        element: <ProfilePage/>,
      },
      {
        path: '/posts/:id',
        element: <PostDetailPage/>,
      },
    ],
  },
]);

function App() {
  
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  )
}

export default App
