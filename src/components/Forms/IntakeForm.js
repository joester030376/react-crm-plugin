import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Forms/IntakeForm.css';

const initialValues = {
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    PhoneNumber: '',
    BestContactMethod: '',
    ClientAddress: '',
    ClientCity: '',
    ClientZipCode: '',
    Country: 'US',
    DateOfBirth: '',
    Gender: '',
    Occupation: '',
    ReasonForContact: '',
    PoliceReportFiled: '',
    Children: '',
    AssitanceType: ''
};


export default function IntakeForm() {

    const [values, setValues] = useState(initialValues);

    return(
        <Form>
            <div className="intake-form-style">
                <div>
                    <h1 className="intake-title">Intake Form</h1>
                </div>
            <br className="line-break" />
            <Row>
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control />
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control />
                </Col>
            </Row> 
            <Row>
                <Col>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control />
                </Col>                
            </Row>  
            <Row>
                <Col lg="6">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control />
                </Col>                            
            </Row>
            <Row>
                <Col>
                    <Form.Label>What is the Best Contact Method?</Form.Label>
                    <Form.Check 
                        value="Phone call"
                        type="radio"
                        aria-label="radio 1"
                        label="Phone Call"                        
                    />
                    <Form.Check 
                        value="Text Message"
                        type="radio"
                        aria-label="radio 2"
                        label="Text Messages"                        
                    />
                    <Form.Check 
                        value="Email"
                        type="radio"
                        aria-label="radio 3"
                        label="Email"                        
                    />
                </Col>                            
            </Row> 
            <Row>
                <h3>Address</h3>
                <Col>                    
                    <Form.Control placeholder="Address 1"/>
                    <Form.Label>Address 1</Form.Label>
                </Col>                
            </Row>  
            <Row>
                <Col>                    
                    <Form.Control placeholder="Address 2"/>
                    <Form.Label>Address 2</Form.Label>
                </Col>                
            </Row>  
            <Row>
                <Col lg="8">                    
                    <Form.Control placeholder="Address 2"/>
                    <Form.Label>City</Form.Label>
                </Col> 
                <Col lg="4">                    
                    <Form.Control placeholder="Address 2"/>
                    <Form.Label>State/Province</Form.Label>
                </Col>                
            </Row> 
            <Row>
                <Col>                    
                    <Form.Control placeholder="Country"/>
                    <Form.Label>Country</Form.Label>
                </Col>                
            </Row> 
            <Row>
                <h3>Date of Birth</h3>  
                <Col lg="2">                        
                    <Form.Control placeholder=""/>
                    <Form.Label>MM</Form.Label>
                </Col>
                <Col lg="2">
                    <Form.Control placeholder=""/>
                    <Form.Label>DD</Form.Label>
                </Col>
                <Col lg="3">
                    <Form.Control placeholder=""/>
                    <Form.Label>YYYY</Form.Label>
                 </Col>                    
            </Row>  
            <Row>
                <Col>   
                    <Form.Label>Gender</Form.Label>                 
                    <Form.Control placeholder=""/>                    
                </Col>                
            </Row>   
            <Row>
                <Col>   
                    <Form.Label>Occupation</Form.Label>                 
                    <Form.Control placeholder=""/>                    
                </Col>                
            </Row>  
            <Row>
                <Col>   
                    <h3>Questions</h3>           
                </Col>                
            </Row>   
            <Row>
                <Col>
                    <Form.Label>What is the reason client is contacting us?</Form.Label>
                    <Form.Check 
                        value="Contemplating Suicide"
                        type="radio"
                        aria-label="radio 1"
                        label="Contemplating Suicide"                        
                    />
                    <Form.Check 
                        value="Domestic Harm / Abuse"
                        type="radio"
                        aria-label="radio 2"
                        label="Domestic Harm / Abuse"                        
                    />
                    <Form.Check 
                        value="Other"
                        type="radio"
                        aria-label="radio 3"
                        label="Other"                        
                    />
                </Col>                            
            </Row>      
            <Row>
                <Col>
                    <Form.Label>Has a Police Report Been Filed?</Form.Label>
                    <Form.Check 
                        value="Yes"
                        type="radio"
                        aria-label="radio 1"
                        label="Yes"                        
                    />
                    <Form.Check 
                        value="Yes"
                        type="radio"
                        aria-label="radio 2"
                        label="No"                        
                    />                    
                </Col>                            
            </Row> 
            <Row>
                <Col>
                    <Form.Label>Children?</Form.Label>
                    <Form.Check 
                        value="Yes"
                        type="radio"
                        aria-label="radio 1"
                        label="Yes"                        
                    />
                    <Form.Check 
                        value="No"
                        type="radio"
                        aria-label="radio 2"
                        label="No"                        
                    />                    
                </Col>                            
            </Row>  
            </div> 
            <Row className="submit-button">
                <Button variant="primary" type="submit">Submit Form</Button> 
            </Row>                                            
        </Form>
    );   
}