import React ,{Component} from 'react';
import './landingpage.css';
import LandingNavbar from './navbar/landingNavbar';
import { Container, Row, Col } from 'reactstrap';
import Signup from './signupform/signupform'
import * as action from '../../store/actions/index';
import {connect} from 'react-redux';


class Landingpage extends Component {

    render(){
        return (
            <React.Fragment>
                <LandingNavbar signin={this.props.signin}/>

                <Container style={{marginTop:'200px'}}>
                    <Row>
                      <Col md="6" style={{borderRight:'1px solid #ececec'}}>
                        <h1 >
                          Its Just A Dummy Text    
                        </h1>   
                        <p style={{width:'400px',textAlign:'justify'}}> Lorem ipsum dolor sit amet, Mauris aliquam sed consectetur adipiscing elit.</p>
                        
                      </Col>
                      <Col md="6">
                        <div style={{marginLeft:'60px'}}>
                            <h3 style={{marginBottom:'40px'}}>
                                Signup for free
                            </h3>
                            <Signup signup={this.props.signup}/>
                         </div>
                      </Col>
                    </Row>
                </Container>
                
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signin : res => dispatch(action.signIn(res)),
        signup : res => dispatch(action.signUp(res))
    }
}

export default connect(null,mapDispatchToProps)(Landingpage) ;