import Img1 from "./assets/img/img1.png";
import { Button } from "./Button";
import Card from "./Card";
import Event from "./Event";
function App() {
  const name = "Raju";
  const color = {
    color: "red",
    fontSize: "50px",
  };
  return (
    <>
      <div className="container mb-5">
        <div className="row g-3">
          <div className="col-lg-4 col-sm-6">
            <Card title="Card 1" btnColor="danger" />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Card title="New Title" btnColor="success" />
          </div>
          <div className="col-lg-4 col-sm-6">
            <Card title="Another Heading" />
          </div>
        </div>
      </div>
      <div>
        <img
          src={Img1}
          alt="Image"
          style={{ borderRadius: "20px", width: "200px" }}
        />
        <h1>
          Hello <span style={color}>{name}</span> from React!
        </h1>
        <p>New para</p>
        <Button btn="Login" type="button" />
        <Button btn="Register" type="submit" />
        <button className="btn btn-danger">Bootstrap Button</button>
      </div>
      <div>
        {/* <Event /> */}
      </div>
    </>
  );
}

export default App;
