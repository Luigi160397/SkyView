import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const MainCard = () => {
  const meteo = useSelector(state => state.meteo.content);

  const icon = `https://openweathermap.org/img/w/${meteo.weather[0].icon}.png`;

  return (
    <Container>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">
            <img src={icon} className="img-fluid " width={300} height={200} alt="meteo" />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title display-1">
                {meteo.name} {parseFloat(meteo.main.temp).toFixed(0)}°
              </h5>
              <p className="card-text fs-3 text-capitalize">{meteo.weather[0].description}</p>
              <p className="card-text fs-4">
                TEMP MIN: {parseFloat(meteo.main.temp_min).toFixed(0)}° TEMP MAX:{" "}
                {parseFloat(meteo.main.temp_max).toFixed(0)}°
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default MainCard;
