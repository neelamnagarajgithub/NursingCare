function SearchNurse() {
  return (
    <div className="searchnursecontainer">
      <form>
        <input type="text" placeholder="Search Nurse" className="searchnurse" />
        <button type="submit" className="searchnursebtn">
          Search
        </button>
      </form>
    </div>
  );
}
export default SearchNurse;
