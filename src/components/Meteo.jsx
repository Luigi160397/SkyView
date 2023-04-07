import { Container } from "react-bootstrap";
import ButtonHome from "./ButtonHome";
import MainCard from "./MainCard";
import Forecast from "./Forecast";
import InfoMeteo from "./InfoMeteo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Meteo = () => {
  const lat = "41.8933203";
  const lon = "12.4829321";

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=it&units=metric&appid=7a8ddce8f84f177f053d45de79e6ca77`;

  const meteo = useSelector(state => state.meteo.content);
  const dispatch = useDispatch();

  const request = async endpoint => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "CURRENT_METEO", payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request(endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
