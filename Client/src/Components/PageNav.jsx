function PageNav() {
  return (
    <div className="navbar">
      <h1>Nursing Care</h1>
      <ul className="navelements">
        <li
          className="navele"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Home
        </li>
        <li
          className="navele"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("whyus")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Nursing
        </li>
        <li
          className="navele"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("testimonials")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          About us
        </li>
        <li
          className="navele"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("contactus")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact us
        </li>
        <button className="navbtn">Login</button>
      </ul>
    </div>
  );
}
export default PageNav;
