import { useEffect, useState } from "react";
import styled from "styled-components";
import { CgNametag } from "react-icons/cg";
import { GiAges } from "react-icons/gi";
import { MdSubject, MdDescription, MdDataExploration } from "react-icons/md";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Base/Base";

const GetBase = () => {
  const [baseData, setBaseData] = useState([]);

  const getData = async () => {
    const data = await getDocs(collection(db, "students"));
    setBaseData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  console.log(baseData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>
        {" "}
        <MdDataExploration /> Students Data
      </h1>

      <Container>
        {baseData?.map((props) => {
          return (
            <Wrapper key={props.id}>
              <Card>
                <Name>
                  {" "}
                  <CgNametag /> <strong>Name:</strong> {props.name}
                </Name>
                <Age>
                  {" "}
                  <GiAges /> <strong>Age:</strong> {props.age}
                </Age>
                <Subject>
                  {" "}
                  <MdSubject /> <strong>Subject:</strong> {props.subject}
                </Subject>
                <Description>
                  {" "}
                  <MdDescription /> <strong>Description:</strong>{" "}
                  {props.description}
                </Description>
              </Card>
            </Wrapper>
          );
        })}
      </Container>
    </>
  );
};

export default GetBase;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  font-family: poppins;
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 250px;
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 10px 30px 10px;
`;
const Name = styled.div`
  display: flex;
  align-items: center;
`;
const Age = styled.div`
  display: flex;
  align-items: center;
`;
const Subject = styled.div`
  display: flex;
  align-items: center;
`;
const Description = styled.div`
  /* display: flex;
  align-items: center; */
`;
