import React, { Component } from 'react';
import UnmarkFundImg from './UnmarkFundImg.png';

class ReactCustomModal extends Component {
  closeCustomModal = (e) => {
    this.props.onCloseModal(e);
  }
  render() {
    const { id, className, header, body, footer } = this.props;
    return (
      <div id="myModal" className="modal">
         {/* <span className="close" onClick={this.closeCustomModal}>&times;</span> */}
         {/* <div style={{display:"none"}}> */}
          <div className="popup">
            <div className="popup_h">
              Are you sure you want to unmark these funds as collateral?
            </div>
            <img src={UnmarkFundImg} alt="" />
            <div className="popup_p1">
              Your Credit line value will decrease.
            </div>
            <div className="popup_p2">New Credit Line Value ₹ 23000</div>
            <div className="popup_btn">
              <div className="popup_btn1">
                <div className="close" onClick={this.closeCustomModal}>
                  <p className="p_btn">Go Back</p>
                </div>
              </div>
              <div className="popup_btn2">
                <div>
                  <p className="p_btn">Confirm</p>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    );
  }
}

export default ReactCustomModal;

