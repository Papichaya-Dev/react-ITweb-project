import React from "react";
import Navbar from "../Layout/Navbar";
import {Animated} from "react-animated-css";
import styled from 'styled-components';
import { Card, Button, Container, Row, Col, Spinner ,ListGroup,ListGroupItem,} from 'react-bootstrap';
import Swiper from 'react-id-swiper';

const TitleArticle = styled.div`
    margin-left:600px;
    margin-top:20px;
	text-decoration: none;
	color: black;
    font-family: 'Kanit', sans-serif;
    width:300px;
    text-align: center;
	justify-content: center;
    font-size: 50px;
    font-weight:bolder;
 
`
const TitleArticleTwo = styled.div`
    
    margin-top:-10px;
	text-decoration: none;
	color: black;
    font-family: 'Kanit', sans-serif;
    text-align: center;
	justify-content: center;
    font-size: 23px;
    font-weight:bolder;
`
const TitleArticleThree = styled.div`
    margin-top:-5px;
	text-decoration: none;
	color: black;
    font-family: 'Kanit', sans-serif;
    text-align: center;
	justify-content: center;
    font-size: 23px;
    font-weight:bolder;
 
`
const CustomCardArticle = styled(Card)`
margin-left:200px;
  width:22rem;
  height:26rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const TextCardNewsTitle = styled(Card.Title)`
    font-family: 'Kanit', sans-serif;
	font-size:19px;
`;
const TextCardNew = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
    
 &:hover {
		color: #5226FF;
		cursor: pointer;
	}
`;
const TextCardNewTwo = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #A6009B;
		cursor: pointer;
	}
`;

const CustomCardReview = styled(Card)`
margin-left:200px;
  width:22rem;
  height:25rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const TextCardNewThree = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #39C741;
		cursor: pointer;
	}
`;
const CustomCol = styled(Col)`
  margin-bottom:50px;

`;
const CustomColTwo = styled(Col)`
  margin-bottom:50px;
  margin-left:-100px;

`;
const CustomRow = styled(Row)`
margin-top:50px;
`;

const TextArticle = styled.div`
color:black;
font-family: 'Source Sans Pro', sans-serif;
font-size:50px;
margin-left:200px;
margin-top:-15px;
opacity:0.8;
`
const TextReview= styled.div`
color:black;
font-family: 'Source Sans Pro', sans-serif;
font-size:50px;
margin-left:200px;
margin-top:-20px;
opacity:0.8;
`
const FooterHome = styled.div`
background-color:black;
  width: 100%;
  transition: 100ms;
  height:15vh;
  font-family: 'IM Fell French Canon SC', serif;
	font-size: 50px;
  color: white;
  margin-top:20px;

`
const ButtonNext = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:650px;
margin-top:40px;
&:hover {
   
    cursor: pointer;
    color:yellow;
    
    }
`;

const ButtonNextTwo = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
   
   cursor: pointer;
   color:yellow;
   
   }
`;
const ButtonNextThree = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
  color: yellow;
   cursor: pointer;
   
   
   }
`;
const BackgroundBody = styled.div`
background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);
	background-position: center;
	background-repeat: no-repeat;
  background-size: cover;
  width: '100vw';
        height: '100vh' ;
`;
class ArticlePage extends React.Component{
    readNew(){
        console.log("Fetch")
        this.props.history.push("/articleone")
    }
    readNewTwo(){
      console.log("Fetch")
      this.props.history.push("/articletwo")
  }
    state = {
      likes: 0
    };
    addLike = () => {
      let newCount = this.state.likes + 1;
        this.setState({
        likes: newCount
      });
    };
    
