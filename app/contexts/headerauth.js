
"use client"

import { useContext } from "react";
import { AuthContext } from "./auth"

import Headero from "../components/Headero";

export default function HeaderWrapper() {

  const { isAuthenticated, login } = useContext(AuthContext);


  return (
    <Headero isAuthenticated={isAuthenticated} login={login} />
  );
}