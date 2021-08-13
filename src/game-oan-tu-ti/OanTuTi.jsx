import React, { Component } from "react";
import LeftPlayer from "./LeftPlayer";
import RightPlayer from "./RightPlayer";
import ScoreBoard from "./ScoreBoard";
import Bottom from "./Bottom";
import { connect } from "react-redux";

class OanTuTi extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="row mt-5">
                    <div className="col-3 mt-5">
                        <LeftPlayer />
                    </div>
                    <div className="col-4 mx-auto">
                        <ScoreBoard />
                    </div>
                    <div className="col-3 mt-5">
                        <RightPlayer />
                    </div>
                    <div className="col-12 mt-5">
                        <Bottom />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(OanTuTi);
