import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { db } from "../Base/Base";
import randomColor from "randomcolor";

const Contact = () => {
  const color = randomColor();
  const [users, setUsers] = useState([]);
  const [snapUser, setSnapUser] = useState([]);

  const getData = async () => {
    const data = await getDocs(collection(db, "contactUsers"));
    setUsers(data.docs.map((el) => ({ ...el.data(), id: el.id })));
  };

  const snapGet = async () => {
    const user = collection(db, "contactUsers");
    onSnapshot(user, (snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
        console.log(r);
      });
      setSnapUser(r);
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "contactUsers", id));
  };

  console.log(users);

  useEffect(() => {
    getData();
    snapGet();
  }, []);

  return (
    <Container>
      <Wrapper>
        {snapUser?.map((props) => (
          <ContactHold key={props.id}>
            <FirstLetter
              style={{ backgroundColor: `${color}` }}
              to={`/${props.id}`}
            >
              <span> {props.firstName.charAt()} </span>
            </FirstLetter>
            <FirstName> {props.firstName} </FirstName>
            <LastName> {props.lastName} </LastName>
            <OthersHold>
              <Company> {props.userCompany} </Company>
              <PhoneNo> {props.userPhoneNo} </PhoneNo>
            </OthersHold>
            <ButtonHolder>
              <Button1 bg="green" to={`${props.id}`}>
                Edit
              </Button1>
              <Button
                bg="red"
                onClick={() => {
                  console.log(props.id);
                  handleDelete(props.id);
                }}
              >
                Delete
              </Button>
            </ButtonHolder>
          </ContactHold>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Contact;

const Button1 = styled(Link)`
  text-decoration: none;
  background-color: ${({ bg }) => bg};
  color: white;
  margin: 5px 0;
  padding: 10px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const Button = styled.div`
  background-color: ${({ bg }) => bg};
  color: white;
  margin: 5px 0;
  padding: 10px;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;
const ButtonHolder = styled.div``;

const Container = styled.div`
  height: 100%;
  min-height: 90vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: poppins;
  border-radius: 9px;
`;
const Wrapper = styled.div`
  height: 100%;
  min-height: 400px;
  background-color: #fff;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const ContactHold = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  /* background-color: gold; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; */
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  min-height: 65px;
  height: 100%;
  border-radius: 4px;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;
const FirstLetter = styled(Link)`
  text-decoration: none;
  height: 50px;
  width: 50px;
  /* background-color: #f4b400; */
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
`;
const FirstName = styled.div`
  font-weight: 600;
`;
const LastName = styled.div``;
const OthersHold = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Company = styled.div`
  font-size: small;
  font-weight: 600;
`;
const PhoneNo = styled.div``;
