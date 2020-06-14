import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';
import Navbar from '../Layout/Navbar';

const BackgroundHeader = styled.div`
	background-image: url("https://thumbs.gfycat.com/ImmaterialEasyLiger-max-1mb.gif");
	height: 325px;
	margin-top: -25px;
	margin-right: 80px;
	margin-left: 80px;
`;

const BackgroundBody = styled.div`
	background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%);
	background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
	background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
	background-blend-mode: multiply;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const VideoOne = styled(YouTube)`
	margin-top: 5px;
	margin-left: 450px;
`;

const TextTopicOpen = styled(Animated)`
	font-family: 'Kanit', sans-serif;
	font-weight: bolder;
	font-size: 50px;
	color: black;
	font-weight: 100;
	margin-top: 5px;
	margin-left: 150px;
`;
const TextContent = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 20px;
	color: black;
	font-weight: 100;
	margin-top: 25px;
	margin-left: 180px;
`;

const TextCredit = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 15px;
	color: black;
	font-weight: 100;
	margin-top: -20px;
	margin-left: 600px;
`;

const params = {
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
};

const NewsOnee = styled.div`
	background-image: url("https://1734811051.rsc.cdn77.org/data/images/full/364448/panello.png");
	width: 30rem;
	height: 20rem;
	margin-top: 13px;
	border-block: 10vh;
`;
const NewsTwo = styled.div`
	background-image: url(" https://dgit.com/wp-content/uploads/2020/04/PS4-morph-PS5.gif");
	height: 20rem;
	width: 30rem;
	margin-top: 13px;
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

class NewsOne extends Component {
	render() {
		const opts = {
			height: '390',
			width: '640',

			playerVars: {
				//www.youtube.com/watch?v=silIdzgX2eQ

				autoplay: 1
			}
		};
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicOpen animationIn="fadeInRight" animationInDuration={1500}>
						เปิดเผยข้อมูล
						<br />" Playstation 5 กับ Controller “Dualsense ”
					</TextTopicOpen>
					<VideoOne
						videoId="silIdzgX2eQ"
						opts={opts}
						onReady={this.videoOnReady}
						onply={this.videoOnReady}
						onStateChange={this.videoStateChange}
					/>;
					<TextCredit>Credit : www.youtube.com/watch?v=silIdzgX2eQ</TextCredit>
					<TextContent>
						ช่วงเวลาในวันที่ 8 เมษายน ที่ผ่านมา ทาง Playstation บริษัทเจ้าของเครื่องเล่นเกมชั้นนำของโลก
						ก็ได้เปิดเผยข้อมูลสำคัญเกี่ยวกับเครื่องเล่นเกม<br />
						ที่กำลังจะทำการวางขายในเวลาอันใกล้นี้นั่นคือ Playstation 5 นั่นเอง
						ซึ่งข้อมูลที่ได้ถูกเผยแพร่ในคราวนี้ เป็นคิวของ ราบละเอียดเกี่ยวกับ Controller<br />
						ตัวใหม่สำหรับ Playstation 5 ในชื่อ “Dualsense” โดยมีการเปิดเผยเกี่ยวกับรูปแบบการพัฒนาต่างๆดังนี้
					</TextContent>
					<TextContent>
						โดยการพัฒนา Dualsense อ้างอิงจากทาง https://blog.us.playstation.com/ ได้มีการเปิดเผยว่า
						การพัฒนาและออกแบบ Dualsense <br />
						มีการรักษาข้อดีของ Dualshock หรือ Controller ของเครื่อง Playstation 4 ไว้ รวมไปถึงการพัฒนา
						Feature ต่างๆที่มีอยู่เดิมให้ดียิ่งขึ้น ไม่ว่าจะทั้งเรื่องของเสียง<br />
						จากตัวของ Controller การปับปรุงปุ่ม L2 และ R2 ให้มีสัมผัสที่ยอดเยี่ยมยิ่งขึ้น เป็นต้น
					</TextContent>
					<br />
					<Swiper {...params}>
						<NewsOnee />
						<NewsTwo />
					</Swiper>
					<TextContent>
						สำหรับรายละเอียดอื่นๆของ Playstation 5
						จะยังมีอัพเดทมาให้อย่างเรื่อยๆจนกว่าจะถึงเวลาจำหน่ายอย่างแน่นอน
						สำหรับผู้ที่สนใจสามารถติดตามข้อมูลข่าวสารของ
						<br />Playstaion 5 ได้ที่ Facebook page Playstation ครับ
					</TextContent>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default NewsOne;
