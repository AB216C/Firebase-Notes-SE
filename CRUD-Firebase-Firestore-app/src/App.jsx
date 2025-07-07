
import { useState,useEffect } from 'react';
import './App.css'
import { db } from "./firebase-config.js";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"
function App() {

  const [users, setUsers] = useState([]);    //[] since it will be an empty array
  const usersCollectionRef = collection(db, "users");
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);


  //WE ARE USING addDoc function to make created newName and New Age appear on User interface

  const getUsers = async()=> {
  const data = await getDocs(usersCollectionRef);
    setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
  }

  useEffect(()=>{
    getUsers();

  },[])        //This is hooks shows code that will be called once the app renders or user visit the application

  const createUser = async () => {
    await addDoc(usersCollectionRef, {name:newName, age:Number(newAge)});
    console.log(newName);
    getUsers();
  };

  const updateUser = async(id, age)=> {
    const userDoc = doc(db, "users", id);
    const newFields = {age: age + 1};
    await updateDoc(userDoc, newFields);
    getUsers();
  }

  const deleteUser = async(id)=> {
     const userDoc = doc(db, "users", id);
     await deleteDoc(userDoc);
     getUsers();
  }

  return (
    <>

    <h1>CRUD OPERATIONS</h1>

    <input type="name" placeholder="Name..."
    onChange = {(event)=>{
      setNewName(event.target.value)
    }}
    />
    <input type="number" placeholder="Age..." 
    onChange = {(event)=>{
      setNewAge(event.target.value)
    }}
    />

{/* Onclick here has no argument */}
    <button onClick={createUser} >Create User</button> 


    {users.map((user)=>{
      return(
        <div>
          <h1>Name:{user.name} </h1>
          <h1>Age:{user.age}</h1>
  {/* Onclick here has an argument(user.id and user.age */}
          <button onClick={()=>{updateUser(user.id,user.age)}} >Increase Age</button>
          <button onClick={()=>{deleteUser(user.id)}} >delete User</button>  
        </div>
      )
    })}

    </>
  )
}

export default App

//return section: considered as UI(user interface)
//It is through map function, each user is modified accordingly