    render(){
        return (
           
       <div>
          <BackgroundBody>
        <Navbar/>
           <TitleArticle>Article</TitleArticle>
           <TitleArticleTwo>รวมบทความต่างๆเกี่ยวกับอุปกรณ์คอมพิวเตอร์</TitleArticleTwo>
           <TitleArticleThree>ครบวงจร ไว้ที่นี้เเล้ว</TitleArticleThree>
           <CustomRow>
            <CustomCol md={4}>
              <CustomCardArticle >
                 <Card.Img variant="top" onClick={()=> this.readNew()}  src="https://i.insider.com/5dd2d2f27eece55b137c4a2c?width=1100&format=jpeg&auto=webp" />
                 <Card.Body onClick={()=> this.readNew()}  >
                       <TextCardNewsTitle>“หูฟัง” อาวุธสำคัญสำหรับเหล่าเกมเมอร์"</TextCardNewsTitle>
                       <TextCardNew>1.Earbuds หูฟังประเภท Earbuds คือ 1 ใน หูฟังรูปแบบที่เก่าแก่ที่สุดของโลกตั้งแต่สมัยเทป ซึ่งปัจจุบันยังได้รับความนิยมอย่างต่อเนื่อง . . .</TextCardNew>
                 </Card.Body>
                 <button onClick={this.addLike}>❤️Likes: {this.state.likes} </button>
              </CustomCardArticle> 
           </CustomCol>

            <CustomColTwo md={4}>  
              <CustomCardArticle>
                 <Card.Img variant="top" onClick={()=> this.readNewTwo()}  src="https://petmaya.com/wp-content/uploads/2016/09/nirvana-nevermind-07.jpg" />
                  <Card.Body onClick={()=> this.readNewTwo()}>
                       <Card.Title>Newest</Card.Title>
                       <TextCardNew>‘ดนตรีนั้นคือชีวิต’ เมื่อชาวโลกสร้างเพลงเกี่ยวกับโควิด-19 จนเป็นกระแส pandemic pop</TextCardNew>
                         
                  </Card.Body>
              </CustomCardArticle> 
            </CustomColTwo>



            <CustomColTwo md={4}>
              <CustomCardArticle>
                <Card.Img variant="top" src="https://3.bp.blogspot.com/-IEQXM8Y_QaU/W_aTiSja_oI/AAAAAAAABNQ/dVoN3ly8TNoYYsSMUe9C1ahE004C_PR_QCLcBGAs/s1600/118839789.jpg" />
                 <Card.Body>
                    <Card.Title>Newest</Card.Title>
                    <TextCardNew>ช่วงกักตัวฉันนั่งเซฟที่เที่ยวทุกวัน โควิดจบเมื่อไหร่ฉันจะไปเที่ยว แต่ที่ไปแน่ๆ คือไปกินอาหารเกาหลี</TextCardNew>
                         
                 </Card.Body>
              </CustomCardArticle> 
              </CustomColTwo>

            </CustomRow>
<CustomRow>
<CustomCol md={4}>
<CustomCardArticle >
  <Card.Img variant="top" src="https://static.wixstatic.com/media/5d23ce_2d9f6226623f49cd93e045bcf92d5be7.jpg" />
  <Card.Body>
    <Card.Title>News</Card.Title>
    <TextCardNewTwo>
    ปั้นกระดาษให้เป็น ‘103paper’ แบรนด์ที่ชุบชีวิตกระดาษเหลือทิ้งให้เกิดใหม่เป็นแจกัน Thai Heritage แบรนด์ออนไลน์มือใหม่ที่ตั้งใจเปลี่ยนภาพขนมไทยด้วยจานลายครามและฝาชี
    </TextCardNewTwo>
  </Card.Body>
</CustomCardArticle>
</CustomCol>
<CustomColTwo md={4}>  
              <CustomCardArticle>
                 <Card.Img variant="top" src="https://www.themacho.co/wp-content/uploads/2018/11/%E0%B8%81%E0%B8%81.jpg" />
                  <Card.Body>
                       <Card.Title>Article</Card.Title>
                         <TextCardNewTwo> ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ ปั้นกระดาษให้เป็น ‘103paper’ เป็นแจกัน Thai Heritage เปลี่ยนภาพขนมไทยด้วยจานลายครามและฝาชี</TextCardNewTwo>
                         
                  </Card.Body>
              </CustomCardArticle> 
            </CustomColTwo>
</CustomRow>
            
            
<CustomCol md={4}></CustomCol>
<CustomCardReview>
  <Card.Img variant="top" src="https://i.pinimg.com/236x/90/d1/22/90d122f66983b3941213c8e27eeff04d--oasis-band-oasis-live.jpg" />
  <Card.Body>
    <Card.Title>New</Card.Title>
    <TextCardNewThree>
      ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ
    </TextCardNewThree>
   
  </Card.Body>
</CustomCardReview>
<ButtonNext variant="dark">1</ButtonNext>{' '}<ButtonNextTwo variant="dark">2</ButtonNextTwo>{' '}<ButtonNextThree variant="dark">3</ButtonNextThree>{' '}

<FooterHome>ITDismember</FooterHome>
</BackgroundBody>
        </div>
        )
    }
}

export default ArticlePage;