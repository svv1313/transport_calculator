import React from "react";
import "./App.scss";
import Container from "@material-ui/core/Container";
import TransportCalculatorForm from "./components/transport_calculator_form";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Container className="App" maxWidth="lg" >
        <TransportCalculatorForm />
      </Container>
    </>
  );
}

export default App;
