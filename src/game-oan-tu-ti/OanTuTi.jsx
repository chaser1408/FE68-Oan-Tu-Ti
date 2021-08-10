import React, { Component } from "react";
import Lower from "./Lower";
import Upper from "./Upper";

export default class OanTuTi extends Component {
    render() {
        return (
            <div className="container-fluid ">
                <div className="row">
                    <Upper />
                    <Lower />
                </div>
            </div>
        );
    }
}
