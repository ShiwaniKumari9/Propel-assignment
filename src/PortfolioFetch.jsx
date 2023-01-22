import React from "react";
import "./PortfolioFetch.css";
import { Link } from "react-router-dom";

class PortfolioFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //portFolio: [],
    };
  }
  render() {
    return (
      <div style={{margin:"10px",fontFamily:"League Spartan"}}>
        <div className="back_Pf">
          <div></div>
          <Link to="/dashboard"><span>Back</span></Link>
        </div>
        <div className="header_Pf-h">Increase your credit limit</div>
        <div className="header_Pf-p">
          Mark additional funds as collateral to increase your credit limit
          futher
        </div>
        <div className="top_btn">
          <p className="footer_btn">Fetch my Kfin portfolio </p><div></div>
        </div>
        <div className="top_btn">
          <p className="footer_btn">Fetch my CAMS portfolio </p> <div></div>
        </div>
        <section style={{position: "fixed",bottom: "2%"}}>
          <div className="f-header">
            Make sure your overall MF portfoli is greater than Rs 25,000.
          </div>

          <div className="f-btn">
            <p>Fetch my portfolio</p>
          </div>
        </section>
      </div>
    );
  }
}

export default PortfolioFetch;
