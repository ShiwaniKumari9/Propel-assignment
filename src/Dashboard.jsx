import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portFolio: [],
    };
  }

  componentDidMount() {
    fetch(`https://mocki.io/v1/61a36370-212d-4ac7-baf6-355a14262cb7`)
      .then((response) => response.json())
      .then((data) => {
        this.state.portFolio = data.portfolio;
        this.setState({ portFolio: data.portfolio });
      });
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        {/* <script
          type="text/javascript"
          src="https://kit.fontawesome.com/a076d05399.js"
        /> */}
        <div>
        <div className="Welcome">
          <p className="Welcome-para">
            Welcome <span style={{ color: "#36383f" }}> Rahul</span>
          </p>
          <div className="Welcome-div-icon">
            <span  className="Welcome-icon"> <i
              className="fa fa-bell"
              aria-hidden="true"
            ></i></span>
            
          </div>
        </div>
        <div className="border-div">
          <div className="border-div-child"> Total portfolio value</div>
          <div className="border-div-child-2">₹ 1500000.00 </div>
        </div>
        <div className="border-div-2">
          <div className="border-div-card1">
            <div className="border-div-card1-child1">Loan to Value</div>
            <div className="border-div-card1-child2">Healthy!!</div>
          </div>
          <div className="border-div-card2">
            <div className="border-div-card2-child1">
              <p className="border-div-card2-child2">Learn more</p>
            </div>
          </div>
        </div>
        <div className="div-p1">
          <Link to="/portfoliofetch"><p className="limit-p">Increase Credit Limit</p></Link>
        </div>
        <section className="fund-details">
          <div className="fund-details-div-header">
            <div className="fund-details-div-mutual">Marked mutual Funds -</div>
            <div style={{ width: "calc(100% - 250px)" }}>
              <div className="fund-details-div-mutual-1">
                <Link style={{textDecoration: "none"}} to="/unmarkfund"><p className="fund-details-div-mutual-p">Unmark funds</p></Link>
              </div>
            </div>
          </div>
          {this.state.portFolio.map((it, index) => {
            return (
              <div key={index} className="fund-details-div">
                <div className="fund-name-div">{it.scheme_name}</div>
                <div className="fund-details-div-subclass">
                  <div style={{ width: "70%" }}>
                    <div className="fund-details-div-subclass-design">
                      Current Value
                      <span className="fund-details-spam">
                        {it.current_value}
                      </span>
                    </div>
                    <div className="fund-details-div-subclass-2">
                      Folio Number
                      <span className="fund-details-spam-2">
                        {it.folio_number}
                      </span>
                    </div>
                  </div>
                  <div style={{ width: "calc(100% - 50%)" }}>
                    <div className="div-units">
                      Units
                      <span className="fund-details-spam-2">{it.units}</span>
                    </div>
                    <div className="div-nav">
                      Nav
                      <span className="fund-details-spam-3">{it.nav}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        </div>
        <div className="footer-menu">
          <div className="w3-text-grey">
            {/* <i className="fa fa-home" style={{fontSize: "24px", color: "#787878"}}></i> */}
            <div>Home</div>
          </div>
          <div className="w3-padding w3-xlarge w3-text-grey">
            {/* <i
              style={{fontSize: "24px", color: "#5516aa"}}
              className="fa fa-pie-chart"
              aria-hidden="true"
            ></i> */}
            <div>Portfolio</div>
          </div>
          <div className="w3-padding w3-xlarge w3-text-grey">
            {/* <i style={{fontSize: "24px",color: "#787878"}} className="fa">
              &#xf007;
            </i> */}
            <div>Profile</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
