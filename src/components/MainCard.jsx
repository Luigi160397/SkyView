import { Container } from "react-bootstrap";

const MainCard = () => {
  return (
    <Container>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center">
            <img src="https://www.pngmart.com/files/3/Weather-PNG-HD.png" className="img-fluid " alt="meteo" />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body text-center text-md-start">
              <h5 className="card-title display-1">Roma 12°</h5>
              <p className="card-text fs-3">Soleggiato</p>
              <p className="card-text fs-4">Temp min: 4° Temp max: 15°</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default MainCard;
