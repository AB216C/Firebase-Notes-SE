import React, { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

interface User {
  id?: string; // id is optional, as it will only be available after data is fetched
  name: string;
  age: number;
}

const AddDataForm = () => {
  const [data, setData] = useState<Omit<User, 'id'>>({ name: '', age: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data,
      [name]: name === 'age'
      ? value === ''? 0 : parseInt(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'users'), data);
      alert('Data added!');
      setData({ name: '', age: 0 }); // reset form
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={data.name} onChange={handleChange} placeholder="Name" />
      <input name="age" type="number" value={data.age} onChange={handleChange} placeholder="Age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddDataForm;


// React and useState: Used to create a functional React component and manage component state.
// db: The Firestore database instance initialized in firebaseConfig.
// collection and addDoc: Firestore methods for accessing a specific collection and adding a new document to it.
// interface User {
//   id?: string; // Optional field for the document ID, not needed when adding data.
//   name: string;
//   age: number;
// }
// Defines a TypeScript interface to represent the structure of the data (a User) that will be stored in Firestore.



// const [data, setData] = useState<Omit<User, 'id'>>({ name: '', age: 0 });
// The useState hook initializes a data object to keep track of the form inputs (name and age).
// The Omit<User, 'id'> type ensures data has only name and age fields, excluding the id.


// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setData({ ...data, [name]: name === 'age' ? parseInt(value) : value });
// };
// Updates the data state whenever an input changes.
// If the input field is age, the value is converted to a number using parseInt.

// Renders a form with two input fields (name and age) and a submit button.
// The onChange handler dynamically updates the data state as the user types.
// The onSubmit handler triggers the Firestore data submission when the form is submitted.

