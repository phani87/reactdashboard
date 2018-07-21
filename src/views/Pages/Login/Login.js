import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {

  constructor() {
    super()
    this.state = {
      uname: '',
      pwd: '',
    };
    // Good Solution: Bind it in here!
    this.registerClick = this.registerClick.bind(this)  
    this.loginClick = this.loginClick.bind(this) 

    
  }

  registerClick() {
    // e.preventDefault()
    console.log('redirecting to Register...')
    window.location.assign('/#/register');
  }

  loginClick() {
    // e.preventDefault()
    
    this.validateUser(this.state.uname, this.state.pwd )
  }

  validateUser(uname, pwd) {
    console.log('such gnawledge')
    if((uname=='phani') && (pwd=='asdf')){
      window.location.assign('/#/dashboard');
    }else{
      window.location.assign('/#/login');
    }
    console.log('username' + uname)
  }

  onChange = (e) => {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { uname, pwd } = this.state;
    return (
      <div className="app flex-row align-items-center">
       
          <Container>
          <form>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name='uname' value={uname} placeholder="Username" onChange={this.onChange}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name='pwd' value={pwd} placeholder="Password" onChange={this.onChange}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="danger" className="px-4" onClick={this.loginClick} >Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-danger py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Create your account to log into the classy dashboard!</p>
                        <Button color="danger" className="mt-3" onClick={this.registerClick} active> Register Now!</Button>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            </form>
          </Container>
        
      </div>
    );
  }
}

export default Login;
