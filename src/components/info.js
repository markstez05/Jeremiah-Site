import React, { Component } from 'react';
import "../css/info.css"
import Jeremiah from "../img/Jeremiah.png";

class Info extends Component{
    render(){
        return(
            <div id="about" className="info-box">
            <div className="skew-div"></div>
            <div className="info1">
            <div className="title-div">
            <h1 className="title">DUI School and Assessments by Jeremiah, Inc.</h1>
            <div className="photo-div">
            <p className="title-text"><strong>In need of comprehensive ADSAC DUI assessment and/or classes? </strong>DUI School
        and Assessments by Jeremiah, INC. is a state-certified DUI Assessor in Tulsa, OK. I
        am a state certified and approved ADSAC DUI Assessor and Facilitator. This fall I will
        be providing education classes to provide assistance for your <strong>DUI, probation, parole, </strong> 
        and other court- ordered concerns.</p>
    <div className="photo" ></div></div>
        </div>
            <div className="mission">
                <h1 className="mission-title">Mission Statement</h1>
                <p className="mission-text">
        The sole purpose of the corporation is to conduct, Alcohol and Drug Substance Abuse
        Courses/Assessments to persons ordered by the court and/or convicted of driving under the
        influence of any substance or receiving an alcohol or other drug related revocation or
        suspension of driving privileges, to identify substance abuse problems, and refer those
        offenders identified with substance abuse problems to licensed community-based treatment
        programs.<div id="info"></div></p>
</div>

    <div className="dui-info">
       <div className="dui-text">
         <h3 className="info-title">DUI Offense in Oklahoma</h3>
       <p>
               If you have not spoken with an attorney, do so. You only have a certain amount of days
                to object in having your license revoked. An attorney can assist you with this. Next, call
                us at <strong>918-232-9119</strong> as soon as possible. The faster you get started with services, the
                faster you will get your life back on track. We can provide general information over the
                phone, as well as schedule your appointments. <strong>Please have the following information 
                ready when you call:</strong>
       </p>
       <li className="list">Blood Alcohol Concentration (BAC) (This can be found on your arrest report.)</li>
                    <li className="list">Date of Birth</li>
                    <li className="list">Date, city, type of offense, attorney name</li>
                    <li className="list">Drivers License Number</li>
                    <li className="list">Social Security Number</li>
       </div>
       <div className="dui-text">
         <h3 className="info-title">Steps for License Reinstatement</h3>
       <p>
       If you have been arrested for a <strong>DUI violation</strong> and your license has been revoked, you
                will receive a letter from the Department of Public Safety (DPS) that will include the
                following information:
       </p>
       <li className="list">Amount of Reinstatement Fee(Usually $315 or More)</li>
                    <li className="list">Date You Are Eligible to Reinstate Your License(Usually 6 months)</li>
                    <li className="list">Instructions to Obtain an Alcohol/Drug Assessment (ADSAC DUI) and to Follow the
                    Recommendations of the ADSAC DUI Assessment</li>
       </div>
    </div>
      <p className="mission-text2">After completing these requirements, you will receive a Certificate of Completion
      from the instructor. You will need to provide a copy of these certificates to your ADSAC
      DUI Assessor as proof of completion. The ADSAC DUI assessor will then issue you a
      certificate that will bear an embossed seal and red stamp indicating the date that all
      ADSAC DUI Assessment requirements have been satisfied. You can then submit this
      certificate, along with the reinstatement fee, either in person or by mail, to the
      Department of Public Safety (DPS) in order to reinstate your license.</p>
      </div>
            </div>
        )
    }

}

export default Info;