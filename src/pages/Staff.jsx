import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { theContextOfTheUser } from "../context/UserContext";

export default function Staff() {
    const [para,setPara] = useState("")
const {userInformation} = theContextOfTheUser()

 const myFunct = (GivenName)=>{
    const foundUser = userInformation.find((item)=>item.firstname == GivenName)
    console.log(foundUser)
 }
 console.log(userInformation)
  return (
    <div className="h-screen w-screen">
        <input  value={para} onChange={(e)=>setPara(e.target.value)} type="text"  /> 
        <button onClick={()=>myFunct(para)}>Send </button>
      <div className="flex w-full h-full">
        <Sidebar />
        <div className="w-full p-">
          <Navbar />
          {userInformation.map((singleData, dataKey) => (
            <div key={dataKey}>{singleData.firstname}</div>

          ))}
        </div>
      </div>
    </div>
  );
}
