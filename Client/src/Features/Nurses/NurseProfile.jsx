import { useEffect, useState } from "react";
import { useParams } from "react-router";

function NurseProfile() {
  const { nurseid } = useParams();
  // const { nurse, setnurse } = useContext(NurseContext);
  const [nurse, setnurse] = useState({});
  useEffect(
    function () {
      async function getnurse() {
        const response = await fetch(`/api/nurses/${nurseid}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();
        setnurse(res.nurseid);
      }
      getnurse();
    },
    [nurseid, setnurse]
  );
  return (
    <div className="nurseprofilesection">
      {console.log(nurse)}
      <div className="leftpartnurse">
        <div className="leftup">
          <div className="leftupimg"></div>
        </div>
        <div className="leftdown">
          <h2>work___________________</h2>
          <div>
            <p className="leftcrn">Council Registration Number: </p>
            <p>{nurse.councilRegistrationNumber}</p>
          </div>
          <div>
            <p className="leftpwe">Previous Work Experience</p>
            <p>{nurse.previousWorkExperience}</p>
          </div>
        </div>
      </div>
      <div className="rightpartnurse">
        <div className="rightup">
          <h1>{nurse.name}</h1>
          <div>
            <p>Email address: </p>
            <p>{nurse.email}</p>
          </div>
        </div>
        <div className="rightdown">
          <div className="rightleft">
            <p>{nurse.sex}</p>
            <p>
              {nurse.address.city +
                " " +
                nurse.address.state +
                " " +
                nurse.address.street +
                " " +
                nurse.address.zip}
            </p>
            <p>{nurse.cv}</p>
            <p>{nurse.education[0].collegeName}</p>
            <p>{nurse.education[0].yearOfPassing}</p>
          </div>
          <div className="rightright">
            <h1>Cost: 2500/-</h1>
            <button className="booknowbtn">Book now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NurseProfile;
