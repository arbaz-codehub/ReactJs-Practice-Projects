import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ThemeProvider from "./contexts/ThemeStore";
import MyThemeComponent from "./components/MyThemeComponent";
import AuthProvider from "./contexts/AuthStore";
import LoginButton from "./components/LoginButton";
import WelcomePage from "./components/WelcomePage";
import "./App.css";

function App() {
  return (
    <>
      {/* <ThemeProvider>
        <MyThemeComponent></MyThemeComponent>
      </ThemeProvider> */}
      <AuthProvider>
        <WelcomePage></WelcomePage>
        <LoginButton></LoginButton>
      </AuthProvider>
    </>
  );
}

export default App;
