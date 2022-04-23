import React from "react";
import Contact from "./Components/Post/Contact";
// import GetBase from "./Components/GetBase/GetBase";
import PostHeader from "./Components/Post/PostHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadContact from "./Components/Post/UploadContact";
import Edit from "./Edit";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PostHeader />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/upload" element={<UploadContact />} />
          <Route path="/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
