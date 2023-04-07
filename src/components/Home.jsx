import { Container, Form } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="display-2">SkyView</h1>
      <Form>
        <Form.Group className="mb-3" controlId="search">
          <Form.Label>Cerca una città:</Form.Label>
          <Form.Control type="search" placeholder="es. roma, milano..." />
        </Form.Group>
      </Form>
    </Container>
  );
};
export default Home;
