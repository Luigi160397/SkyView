import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ButtonHome = () => {
  const navigate = useNavigate();
  return (
    <Row className="mt-4 mb-3">
      <Col className="d-flex justify-content-center">
        <Button
          onClick={() => {
            navigate("/");
          }}
          variant="outline-primary text-nowrap"
        >
          Torna alla Home
        </Button>
      </Col>
    </Row>
  );
};

export default ButtonHome;
