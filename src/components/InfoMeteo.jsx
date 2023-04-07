import { Card, Col, Container, Row } from "react-bootstrap";

const InfoMeteo = () => {
  return (
    <Container className="mb-5">
      <Row xs={2} md={4} className="gx-3 gy-3">
        <Col>
          <Card>
            <Card.Header className="text-nowrap">TEMP. PERCEPITA</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">1107</Card.Title>
              <Card.Text className="fs-5">Descrizione breve</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header className="text-nowrap">TEMP. PERCEPITA</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">1107</Card.Title>
              <Card.Text className="fs-5">Descrizione breve</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header className="text-nowrap">TEMP. PERCEPITA</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">1107</Card.Title>
              <Card.Text className="fs-5">Descrizione breve</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header className="text-nowrap">TEMP. PERCEPITA</Card.Header>
            <Card.Body className="pb-4">
              <Card.Title className="fs-2">1107</Card.Title>
              <Card.Text className="fs-5">Descrizione breve</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default InfoMeteo;
