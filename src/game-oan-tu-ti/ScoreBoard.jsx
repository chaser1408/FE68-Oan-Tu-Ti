import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./OanTuTi.module.css";

class ScoreBoard extends Component {
    render() {
        const { ketQua, playGame, resetGame, resetScore } = this.props;
        const { win, play } = ketQua;
        return (
            <div className="row d-flex mx-auto text-center">
                <ul>
                    <li>
                        <h3 className={`text-warning ${style.scoreSize}`}>
                            I'm iron man, i love you 3000 !!
                        </h3>
                    </li>
                    <li>
                        <h3 className={`text-success ${style.scoreSize}`}>
                            Số bàn thắng: <span>{win}</span>
                        </h3>
                    </li>
                    <li>
                        <h3 className={`text-success ${style.scoreSize}`}>
                            Số bàn chơi: <span>{play}</span>
                        </h3>
                    </li>
                    <li>
                        <button className="btn btn-success" onClick={() => playGame(win, play)}>
                            Play game
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-success" onClick={() => resetGame()}>
                            Reset Game
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-success" onClick={() => resetScore()}>
                            Reset Score
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ketQua: state.oanTuTiReducer.ketQua,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: (winGame, game) => {
            const action = {
                type: "PLAY_GAME",
                payload: {
                    winGame,
                    game,
                },
            };
            dispatch(action);
        },

        resetGame: () => {
            const action = {
                type: "RESET_GAME",
                payload: {},
            };
            dispatch(action);
        },

        resetScore: () => {
            const action = {
                type: "RESET_SCORE",
                payload: {},
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);
