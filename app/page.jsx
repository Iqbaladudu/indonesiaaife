"use client"

import Alert from "@/components/variants/alert";
import Button from "@/components/variants/button";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="border" style={{height: "100vh"}}>
      <Button variants="primary">
        Haiii
      </Button>
      <Alert variants="primary">
        Cek
      </Alert>
    </Container>  
  )
}

export default Home