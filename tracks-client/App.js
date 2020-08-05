import React from "react";
import MainNavigation from "./src/MainNavigation";
import { Provider as AuthProvider } from "./src/context/AuthContext"

export default function App() {
  
  return (
    
    <AuthProvider>
      <MainNavigation />
      </AuthProvider>
      
  );
}

