import React from 'react';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import MemberTable from "./components/memberTable/MemberTable";
import {BrowserRouter, createBrowserRouter, Link, Navigate, RouterProvider} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navigate to={"/members"} />,

        },
        {
            path: "/home",
            element: <Home></Home>,

        },
        {
            path: "/members",
            element: <MemberTable></MemberTable>,

        },
    ]);
    return (
        <>
            <Topbar></Topbar>
            <RouterProvider router={router} />

        </>
    );
}

export default App;
