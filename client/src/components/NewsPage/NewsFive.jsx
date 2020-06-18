import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://game-insider.com/wp-content/uploads/KEYART_1920B.jpg");
	height: 650px;
	margin-top: -130px;
	margin-left: -200px;
`;

const BackgroundBody = styled.div`
	background-image: linear-gradient(350deg, #e0c3fc 0%, #8ec5fc 100%);
	background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
	background-blend-mode: multiply;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
const TextTopicHead = styled(Animated)`
margin-top:-300px;
font-family: 'Source Sans Pro';
`;

const TextCredit = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 15px;
	color: black;
	font-weight: 100;
	margin-top: -20px;
	margin-left: 580px;
`;

const TextTopicReview = styled.div`
	width: 300;
	font-size: 80px;
	font-family: 'Source Sans Pro';
	color: black;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: 10px;
	margin-left: 430px;
`;

const TextTopicOpen = styled(Animated)`
	font-family: 'Kanit', sans-serif;
	font-weight: bolder;
	font-size: 30px;
	color: black;
	font-weight: 100;
	margin-top: 5px;
	margin-left: 150px;
`;
const TextTopicOpenTwo = styled(Animated)`
	font-family: 'Kanit', sans-serif;
	font-weight: bolder;
	font-size: 35px;
	color: black;
	font-weight: 100;
	margin-top: -30px;
	margin-left: 120px;
`;
const TextContent = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 20px;
	color: black;
	font-weight: 100;
	margin-top: 40px;
	margin-left: 180px;
`;
const TextTopicContent = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 35px;
	color: #da0000;
	font-weight: 100;
	margin-top: 25px;
	margin-left: 180px;
`;
const Image = styled.div`
	background-image: url("https://www.gamemonday.com/wp-content/uploads/2020/04/World-War-3-screenshot-3-1068x601.png");
	background-position: center;
	background-size: cover;
	width: 40rem;
	height: 20rem;
	margin-left: 430px;
	margin-top: 20px;
	transition: transform .2s;
	&:hover {
		transform: scale(1.1);
	}
`;

const params = {
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 50,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
};

const NewsOne = styled.div`
	background-image: url("https://worldwar3.com/wp-content/uploads/2018/06/SteamENG.png");
	width: 60rem;
	height: 32rem;
	margin-top: 13px;
	border-block: 10vh;
`;

const FooterHome = styled.div`
	background-color: black;
	width: 100%;
	transition: 100ms;
	height: 15vh;
	font-family: 'IM Fell French Canon SC', serif;
	font-size: 50px;
	color: white;
	margin-top: 150px;
`;
class NewsFive extends Component {
	render() {
		const opts = {
			height: '390',
			width: '640',

			playerVars: {
				//www.youtube.com/watch?v=6OhkjiEM_5I

				autoplay: 1
			}
		};
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicOpen animationIn="fadeInRightBig" animationInDuration={1500}>
						<TextTopicReview> World war 3 </TextTopicReview>
						<TextTopicOpenTwo>
							เกมยิงสงครามยุคปัจจุบันเตรียมเปิดตัวใหม่อีกครั้งกับผู้จัดจำหน่ายใหม่
						</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						เรียกได้ว่าเป็นหนึ่งในเกมที่เปิดตัวได้อย่างยิ่งใหญ่และพบกับปัญหาจนสุดท้ายก็ดับไปอย่าง World war
						3 เกมยิง แนวสงครามขนาดใหญ่ที่ในตอนนี้<br />มีข่าวว่าจะมีการยกเครื่องใหม่
						อีกทั้งยังมีการเปลี่ยนผู้จัดจำหน่ายตัวเกมอีกด้วย
					</TextContent>
					<Image />
					<TextContent>
						อ้างอิงจากที่ PCgamers ได้มีการให้ข่าวเกี่ยวกับการประกาศสำคัญจากทางสตูดิโอผู้สร้างเกมนี้ The
						Farm 51 ที่ได้ ประกาศร่วมมือกับผู้จัดจำหน่ายรายใหม่<br />นั่นคือ MY.GAME
						โดยทางผู้จัดจำหน่ายรายใหม่นี้ยังได้ให้ความสนับสนุนในด้าน
						การตลาดและการจัดการดูแลชุมชนของเกมอีกด้วย
					</TextContent>
					<TextContent>
						และจากการยกเครื่องใหม่ของเกม ในปัจจุบันเกม World war 3 ถูกยุติการขายในหน้าร้าน Steam
						แต่ผู้เล่นที่มีตัว เกมนี้ยังสามารถเล่นได้ตามปกติ<br />
						แม้ตัวเกมที่กำลังจะเปิดใหม่จะยังไม่มีการยืนยันว่าจะเป็นในรูปแบบ Free-to-play หรือไม่
						แต่ก็มีการประกาศระบบใหม่และอัพเดทต่างๆที่จะมาในอนาคตอีกด้วย<br /> <br />เวลานี้เราคงต้องมาลุ้นกันว่าจะมีอนาคตที่ยอดเยี่ยมกับเกมนี้กันอยู่หรือไม่ในอนาคตอันใกล้นี้
					</TextContent>
					<br />
					<Swiper {...params}>
						<NewsOne />
					</Swiper>

					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default NewsFive;
