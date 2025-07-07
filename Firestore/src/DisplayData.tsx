import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

interface User {
  id?: string; // id is optional, as it will only be available after data is fetched
  name: string;
  age: number;
}

const DisplayData = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const dataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as User[];
      setUsers(dataArray);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayData;



// React: Used to create a functional component with useState and useEffect.
// db: The Firestore database instance initialized in firebaseConfig.
// collection: Used to specify the Firestore collection to interact with.
// getDocs: Fetches all documents from a specified Firestore collection.

// const [users, setUsers] = useState<User[]>([]);
// users: An array of User objects fetched from Firestore.
// useState([]): Initializes the state as an empty array.

// useEffect: Ensures the fetchData function runs once after the component mounts.
// getDocs: Fetches all documents in the users collection.
// querySnapshot.docs.map: Maps over the documents and combines the id (document ID) with the document data (doc.data()).
// setUsers(dataArray): Updates the component's state with the fetched data.
