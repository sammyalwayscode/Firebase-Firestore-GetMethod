import React from "react";
import Contact from "./Components/Post/Contact";
// import GetBase from "./Components/GetBase/GetBase";
import PostHeader from "./Components/Post/PostHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadContact from "./Components/Post/UploadContact";
import Edit from "../src/Components/EditBase/Edit";
import EditScreen from "./Components/Post/EditScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PostHeader />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/upload" element={<UploadContact />} />
          <Route path="/:id" element={<EditScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
