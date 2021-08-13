/* eslint-disable eqeqeq */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
const initialState = {
    ketQua: {
        win: 0,
        play: 0,
    },

    playerPick: {
        srcPlayer: "keo.png",
    },

    computerPick: {
        srcComputer: "keo.png",
    },
};

const oanTuTiReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "PLAY_PICK_ACTION": {
            const { src } = payload;

            const playerPickUpdate = { ...state.playPick };

            playerPickUpdate.srcPlayer = src;

            return { ...state, playerPick: playerPickUpdate };
        }

        case "PLAY_GAME": {
            const { winGame, game } = payload;

            const ketQuaUpdate = { ...state.ketQua };

            const { srcPlayer } = { ...state.playerPick };

            const { srcComputer } = { ...state.playerPick };

            if (srcPlayer === "keo.png" || srcComputer === "keo.png") {
                // alert("Hòa");
                // console.log("Hòa");
                ketQuaUpdate.play = game + 1;
            } else if (srcPlayer === "bua.png" || srcComputer === "keo.png") {
                ketQuaUpdate.win = winGame + 1;
                ketQuaUpdate.play = game + 1;
                // alert("Bạn thắng");
                // console.log("Thắng");
            } else if (srcPlayer === "bao.png" || srcComputer === "keo.png") {
                ketQuaUpdate.play = game + 1;
                // alert("Bạn thua");
                // console.log("Thua");
            }

            alert("Đã có kết quả!!");

            document.getElementById("playerSide").style.display = "block";

            document.getElementById("computerSide").style.display = "block";

            return { ...state, ketQua: ketQuaUpdate };
        }

        case "RESET_GAME": {
            document.getElementById("playerSide").style.display = "none";

            document.getElementById("computerSide").style.display = "none";

            return state;
        }

        case "RESET_SCORE": {
            const ketQuaUpdate = { ...state.ketQua };

            ketQuaUpdate.play = 0;

            ketQuaUpdate.win = 0;

            return { ...state, ketQua: ketQuaUpdate };
        }

        default: {
            return state;
        }
    }
};

export default oanTuTiReducer;
