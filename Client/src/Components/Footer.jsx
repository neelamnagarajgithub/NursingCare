function Footer() {
  return (
    <div className="footersection">
      <div className="footerupr">
        <div className="footercard">
          <h1>Services</h1>
          <p>Nursing</p>
          <p>Home Care</p>
        </div>
        <div className="footercard">
          <h1>About</h1>
          <p>Company</p>
          <p>Team</p>
          <p>Legacy</p>
        </div>
        <div className="footercard">
          <h1>Jobs</h1>
          <p>Interships</p>
          <p>Job Openings</p>
        </div>
        <div className="footercard">
          <h1>Nursing Care</h1>
        </div>
      </div>
      <hr className="hrrr" />
      <div className="footerlwr">
        <div className="copyc">
          <div>copyright &copy; NursingCare 2024</div>
          <div className="footeicons">
            <div>
              <img src="https://i.pinimg.com/564x/70/b9/3a/70b93af70f637f2d8a2dec42bfcf23f8.jpg" className="facebook"
              />
            </div>
            <div>
            <img src="https://i.pinimg.com/564x/ba/72/3f/ba723fc8dfb5362956a680df14943be3.jpg" className="linkedin"
              />
            </div>
            <div>
            <img src="https://i.pinimg.com/736x/89/67/e5/8967e562321297cdfb75a50a6927beff.jpg" className="insta"
              />
            </div>
            <div>
            <img src="https://i.pinimg.com/564x/da/9c/c1/da9cc1f2e152683ddba2240817404977.jpg" className="twitter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
