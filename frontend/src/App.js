import GlobalStyle from "./styles/golbal";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid.js";
import { useEffect, useState } from "react";
import {toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [products, setProducts] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getProducts = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setProducts(res.data.sort((a, b) => (a.validade > b.validade ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  
  return (
    <>

      <Container>
        <Title>PRODUTOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getProducts={getProducts} />
        <Grid setOnEdit={setOnEdit} products={products} setProducts={setProducts} />
        <Grid products={products}/>
      </Container>
      <GlobalStyle />

    </>
  );
}

export default App;