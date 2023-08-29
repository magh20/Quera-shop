// import node module libraries
import Link from 'next/link';
import { useState } from 'react'
import { Row, Col, Card, Image, Modal, Button, Form, Badge, Container } from 'react-bootstrap';
import { Trash2 } from 'react-feather';

const CurrentPlan = () => {
    const [modalShow, setModalShow] = useState(false);

    const ChangePlanModal = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Your Plan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-5">
                    <h4 className="mb-1">Change your plan</h4>
                    <p>You can choose from one of the available plans bellow.</p>
                    <Card className="border shadow-none">
                        <Card.Body className="border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Form.Check id="plan1">
                                        <Form.Check.Input type="radio" name="plan" />
                                        <Form.Check.Label>
                                            <span className="d-block text-dark fw-bold">Standard <Badge bg="success"> Active Plan</Badge></span>
                                            <span className="mb-0 small text-muted">Single Site</span>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 text-dark">$49.00</h4>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="border-bottom">
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Form.Check id="plan2" >
                                        <Form.Check.Input type="radio" name="plan" />
                                        <Form.Check.Label>
                                            <span className="d-block text-dark fw-bold">Multiside</span>
                                            <span className="mb-0 small text-muted">Unlimited Site</span>
                                        </Form.Check.Label>
                                    </Form.Check>
                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 text-dark">$149.00</h4>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <Form.Check id="plan3">
                                        <Form.Check.Input type="radio" name="plan" />
                                        <Form.Check.Label>
                                            <span className="d-block text-dark fw-bold">Extended</span>
                                            <span className="mb-0 small text-muted">For spanaying users</span>
                                        </Form.Check.Label>
                                    </Form.Check>

                                </div>
                                <div>
                                    <h4 className="fw-bold mb-0 text-dark">$449.00</h4>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer className="justify-content-start p-5">
                    <Button>Save and Continue</Button>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Col xs={12} className="mb-6 ">
            <Card className=' py-6 px-2 h-100 w-100 bg-white  ' style={{borderRadius:'5px',minHeight:'300px'}}   >
             <Card className=' bg-light py-3 px-2' >
             
                <Row style={{justifyContent:'center',alignItems:'center'}} >
                    <Col style={{justifyContent:'start',alignItems:'st',display:'flex'}}>
                    <input type='checkbox'/>
                    </Col>
                    <Col style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                    meysam sayyad
                    </Col>
                    <Col style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                    ***********
                    </Col>
                    <Col>
                    meysamsayyadtala@gmail.com
                    </Col>
                    <Col style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <Trash2 style={{color:'red',width:'18px'}}/>
                    </Col>
                </Row>
       

             </Card>
               
                
            </Card>
        </Col>
    )
}

export default CurrentPlan