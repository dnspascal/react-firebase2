import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Staff from "./pages/Staff";

export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login/> }/>
        <Route path="/register" element={<Register/>} />
        <Route path ="/staff" element={<Staff/>}/>
      </Routes>
    </BrowserRouter>
  );
}
