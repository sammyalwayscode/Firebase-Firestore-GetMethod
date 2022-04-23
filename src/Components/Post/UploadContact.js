import { useState } from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Base/Base";
import { useNavigate } from "react-router-dom";

const UploadContact = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const postData = async () => {
    addDoc(collection(db, "contactUsers"), {
      firstName,
      lastName,
      userCompany: company,
      userPhoneNo: phoneNo,
    });
    setFirstName("");
    setLastName("");
    setCompany("");
    setPhoneNo("");
    // navigate("/");
    // alert("Data Uploaded Sucessfully");
  };
  return (
    <Container>
      <Wrapper>
        <h2>Fill In these Fields</h2>
        <strong>First Name</strong>
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="Contact First Name"
        />
        <strong>Last Name</strong>
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Contact Last Name"
        />
        <strong>Company Group</strong>
        <input
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          placeholder="Company"
        />
        <strong>Phone Number</strong>
        <input
          value={phoneNo}
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
          placeholder="+234"
        />
        <button onClick={postData}>Register Contact</button>
      </Wrapper>
    </Container>
  );
};

export default UploadContact;

const Container = styled.div`
  min-height: 90vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 310px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    height: 30px;
    width: 260px;
    outline: none;
    margin: 5px 0;
    font-family: poppins;
  }

  button {
    padding: 10px 25px;
    outline: none;
    border: none;
    background-color: #0f9d58;
    color: #fff;
    font-family: poppins;
    font-weight: 600;
    border-radius: 5px;
    margin: 20px 0;
    transition: all 350ms;
    cursor: pointer;
    :hover {
      transform: scale(0.9);
    }
  }
`;
