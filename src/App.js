import React from "react";
import { Container, Header } from "./Templates";
import { Routes } from "./Routes";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Container>
          <Routes />
        </Container>
      </div>
    </>
  );
}

export default App;
