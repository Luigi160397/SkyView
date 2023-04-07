import { Container } from "react-bootstrap";
import ButtonHome from "./ButtonHome";
import MainCard from "./MainCard";
import Forecast from "./Forecast";
import InfoMeteo from "./InfoMeteo";

const Meteo = () => {
  return (
    <Container fluid>
      <ButtonHome />
      <MainCard />
      <Forecast />
      <InfoMeteo />
    </Container>
  );
};

export default Meteo;
