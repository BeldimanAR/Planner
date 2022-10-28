import './App.css';
// LIBRARIES
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './config/AppRoutes';


const App = () => {
  return (
   <BrowserRouter>
      <AppRoutes/>
   </BrowserRouter>
  );
}

export default App;
