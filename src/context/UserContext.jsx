import { createContext, useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  setDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { auth, firestore } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const userContext = createContext();
// const navigate = useNavigate()/;

export default function UserContext({ children }) {
  const [userInformation, setUserInformatiom] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = query(collection(firestore, "user_data"));
      onSnapshot(data, (QuerySnapshot) => {
        const databaseInfo = [];
        QuerySnapshot.forEach((doc) => {
          databaseInfo.push({ id: doc.id, ...doc.data() });
          setUserInformatiom(databaseInfo);
        });
      });
    };
    getData();
  }, []);

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((item) => {
      const foundUser = userInformation.find((itemData) => 
        itemData.user_id == item.user.uid
      );
      console.log(foundUser);
    });
  };
  return (
    <userContext.Provider value={{ userInformation, login }}>
      {children}
    </userContext.Provider>
  );
}
export const theContextOfTheUser = () => {
  return useContext(userContext);
};
