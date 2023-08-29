'use client'
// import node module libraries
import { Row, Col, Container } from 'react-bootstrap';

// import widget as custom components
import { PageHeading } from 'widgets'

// import sub components
import { BillingAddress, CurrentPlan } from 'sub-components'

const Billing = () => {
  return (
    <Container fluid className="p-6">
      {/* Page Heading */}
      <PageHeading heading="Billing" />

      <Row className="mt-6">
        <Col xl={{ span: 12  }} lg={{ span: 10 }} md={12} xs={12}>
          <Row>
            {/* Current Plan Overview */}
            <CurrentPlan />

          
          

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Billing