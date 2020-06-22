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

const TextFooter = styled.div`
margin-left:560px;
margin-top:-10px;
color:#D2D2D2;
font-size:25px;
`

export class Footer extends Component {
    render() {
        return (
            
           <Background>
               <TextFooter>Copyright &copy; {new Date().getFullYear()}ITDisassembly</TextFooter>
           </Background>
          
        )
    }
}

export default Footer
