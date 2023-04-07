import { useEffect } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Forecast = () => {
  const coord = useSelector(state => state.coord.content);
  const lat = coord[0].lat;
  const lon = coord[0].lon;

  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=it&units=metric&appid=7a8ddce8f84f177f053d45de79e6ca77`;

  const dispatch = useDispatch();

  const request = async endpoint => {
    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "METEO_SETTIMANA", payload: data.list });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    request(endpoint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const settimana = useSelector(state => state.settimana.content);

  return (
    <Container className="mb-3">
      {settimana !== null && (
        <>
          <ListGroup>
            {settimana.map((giorno, index) => (
              <ListGroup.Item key={index} className="px-5 d-flex justify-content-between align-items-center">
                <span className="fs-4">{giorno.dt_txt}</span>
                <span>
                  <img
                    src={`https://openweathermap.org/img/w/${giorno.weather[0].icon}.png`}
                    width={70}
                    className="img-fluid "
                    alt="meteo"
                  />
                </span>
                <span className="fs-4">
                  {" "}
                  {parseFloat(giorno.main.temp_min).toFixed(0)}° – {parseFloat(giorno.main.temp_max).toFixed(0)}°
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      )}
    </Container>
  );
};

export default Forecast;
