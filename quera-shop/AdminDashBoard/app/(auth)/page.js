'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { login } from 'app/api/hello';
import { useRouter } from 'next/navigation';

const SignIn = () => {
 const [user,setUser]=useState('')
 const [pass,setPass]=useState('')
 const [error,seterror]=useState(['',0])
 const router=useRouter()
 const dispatch=useAppDispatch()
 

 const submit=(e)=>{
   e.preventDefault()
 
   login(user,pass,dispatch,router,seterror)
 }

  const hasMounted = useMounted();
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><Image src="/images/brand/logo/logo-primary.svg" className="mb-2" alt="" /></Link>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* Form */}
            {hasMounted &&
              <Form onSubmit={submit} >
                {/* Username */}
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label> email</Form.Label>
                  <Form.Control value={user} onChange={(e)=>setUser(e.target.value)} type="email" name="username" placeholder="Enter Email here" required />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={pass} onChange={(e)=>setPass(e.target.value)} type="password" name="password" placeholder="**************" required minLength={8} />
                </Form.Group>

                {/* Checkbox */}
                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" id="rememberme">
                    <Form.Check.Input type="checkbox" />
                    <Form.Check.Label>Remember me</Form.Check.Label>
                  </Form.Check>
                </div>
                <div>
                  {/* Button */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit">Sign In</Button>
                  </div>
                  <div className='mt-2'>
                    <p style={{color:error[1]< 400 ? 'green':'red'}} dir='rtl'>{error[0]}</p>
                  </div>
                  <div className="d-md-flex justify-content-between mt-4">
                    <div className="mb-2 mb-md-0">
                      <Link href="sign-up" className="fs-5">Create An Account </Link>
                    </div>
                    <div>
                      <Link href="forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                    </div>
                  </div>
                </div>
              </Form>}


          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}


export default SignIn