import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                

                <Link to="/">
                    <div> 
                    <button className="btn btn-info btn-md">
                    <span className="glyphicon glyphicon-home"></span> Home
                    </button>
                    </div>
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" style={{color: 'wheat'}}>
                            Products
                        </Link>
                    </li>
                </ul>

                <Link to="/cart" className="ml-auto"> 
                    <ButtonContainer> 
                        <i className="fas fa-cart-plus" />
                         Cart
                    </ButtonContainer>
                </Link>

            </NavWrapper>
        );
    }
}


const NavWrapper = styled.nav`
 background: var(--mainBlue);
 height: 100px;
 .nav-link {
     color: var(--mainWhite) !important;
     font-size: 1.3rem;
     text-transform: capitalize;
 }
`