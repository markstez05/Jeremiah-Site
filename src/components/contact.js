import React, { Component } from 'react';
import "../css/contact.css";

class Contact extends Component{

    render(){
        return(
            <div id="contact" className="contact-container">
            <div className="disclaimer">
            <h1 className="disclaimer-title">Disclaimer</h1>
    <li>Oklahoma does not currently have an online option for ADSAC DUI classes or Victim
Impact Panel.</li>
<li>If you are non-resident of the State of Oklahoma and you receive a DUI while in
Oklahoma, you must contact The Oklahoma Department of Mental Health and
Substance Abuse at (405) 248-9027 to get approval for your out-of-state class.</li>
            </div>
            <div className="contact-text">
            <h1>Call Us for DUI Assessment</h1>
            <p className="contact-number">Call: (918) 232-9119</p>
            <p className="contact-info">Call DUI School and Assessments by Jeremiah, Inc., a certified DUI facility in Tulsa,
            OK, to schedule an appointment for your Alcohol and/or Drug
            Assessment (ADSAC DUI). The ADSAC DUI Assessment must be performed by a
            Certified ADSAC DUI Assessor. The ADSAC DUI assessment will determine what level
            of ADSAC requirements you will need to complete (ADSAC Classes, Victim Impact
            Panel, substance abuse treatment, etc.).</p>
            </div>
            
            </div>
        )
    }
}

export default Contact;