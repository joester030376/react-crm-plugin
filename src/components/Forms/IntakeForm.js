import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Forms/IntakeForm.css';

// Counter used to determine if all form input boxes are valid.
let trueCounter = 0;

export default function IntakeForm() {    
     
    // Use state for input boxes.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bestContactMethod, setBestContactMethod] = useState('Phone Call');
    const [clientAddress, setClientAddress] = useState('');
    const [clientCity, setClientCity] = useState('');
    const [clientState, setClientState] = useState('');
    const [clientZipCode, setClientZipCode] = useState('');
    const [country, setCountry] = useState('US');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState(''); 
    const [birthYear, setBirthYear] = useState('');
    const [gender, setGender] = useState('Male');
    const [occupation, setOccupation] = useState('');
    const [reasonForContact, setReasonForContact] = useState('Contemplating Suicide');
    const [policeReportFiled, setPoliceReportFiled] = useState('Yes');
    const [children, setChildren] = useState('Yes');
    const [assitanceType, setAssistanceType] = useState('null');      

    
    const handleFirstNameChange = (e) => {  
        setFirstName(e.target.value);              
    }

    const handleLastNameChange = (e) => {       
        setLastName(e.target.value);
    }

    const handleEmailChange = (e) => {      
        setEmailAddress(e.target.value);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleBestContactMethod = (e) => {
        setBestContactMethod(e.target.value);
    }

    const handleClientAddress = (e) => {
        setClientAddress(e.target.value);
    }

    const handleClientCity = (e) => {
        setClientCity(e.target.value);
    }

    const handleClientState = (e) => {
        setClientState(e.target.value);
    }

    const handleClientZipCode = (e) => {
        setClientZipCode(e.target.value);
    }

    const handleBirthMonth = (e) => {
        setBirthMonth(e.target.value);
    }

    const handleBirthDay = (e) => {
        setBirthDay(e.target.value);
    }

    const handleBirthYear = (e) => {
        setBirthYear(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleOccupation = (e) => {
        setOccupation(e.target.value);
    }

    const handleReasonForContact = (e) => {
        setReasonForContact(e.target.value);
    }

    const handlePoliceReportFiled = (e) => {
        setPoliceReportFiled(e.target.value);
    }

    const handleHasChildren = (e) => {
        setChildren(e.target.value);
    }

    const intakeFormSubmission = (e) => {

        trueCounter = 0;

        e.preventDefault();

        // Checks the validity of all input text boxes.
        checkValidity(/^[a-zA-Z]+/g.test(firstName));
        checkValidity(/^[a-zA-Z]+/g.test(lastName));
        checkValidity(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailAddress));
        checkValidity(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNumber));
        checkValidity(/^[#.0-9a-zA-Z\s,-]+$/g.test(clientAddress));
        checkValidity(/^[a-zA-Z]+/g.test(clientCity));
        checkValidity(/^[a-zA-Z]+/g.test(clientState));
        checkValidity(/(^\d{5}$)|(^\d{5}-\d{4}$)/g.test(clientZipCode));
        checkMonth(birthMonth);
        checkDay(birthDay);
        checkYear(birthYear);
        checkValidity(/^[#.0-9a-zA-Z\s,-]+$/g.test(occupation));

        if (trueCounter === 12) {
           console.log("true:" + trueCounter);
        } else {
            console.log("false:" + trueCounter);
        }
    }

    return(
        <Form onSubmit={intakeFormSubmission}>
            <div className="intake-form-style">
                <div>
                    <h1 className="intake-title">Intake Form</h1>
                </div>
                <br className="line-break" />
            
                <Form.Group>
                    <Row>                
                        <Col>                    
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="input"
                                name="firstname"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </Col>
                        <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="input"
                                name="lastname"
                                value={lastName}
                                onChange={handleLastNameChange}                            
                            />
                        </Col>
                    </Row>                         
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label className="label-heading">Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="lastname"
                                value={emailAddress}
                                onChange={handleEmailChange}
                            />
                        </Col>                
                    </Row>  
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col lg="6">
                            <Form.Label className="label-heading">Phone</Form.Label>
                            <Form.Control
                                type="input"
                                name="phonenumber"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}                            
                            />
                        </Col>                            
                    </Row>
                </Form.Group>            
                <Form.Group>
                    <Row>
                        <Col>                    
                            <Form.Label className="label-heading">What is the Best Contact Method?</Form.Label>
                            <Form.Check 
                                value="Phone Call"
                                type="radio"                                
                                label="Phone Call"  
                                name="contactMethod"  
                                checked={bestContactMethod === "Phone Call"}    
                                onChange={handleBestContactMethod}                                                        
                            />
                            <Form.Check 
                                value="Text Messages"
                                type="radio"                                
                                label="Text Messages" 
                                name="contactMethod"  
                                checked={bestContactMethod === "Text Messages"} 
                                onChange={handleBestContactMethod}                                              
                            />
                            <Form.Check 
                                value="Email"
                                type="radio"                                
                                label="Email"   
                                name="contactMethod" 
                                checked={bestContactMethod === "Email"} 
                                onChange={handleBestContactMethod}                                           
                            />                    
                        </Col>                            
                    </Row> 
                </Form.Group>
                <Form.Group>
                    <Row>
                        <h3 className="label-heading">Address</h3>
                        <Col>                    
                            <Form.Control 
                                name="addressOne"
                                value={clientAddress}
                                onChange={handleClientAddress}
                            />
                            <Form.Label>Address 1</Form.Label>                            
                        </Col>                
                    </Row>                      
                    <Row>
                        <Col lg="4">                                            
                            <Form.Control 
                                name="city"
                                value={clientCity}
                                onChange={handleClientCity}
                            />
                            <Form.Label>City</Form.Label>
                        </Col>   
                        <Col lg="4">                                            
                            <Form.Control 
                                name="state"
                                value={clientState}
                                onChange={handleClientState}
                            />
                            <Form.Label>State</Form.Label>
                        </Col>              
                    </Row> 
                    <Row>
                        <Col lg="4">                                            
                            <Form.Control
                                name="zipcode"
                                value={clientZipCode}
                                onChange={handleClientZipCode}
                             />
                            <Form.Label>Zip/Postal Code</Form.Label>
                        </Col>                                  
                    </Row> 
                    <Row>
                        <Col lg="4">                    
                            <Form.Control 
                                className="label-heading"
                                placeholder={country}
                                value={country}
                            />
                            <Form.Label>Country</Form.Label>
                        </Col>                
                    </Row> 
                </Form.Group>
                <Form.Group>
                    <Row>
                        <h3 className="label-heading">Date of Birth</h3>  
                        <Col lg="2">                        
                            <Form.Control 
                                placeholder=""
                                value={birthMonth}
                                onChange={handleBirthMonth}
                            />
                            <Form.Label>MM</Form.Label>
                        </Col>
                        <Col lg="2">
                            <Form.Control 
                                placeholder=""
                                value={birthDay}
                                onChange={handleBirthDay}
                            />
                            <Form.Label>DD</Form.Label>
                        </Col>
                        <Col lg="3">                           
                            <Form.Control 
                                placeholder=""
                                value={birthYear}
                                onChange={handleBirthYear}
                            />
                            <Form.Label>YYYY</Form.Label>
                        </Col>                    
                    </Row> 
                </Form.Group>                 
                <Form.Group>
                    <Row>
                        <Col>                    
                            <Form.Label>Gender</Form.Label>
                            <Form.Check 
                                value="Male"
                                type="radio"                                
                                label="Male"  
                                name="gender"  
                                checked={gender === "Male"}    
                                onChange={handleGender}                                                        
                            />
                            <Form.Check 
                                value="Female"
                                type="radio"                                
                                label="Female" 
                                name="gender"  
                                checked={gender === "Female"} 
                                onChange={handleGender}                                              
                            />
                            <Form.Check 
                                value="Prefer not to say"
                                type="radio"                                
                                label="Prefer not to say"   
                                name="gender" 
                                checked={gender === "Prefer not to say"} 
                                onChange={handleGender}                                           
                            />                    
                        </Col>                            
                    </Row> 
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>   
                            <Form.Label className="label-heading">Occupation</Form.Label>                 
                            <Form.Control 
                                placeholder=""
                                value={occupation}
                                onChange={handleOccupation}
                            />                 
                        </Col>                
                    </Row>  
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>   
                            <h3 className="label-heading">Questions</h3>           
                        </Col>                
                    </Row>   
                    <Row>
                        <Col>
                            <Form.Label>What is the reason client is contacting us?</Form.Label>
                            <Form.Check 
                                value="Contemplating Suicide"
                                type="radio"                                
                                label="Contemplating Suicide" 
                                checked={reasonForContact === "Contemplating Suicide"}  
                                onChange={handleReasonForContact}                     
                            />
                            <Form.Check 
                                value="Domestic Harm / Abuse"
                                type="radio"                               
                                label="Domestic Harm / Abuse" 
                                checked={reasonForContact === "Domestic Harm / Abuse"}   
                                onChange={handleReasonForContact}                      
                            />
                            <Form.Check 
                                value="Bullying"
                                type="radio"                                
                                label="Bullying" 
                                checked={reasonForContact === "Bullying"}    
                                onChange={handleReasonForContact}                     
                            />
                            <Form.Check 
                                value="Other"
                                type="radio"                                
                                label="Other" 
                                checked={reasonForContact === "Other"}    
                                onChange={handleReasonForContact}                     
                            />
                        </Col>                            
                    </Row>      
                    <Row>
                        <Col>
                            <Form.Label className="label-heading">Has a Police Report Been Filed?</Form.Label>
                            <Form.Check 
                                value="Yes"
                                type="radio"                                
                                label="Yes"  
                                checked={policeReportFiled === "Yes"}   
                                onChange={handlePoliceReportFiled}                   
                            />
                            <Form.Check 
                                value="No"
                                type="radio"                                
                                label="No"  
                                checked={policeReportFiled === "No"}   
                                onChange={handlePoliceReportFiled}                          
                            />                    
                        </Col>                            
                    </Row> 
                    <Row>
                        <Col>
                            <Form.Label className="label-heading">Children?</Form.Label>
                            <Form.Check 
                                value="Yes"
                                type="radio"                                
                                label="Yes"  
                                checked={children === "Yes"}   
                                onChange={handleHasChildren}                         
                            />
                            <Form.Check 
                                value="No"
                                type="radio"                                
                                label="No"   
                                checked={children === "No"}   
                                onChange={handleHasChildren}                           
                            />                    
                        </Col>                            
                    </Row>  
                </Form.Group> 
            </div> 
            <Row className="submit-button">
                <Button variant="primary" type="submit">Submit Form</Button> 
            </Row>                                            
        </Form>
    );   
}
////////////////////////////////////////////////////////////////////
// VALILDATION FUNCTIONS FOR FORM                                //
///////////////////////////////////////////////////////////////////

// Checks for regex true or false and then increments or decrements the counter.

// Check all text fields for text only output.
function checkValidity(testInputValidity) {
    if(testInputValidity) {
        trueCounter += 1;
    }    
}

function checkMonth(month) {
    if (!/^[0-9\b]+$/.test(month)) {
        return false;
    } else {
        const value = parseInt(month, 10);
        if (value < 1 || value > 12) {
            return false;
        } else {
            trueCounter += 1
        }
    }
}

function checkDay(day) {
    if (!/^[0-9]*$/g.test(day)) {
        return false;
    } else {
        const value = parseInt(day, 10);
        if (value < 1 || value > 31) {
            return false;
        } else {
            trueCounter += 1
        }
    }
}

function checkYear(year) {
    if (!/^[0-9]*$/g.test(year)) {
        return false;
    } else {
        const value = parseInt(year, 10);
        if (value < 1935 || value > 2022) {
            return false;
        } else {
            trueCounter += 1
        }
    }
}