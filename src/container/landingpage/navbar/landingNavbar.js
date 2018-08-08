import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    Container,
    Button, Popover, PopoverHeader, PopoverBody,
    Form, FormGroup, Label, Input, FormText ,
  
} from 'reactstrap';
import './landingnavbar.css'
import { AvForm, AvField } from 'availity-reactstrap-validation';
// import loader from '../../../assets/loader.gif'

class Landingnavbar extends Component {

    constructor(props) {
        super(props);
    
        
        this.state = {
          isOpen: false,
          popoverOpen: false
        };
      }
      toggle=()=> {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      popovertoggle=()=> {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      }


  
      handleValidSubmit = (event, values)=>{
        const email = values.email;
        const password = values.password;
        this.props.signin({
           
            email: email,
            password : password
        })
      
      }

    render() {
        return (
            <React.Fragment>
                <Navbar style={{position:'sticky',right:'0' ,top:'0',backgroundColor:'#fff', zIndex:'1000',borderBottom:'1px solid #ececec'}} expand="md" light>
                    <Container style={{height:'7vh'}}>
                    <NavbarBrand style={{color:'#2DBE60',fontWeight:'600'}}>BrandLogo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>

                    
                        <Nav className="ml-auto" navbar>
                            
                            <NavItem>
                                <Button id="Popover1" onClick={this.popovertoggle} >
                                     Login
                                </Button>
                                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.popovertoggle}>
                                <PopoverBody className="pbody">
                                    
                                    
                                        <AvForm onValidSubmit={this.handleValidSubmit} >    

                                            <AvField name="email" label="Email" type="email" required />
                                            
                                            <AvField name="password" label="Password" type="password" required />
                                            <p className="Forgot-password-" >Forgot password ?</p>
                                            <Button className="loginSubmitbtn"
                                                //  onClick={this.submit} 
                                                //  disabled={this.props.loader }
                                                 >  
                                            {/* { this.props.loader && <img src={loader} />} */}
                                             Submit
                                            </Button>
                                        </AvForm>

                                </PopoverBody>
                                </Popover>
                             
                            </NavItem>

                            {/* <NavItem style={{marginTop:'4px'}}>
                                <NavLink to="/" className='navcomponent'>help ?</NavLink>
                            </NavItem> */}
                        </Nav>
                    </Collapse>
                    </Container>
                </Navbar>
               
            </React.Fragment>
        )
    }
}

export default Landingnavbar;