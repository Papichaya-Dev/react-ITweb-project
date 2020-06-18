import React, { Component } from 'react';
import styled from 'styled-components';

const Background = styled.div`
	width: 100%;
    height:100px;
	background-color: black;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
    font-color:white;
`;

export class Footer extends Component {
    render() {
        return (
            
           <Background>
               Copyright &copy; {new Date().getFullYear()}ITDisassembly
           </Background>
          
        )
    }
}

export default Footer
