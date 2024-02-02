import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/nurse");
  }
  return (
    <div className="homesection">
      <div className="homecontainer">
        <div className="homecontent">Connecting your loved one to a nurse</div>
        <button className="homebtn" onClick={handleClick}>
          Hire a Nurse
        </button>
      </div>
      <div className="homeimg"></div>
    </div>
  );
}
export default Home;
