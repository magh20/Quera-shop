'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { useEffect, useState } from 'react';
import { register } from 'app/api/hello';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const hasMounted = useMounted();
 const [radio,setRadio]=useState('')
 const [user,setUser]=useState('')
const [email,setEmail]=useState('')
const [error,seterror]=useState(['',0])
const [password,setPassword]=useState('')
const [NationalId,setNationalId]=useState('')
const [phone,setPhone]=useState('')
const router=useRouter()

const Submit=(e)=>{
  e.preventDefault()
 register(user,email,password,phone,NationalId,radio,seterror,router)
}



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
            <Form onSubmit={Submit}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control value={user} onChange={(e)=>{setUser(e.target.value)}} type="text" name="username" placeholder="User Name" required />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" placeholder="Enter address here" required pattern="([A-Za-z0-9][._]?)+[A-Za-z0-9]@[A-Za-z0-9]+(\.?[A-Za-z0-9]){2}\.(com?|net|org)+(\.[A-Za-z0-9]{2,4})?" />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" placeholder="**************" required  minLength={8} />
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>National ID</Form.Label>
                <Form.Control type="text"  value={NationalId} onChange={(e)=>{setNationalId(e.target.value)}} name="confirm-password" minLength={10} maxLength={10} placeholder='National ID' pattern='^\d+$' required  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="phone"  value={phone} onChange={(e)=>{setPhone(e.target.value)}} name="phone" placeholder="09111111111" required minLength={11} pattern='^\d+$' />
              </Form.Group>
              <div style={{color:'grey',marginBottom:'4px'}} >Select Your Role</div>
              <Form.Group>
              <input style={{marginRight:'4px'}}  type='radio' id='teacher' name='role'  onChange={()=>{setRadio('teacher')}} />
                <Form.Label style={{marginRight:'15px'}} htmlFor='teacher'>Teacher</Form.Label>
                <input style={{marginRight:'4px'}} type='radio' id='admin' name='role' value={'admin'} onChange={()=>{setRadio('admin')}} />
                <Form.Label htmlFor='admin'>Admin</Form.Label>
                
              </Form.Group>

              {/* Checkbox */}
              <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">Create Free Account</Button>
                </div>
                <div className='mt-2'>
                <p style={{color:error[1]< 400 ? 'green':'red'}} dir='rtl'>{error[0]}</p>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/" className="fs-5">Already member? Login </Link>
                  </div>
                  <div>
                    <Link href="forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                  </div>
                </div>
              </div>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUp