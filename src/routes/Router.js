import React from 'react'
import Home from '../pages/Home';
import Market from '../pages/Market';
import Create from '../pages/Create';
import NftDetails from '../pages/NftDetails';
import Wallet from '../pages/Wallet';
import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';
import Contact from '../pages/Contact';
import { Routes, Route, Navigate } from "react-router-dom";



const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/market/:id" element={<NftDetails />} />
    </Routes>
  )
}

export default Router;