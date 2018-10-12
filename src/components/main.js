import React, { Component } from 'react';
import drive  from "../img/drive.jpg";
import "../css/main.css"
import Scrollspy from 'react-scrollspy'


class Main extends Component{

    render(){
        return(
            <div id="home" className="hey">
            <div className="hey2">
            {/* <NavBar /> */}
            <img src={drive} alt="drive" className="drive" ></img>
            <div className="info-container">
            <div className="info">
            <p className="tag1b">OKLHOMA</p><p className="tag1">DUI SCHOOL &</p><p className="tag1">ASSESSMENTS</p>
            </div>
            <div className="title-tag">
                <p className="tag2">Jeremiah Hall, Inc</p>
                <p className="tag3">State-Certified ADSAC DUI Assessor</p>
                </div>
            </div>
            <Scrollspy items={ ['contact', 'info'] } currentClassName="is-current">
            <div href="#info" className="info-cards">
                <div className="info-card">
                <a href="#info" className="card-title">DUI Offense in Oklahoma</a>
                </div>
                <div className="info-card">
                <a href="#info" className="card-title">Steps for License Reinstatement</a>
                </div>
                <div className="info-card">
                <a className="card-title" href="#contact">Call Us for DUI Assessment</a>
                </div>
            </div>
            </Scrollspy>
            </div>
            </div>
        )
    }

}

export default Main;