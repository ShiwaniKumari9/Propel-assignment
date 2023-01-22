import React  from "react";
import "./UnmarkFund.css";
import ReactCustomModal from "./reactCustomModal";
import { Link } from "react-router-dom";

class UnmarkFund extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isActive2: false,
      isActive1:false,
      isActive3:false,
      isActive4:false,
      isActive5:false,
      isActive6:false,
      isActive7:false,
    

    };   
  }

  showModal = (e) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  handleToggle1 = () => {
    this.setState({ isActive1: !this.state.isActive1 });
  };
  handleToggle2 = () => {
    this.setState({ isActive2: !this.state.isActive2 });
  };
  handleToggle3 = () => {
    this.setState({ isActive3: !this.state.isActive3 });
  };
  handleToggle4 = () => {
    this.setState({ isActive4: !this.state.isActive4 });
  };
  handleToggle5 = () => {
    this.setState({ isActive5: !this.state.isActive5 });
  };
  handleToggle6 = () => {
    this.setState({ isActive6: !this.state.isActive6 });
  };
  handleToggle7 = () => {
    this.setState({ isActive7: !this.state.isActive7 });
  };

  render() {
    return (
      <div>
        <div className="back-menu">
          <div className="back-img"></div>
          <Link to="/dashboard"><span className="back-p">Back</span></Link>
        </div>
        <div className="header-h">Unmark funds as collateral</div>
        <div className="header-p">
          Select the funds you wish to unmark as collateral
        </div>
        <section className="mutual-funds">
          <div className="mutual-funds-h">List of mututal funds-</div>
          <div className="mutual-lists">
            <section id="card-1" className={this.state.isActive1 ? "backgroundColor" : null}>
              <div className="card-section-1">
                <input
                  onChange={this.handleToggle1}
                  className="section1_input"
                  type="checkbox"
                  id="checked-1"
                />
              </div>
              <div className="card-section-2">
                <div className="section-2_d1">SBI Mutual Fund</div>
                <div className="section-2_d2">Marked value ₹ 50000</div>
              </div>
            </section>
            <section id="card-2" className={this.state.isActive2 ? "backgroundColor" : null}>
              <div className="card-section-1">
                <input
                  onChange={this.handleToggle2}
                  className="section1_input"
                  type="checkbox"
                  id="checked-2"
                />
              </div>
              <div className="card-section-2">
                <div className="section-2_d1">SBI Mutual Fund</div>
                <div className="section-2_d2">Marked value ₹ 50000</div>
              </div>
            </section>
            <section id="card-3" className={this.state.isActive3 ? "backgroundColor" : null}>
              <div className="card-section-1">
                <input
                  onChange={this.handleToggle3}
                  className="section1_input"
                  type="checkbox"
                  id="checked-3"
                />
              </div>
              <div className="card-section-2">
                <div className="section-2_d1">SBI Mutual Fund</div>
                <div className="section-2_d2">Marked value ₹ 50000</div>
              </div>
            </section>
            <section id="card-4" className={this.state.isActive4 ? "backgroundColor" : null}>
              <div className="card-section-1">
                <input
                  onChange={this.handleToggle4}
                  className="section1_input"
                  type="checkbox"
                  id="checked-4"
                />
              </div>
              <div className="card-section-2">
                <div className="section-2_d1">SBI Mutual Fund</div>
                <div className="section-2_d2">Marked value ₹ 50000</div>
              </div>
            </section>
            <section id="card-5" className={this.state.isActive5 ? "backgroundColor" : null}>
              <div className="card-section-1">
                <input
                  onChange={this.handleToggle5}
                  className="section1_input"
                  type="checkbox"
                  id="checked-5"
                />
              </div>
              <div className="card-section-2">
                <div className="section-2_d1">SBI Mutual Fund</div>
                <div className="section-2_d2">Marked value ₹ 50000</div>
              </div>
            </section>
          
          <section id="card-6" className={this.state.isActive6 ? "backgroundColor" : null}>
            <div className="card-section-1">
              <input
                onChange={this.handleToggle6}
                className="section1_input"
                type="checkbox"
                id="checked-6"
              />
            </div>
            <div className="card-section-2">
              <div className="section-2_d1">SBI Mutual Fund</div>
              <div className="section-2_d2">Marked value ₹ 50000</div>
            </div>
          </section>
          <section id="card-7" className={this.state.isActive7 ? "backgroundColor" : null}>
            <div className="card-section-1">
              <input
                onChange={this.handleToggle7}
                className="section1_input"
                type="checkbox"
                id="checked-7"
              />
            </div>
            <div className="card-section-2">
              <div className="section-2_d1">SBI Mutual Fund</div>
              <div className="section-2_d2">Marked value ₹ 50000</div>
            </div>
          </section>
          </div>
        </section>
        <div className="footer-menu_U">
          <div className="footer_h">
            New Credit Line Value<span className="footer_p">₹ 23000</span>
          </div>
          <div className="footer_box" onClick={this.showModal}>
            <p className="footer_btn">Unmark funds</p>
          </div>
          {this.state.showModal && (
            <ReactCustomModal onCloseModal={this.showModal} />
          )}
        </div>
      </div>
    );
  }
}

export default UnmarkFund;
