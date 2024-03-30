import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './Pages/Navbar';
//import { children } from 'react-router-dom';
import Dashbord from './Pages/Dashbord'
import StudentDetails from './Pages/StudentDetails';
import Students from './Pages/Students'
import Course from './Pages/Course';
import Login from './Pages/Login';
import Grades from './Pages/Grades';
const router=createBrowserRouter([
  {
  path:'/',
  element:<Navbar />,
  children:[
  {path:'/',element:<Login />},
  {path:'/dashbord',element:<Dashbord />},
  {path:'/students/:studentid/:studentname',element:<StudentDetails />},
  {path:'/students',element:<Students />},
  {path:'/courses',element:<Course />},
  {path:'/grade',element:<Grades />}
   ]
  }
]);
function App() {
  return (
    <div>
          <RouterProvider router={router}/>
    </div>
  );
}

export default App;