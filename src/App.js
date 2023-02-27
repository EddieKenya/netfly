import HomePage from "./pages/Home";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import LogOut from "./pages/LogOut";

const App = () => {
  return ( 
    <div className="App">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </div>
   );
}
 
export default App;
