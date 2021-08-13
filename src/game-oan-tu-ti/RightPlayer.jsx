/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./OanTuTi.module.css";

class RightPlayer extends Component {
    render() {
        const { computerPick } = this.props;
        const { srcComputer } = computerPick;
        return (
            <div className="row d-flex mt-5 mx-0">
                <div className="col-12">
                    <img
                        id="computerSide"
                        src={`./images/${srcComputer}`}
                        className={`${style.display} ${style.answerImg} ${style.hitBox}`}
                        width="60px"
                    />
                    <img src="./images/playerComputer.png" width="150px" />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        computerPick: state.oanTuTiReducer.computerPick,
    };
};

export default connect(mapStateToProps)(RightPlayer);
