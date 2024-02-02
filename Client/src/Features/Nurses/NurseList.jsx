import { useContext, useEffect } from "react";
import { NurseContext } from "../../Context/NurseContext";

function NurseList() {
  let nursesdata = [];
  const { nurses, setNurses } = useContext(NurseContext);
  useEffect(function () {
    async function getnurses() {
      const response = await fetch(`/api/nurses`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await response.json();
      nursesdata = res.allnurse;
      setNurses(nursesdata);
    }
    getnurses();
  }, []);
  return (
    <div>
      <div className="nurselistcontainer">
        <div className="nurselist">
          {nurses.map((nurse) => (
            <div className="nursecard" key={nurse._id}>
              <h1>{nurse.name}</h1>
              <p>{nurse.age}</p>
              <p>{nurse.sex}</p>
              <p>{nurse.email}</p>
              <p>{nurse.previousWorkExperience}</p>
              <span>
                <button className="booknowbtnonhover">Book Now!</button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default NurseList;
