import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db, storage } from "../Base/Base";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const ImgUpload = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [reGet, setReGet] = useState([]);

  const imageUpload = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, "/myImage", +file.name);
    const storageRef = uploadBytesResumable(fileRef, file);
    getDownloadURL(storageRef.snapshot.ref).then((url) => {
      setAvatar(url);
    });
  };

  const postData = async () => {
    addDoc(collection(db, "imgUp"), {
      name,
      email,
      avatar: await avatar,
    });
    setName("");
    setEmail("");
    setAvatar("");
  };

  const getData = async () => {
    const user = await collection(db, "imgUp");
    onSnapshot(user, (snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
      });
      setReGet(r);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(avatar);

  return (
    <Container>
      <Wrapper>
        <InputDatas>
          <input onChange={imageUpload} type="file" />
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="What is Your Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email Adress"
          />
          <button onClick={postData}>Sumit Now</button>
        </InputDatas>
        <ViewData>
          {reGet?.map((props) => (
            <Card key={props.id}>
              <img src={props.avatar} alt="" />
              <h2> {props.name} </h2>
              <i> {props.email} </i>
            </Card>
          ))}
        </ViewData>
      </Wrapper>
    </Container>
  );
};

export default ImgUpload;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;
const InputDatas = styled.div`
  min-height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #db4437;
  position: static;

  input {
    width: 80%;
    height: 30px;
    margin: 10px 0;
    font-family: poppins;
  }

  button {
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 5px;
    background-color: #f4b400;
    color: white;
    border: none;
    font-family: poppins;
    margin: 10px 0;
    transition: all 350ms;
    transform: scale(1);

    :hover {
      transform: scale(0.97);
      cursor: pointer;
    }
  }
`;
const ViewData = styled.div`
  min-height: 100vh;
  width: 50%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background-color: #4285f4;
`;
const Card = styled.div`
  height: 320px;
  width: 250px;
  background-color: #fff;
  text-align: center;
  margin: 10px;

  img {
    height: 100px;
    width: 100px;
    background-color: red;
    border-radius: 50%;
    margin-top: 20px;
  }
`;
