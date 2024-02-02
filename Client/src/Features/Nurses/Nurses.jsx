import NurseList from "./NurseList";
import SearchNurse from "./SearchNurse";

function Nurses() {
  return (
    <div className="nursescontainer">
      <SearchNurse />
      <NurseList />
    </div>
  );
}
export default Nurses;
