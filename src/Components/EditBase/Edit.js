import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../Base/Base";

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const Edit = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const editData = async (id, newName, newEmail) => {
    const userDoc = doc(db, "shotNameColl", id);
    const newField = { fusr: newName, newEmail: newEmail };
    await updateDoc(userDoc, newField);
  };

  return (
    <div>
      <input
        placeholder="firstName"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        placeholder="lastName"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <button>Submit</button>
    </div>
  );
};

export default Edit;
