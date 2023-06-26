import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout"
import { useSelector } from "react-redux";
import { selectuser } from "./components/features/userslice";
const App=()=>{
  const user=useSelector(selectuser)
  return <div>
     {user ? <Logout/>:<Login/>}
  </div>
}
export default App;                                   