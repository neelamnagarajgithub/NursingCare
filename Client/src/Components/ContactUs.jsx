function ContactUs() {
  return (
    <div className="contactusSection">
      <div className="contactuscontent">
        <h5>Contact us</h5>
        <h3>How you can reach us</h3>
      </div>
      <div className="formandcontat">
        <div className="contactform">
          <form action="" className="contactform">
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="name"
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="email"
            />
            <input
              type="text"
              name="message"
              placeholder="message"
              className="message"
            />
            <button
              className="contactusbtn"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="contatcon">
          <div className="contactcard">
            <div className="contactimg"></div>
            <div className="phone">
              <h4>Phone</h4>
              <p>+91 9492321818</p>
            </div>
          </div>
          <div className="contactcard">
            <div className="contactimg"></div>
            <div className="Email">
              <h4>Email</h4>
              <p>m.rithwik30@gmail.com</p>
            </div>
          </div>
          <div className="contactcard">
            <div className="contactimg"></div>
            <div className="location">
              <h4>Location</h4>
              <p>Warangal,Telangana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
