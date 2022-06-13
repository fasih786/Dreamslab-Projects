import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/login";
import AddButton from "../Button/AddButton";

// import Home from "../Dashboard/components/Home";
// import AddUser from "../Dashboard/components/AddUser";
// import EditUser from "../Dashboard/components/EditUser";

import HomePage from '../Dashboard-2/HomePage';
import AddUser from '../Dashboard-2/users/Adduser'
// import { GlobalProvider } from "../Dashboard/context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

const ReactRouter = () => {
  return (
    <div>
      {/* <GlobalProvider> */}
        <BrowserRouter>
          <Routes>
            <Route path="/addButton" element={<AddButton />} />
            <Route path="/" element={<Login />} />
            {/* <Route exact path="/home" element={<Home />} /> */}
            {/* <Route path="/add" element={<AddUser />} /> */}
            {/* <Route path="/edit/:id" element={<EditUser />} /> */}

            <Route path="/homepage" element={<HomePage/>}/>
            <Route path="/addUser" element={<AddUser/>}/>
          </Routes>
        </BrowserRouter>
      {/* </GlobalProvider> */}
    </div>
  );
};
export default ReactRouter;
