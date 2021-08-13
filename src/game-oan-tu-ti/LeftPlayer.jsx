/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./OanTuTi.module.css";

class LeftPlayer extends Component {
    render() {
        const { playerPick, pickAction } = this.props;
        const { srcPlayer } = playerPick;
        return (
            <div className="row d-flex mt-5 mx-0">
                <div className="col-12">
                    <img
                        id="playerSide"
                        src={`./images/${srcPlayer}`}
                        className={`${style.display} ${style.answerImg} ${style.hitBox}`}
                        width="60px"
                    />
                    <img src="./images/player.png" className={` ${style.ironMan}`} width="150px" />
                </div>
                <div className="col-4 mt-5">
                    <img
                        onClick={() => pickAction("keo.png")}
                        src="./images/keo.png"
                        className={`${style.imgPlayer}`}
                        width="50px"
                    />
                </div>
                <div className="col-4 mt-5">
                    <img
                        onClick={() => pickAction("bua.png")}
                        src="./images/bua.png"
                        className={`${style.imgPlayer}`}
                        width="50px"
                    />
                </div>
                <div className="col-4 mt-5">
                    <img
                        onClick={() => pickAction("bao.png")}
                        src="./images/bao.png"
                        className={`${style.imgPlayer}`}
                        width="50px"
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playerPick: state.oanTuTiReducer.playerPick,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pickAction: (src) => {
            const action = {
                type: "PLAY_PICK_ACTION",
                payload: {
                    src,
                },
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftPlayer);
