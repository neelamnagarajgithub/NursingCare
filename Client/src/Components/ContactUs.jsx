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
            <textarea
              type="text"
              name="message"
              placeholder="message"
              className="message"
              cols="30"
              rows="30"
            ></textarea>
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
            <div>
            <img src="https://i.pinimg.com/564x/cf/d2/36/cfd2360354232cc91dc5d738e06c9efa.jpg" className="contactimg"
              />

            </div>
            <div className="phone">
              <h4>Phone</h4>
              <p>+91 9492321818</p>
            </div>
          </div>
          <div className="contactcard">
            <div>
              <img src="https://i.pinimg.com/564x/0c/4c/bd/0c4cbd674a02adccfb482ee119cfe8d0.jpg" className="contactimg"
              />
            </div>
            <div className="Email">
              <h4>Email</h4>
              <p>m.rithwik30@gmail.com</p>
            </div>
          </div>
          <div className="contactcard">
            <div>
            <img src="https://i.pinimg.com/564x/e1/81/b7/e181b7cb6dec98c4d8efb94cfa77471c.jpg" className="contactimg"
              />
            </div>
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
