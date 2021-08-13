/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import style from "./OanTuTi.module.css";

export default class Bottom extends Component {
    render() {
        return (
            <div className="row d-flex">
                <img src="./images/bgGame.png" className={`${style.bgGame}`} width="1000px" />
            </div>
        );
    }
}
