import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';

const BackgroundHeader = styled.div`
	background-image: url("https://cdn2.unrealengine.com/Diesel%2Funtitled-page%2FEGS_News_Evergreen-1920x1080-8ca7376077d174b4fc77c92462c7adb546b4fb18.jpg");
	height: 250px;
	margin-top: -25px;
	margin-left: -180px;
	/* background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover; */
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

const TextTopicNew = styled.div`
	width: 300;
	font-size: 80px;
	font-family: 'Source Sans Pro';
	color: black;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: 10px;
	margin-left: 330px;
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
	font-size: 50px;
	color: black;
	font-weight: 100;
	margin-top: -30px;
	margin-left: 200px;
`;
const TextContent = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 20px;
	color: black;
	font-weight: 100;
	margin-top: 40px;
	margin-left: 180px;
`;
const Image = styled.div`
	background-image: url("https://gameworldobserver.com/wp-content/uploads/2019/12/Epic-Games.jpeg");
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

const BackgroundFooter = styled.div`
	width: 100%;
	height: 100px;
	background-color: black;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 30px;
	font-color: white;
	margin-top: 50px;
`;

const TextFooter = styled.div`
	margin-left: 560px;
	margin-top: -10px;
	color: #d2d2d2;
	font-size: 25px;
`;
class NewsTwo extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicOpen animationIn="fadeInRightBig" animationInDuration={1500}>
						<TextTopicNew> Epic game store </TextTopicNew>
						<TextTopicOpenTwo>เตรียมแจกเกมฟรี ภายในวันที่ 11 มิถุนายนนี้</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						เรียกได้ว่าแทบจะกลายเป็นกิจวัตรประจำสัปดาห์ไปแล้วสำหรับบริษัทอย่าง Epic game เจ้าของ engine
						ชื่อดังอย่าง Unreal engine ที่จะแจก<br />
						เกมฟรีสำหรับผู้ใช้งาน Epic game store ทุกสัปดาห์
						ซึ่งในเวลานี้ได้มีการประกาศผ่านทางหน้าร้านค้าเป็นเวลานับถอยหลังอีก 5 วัน ซึ่งก็คือ<br />วันที่
						11 มิถุนายนที่จะถึงนี้ เวลา 4 ทุ่มในบ้านเรา ก่อนการแจกเกมใหม่
					</TextContent>
					<Image />
					<TextContent>
						Epic game store เป็นแพลตฟอร์มการซื้อค้าเกมในรูปแบบ digital ที่เปิดให้บริการมาเข้าย่างปีที่ 2
						เป็นที่เรียบร้อย และยังมีการแจกเกมฟรีแทบทุก<br />
						สัปดาห์ตลอดเวลาที่เปิดให้บริการ สำหรับผู้ที่สนใจสามารถเข้าไปเยี่ยมชมได้ที่
						https://www.epicgames.com/store/th/
					</TextContent>
					<BackgroundFooter>
						<TextFooter>Copyright &copy; {new Date().getFullYear()}ITDisassembly</TextFooter>
					</BackgroundFooter>
				</BackgroundBody>
			</div>
		);
	}
}
export default NewsTwo;
