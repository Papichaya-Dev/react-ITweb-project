import React, { Component } from 'react';
import  Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://images.wallpapersden.com/image/download/bioshock-infinite-game-characters_13627_1920x1080.jpg");
	height: 750px;
	margin-top: -200px;
	margin-left: -180px;
	/* background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover; */
`;

const BackgroundBody = styled.div`
	background-image: linear-gradient(350deg, #e0c3fc 0%, #8ec5fc 100%);
	background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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

const VideoOne = styled(YouTube)`
	margin-top: 5px;
	margin-left: 450px;
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
	margin-left: 350px;
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
	margin-left: 180px;
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
	background-image: url("https://static1.squarespace.com/static/56d725b88a65e2c48c079abf/56d727fbb4ed3b3236511b37/56de3218fd2119d56bf9e3f0/1468084855592/Bioshock-Infinite.jpg?format=1500w");
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
	background-image: url("https://i.rutab.net/upload/2020/02/bioshockinfinite/99aed00834177d9e412231c3575ac81e.jpg");
	width: 38.5rem;
	height: 22.5rem;
	margin-top: 13px;
	border-block: 10vh;
	transition: transform .2s;
	&:hover {
		transform: scale(1.1);
	}
`;
const NewsTwo = styled.div`
	background-image: url("https://financialpostbusiness.files.wordpress.com/2013/03/bioshock-infinite-2.jpg?w=640");
	width: 38.5rem;
	height: 21.4rem;
	margin-top: 13px;
	border-block: 10vh;
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

class ReviewTwo extends Component {
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
						<TextTopicReview> Bioshock Infinite </TextTopicReview>
						<TextTopicOpenTwo>" ดำดิ่งสู่ความลับของเมืองลอยฟ้าแห่ง Columbia "</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						เกม FPS เป็นหนึ่งในเกมที่ได้รับความนิยมเป็อย่างมากในปัจจุบัน
						รวมถึงได้รับการพัฒนาให้ผสมผสานรูปแบบต่างๆเข้าไป ทั้งระบบแบบเกม RPG หรือ<br />ระบบการวางแผนสุดล้ำ
						สำหรับรีวิวในครั้งนี้ คือเกม FPS จากปี 2013 ที่ผสมผสานความเป็น Action กับ RPG ไว้อย่างลงตัว
						และเนื้อเรื่องที่ซับซ้อนน่าติดตาม<br />กับ Bioshock Infinite
					</TextContent>
					<TextTopicContent> Story </TextTopicContent>
					<Image />
					<TextContent>
						ภายในเกมเราจะเราบทเป็นนักสืบตกอับ Booker Devitt ที่ได้รับว่าจ้างงานให้หาตัวเด็กสาวที่ชื่อว่า
						Elizabeth ภายในเมืองลอยฟ้า Columbia ที่ถูกสร้าง<br />โดยนักบูญผู้เห็นอนาคต Comstock
						และนี่คือจุดเริ่มต้นของการค้นพบความจริงอันดำมืดที่ซ่อนอยู่ในเมืองสวรรค์ลอยฟ้าแห่งนี้
						เรียกได้ว่าตัวเกมมีการเปิดเนื้อเรื่อง<br />ที่น่าสนใจและน่าติดตามอย่างมาก
						โดยเนื้อเรื่องของเกมจะเริ่มต้นโดยที่บอกเล่าเรื่องราวไม่มากนัก และจะมีการขมวดปมตลอดการเล่น
						รวมถึงการเล่าอดีตของ<br />ตัวเอก เพื่อตอบคำถามหลายๆอย่างให้กับผู้เล่นได้เข้าใจที่มาที่ไปมากขึ้น
						และด้วยบทสรุปสุดท้ายของเรื่องราว ก็น่าจะทำให้หลายๆคนต้องตราตรึงใจกันนานเลยทีเดียว
						<br />แต่หากผู้เล่นเป็นคนที่เบื่องาน และไม่ค่อยสนใจเนื้อเรื่อง
						ในส่วนนี้ก็อาจจะทำให้ผู้เล่นต้องรำคาญใจซักหน่อย ด้วยการเล่าเรื่องที่แทรกอยู่แทบจะตลอดทั้งเกม
					</TextContent>
					<TextTopicContent> Presentation </TextTopicContent>
					<VideoOne
						videoId="6OhkjiEM_5I"
						opts={opts}
						onReady={this.videoOnReady}
						onply={this.videoOnReady}
						onStateChange={this.videoStateChange}
					/>;
					<TextCredit>Credit : https://www.youtube.com/watch?v=6OhkjiEM_5I</TextCredit>
					<TextContent>
						ตัวเกมจะถูกนำเสนอภายในตัวเมืองสมมติ Columbia
						มหานครลอยฟ้าขนาดใหญ่ที่จะมีพื้นที่ต่างๆที่เราเข้าไปเดินสำรวจได้ไม่กว่ามากนัก แต่รายละเอียด<br />ในแต่ละฉากถูกแทนที่ด้วยความลึกในการสำรวจ
						เช่นพื้นที่ในตัวเมืองที่สามารถเข้าไปในบ้านของผู้คนเพื่อหาของ
						และบางทีก็อาจจะมีเควสเสริมให้เราได้ทำ เพื่อ<br />เป็นการเติมเต็มเนื้อเรื่องของเกม
						ทั้งนี้ตัวเกมยังยึดถือรูปแบบจากภาคก่อนๆนั่นคือการดำเนินของฉากจะเป็นแบบเส้นตรงให้ผู้เล่นบุกตะลุยตามเนื้อเรื่อง
						ในส่วนของบรรยากาศของเกมทำออกมาได้ดี และสวยงามอย่างมาก ในตัวเมืองมีความมีชีวิตชีวา
						เราจะเห็นได้ว่าผู้คนใช้ชีวิตอย่างไรในเมืองนี้รวมไปถึงสภาพสังคมของเกม
						<br />ยิ่งทำให้การนำเสนอของเกมนี้ดูสมจริงและสวยงามอย่างมาก
					</TextContent>
					<TextTopicContent> Gameplay </TextTopicContent>
					<Swiper {...params}>
						<NewsOne />
						<NewsTwo />
					</Swiper>
					<TextContent>
						ตัวเกม Bioshock Infinite เป็นเกมรูปแบบ FPS หรือเกมยิงบุคคลที่หนึ่ง ที่ผสมผสานการเล่นรูปแบบ RPG
						ไว้อย่างลงตัว โดยผู้เล่นนอกจากจะมีปืน<br />ให้เลือกใช้แล้ว ยังมีพลังพิเศษที่เรียกว่า Plasmids
						ที่จะมอบความสามารถพิเศษให้กับเรา เช่นทำให้ศตรูลอยในอากาศ หรือทำให้ลูกเป็นไฟ แม้กระทั่งพลังไฟฟ้า
						<br />ซึ่งผู้เล่นสามารถเลือกใช้ Plasmids พร้อมกันได้ 2 อย่าง
						ทำให้ผู้เล่นสามารถใช้ความคิดสร้างสรรค์ในการออกแบบการเล่นของตัวเองได้อย่างอิสระ รวมไปถึง<br />ศัตรูภายในเกมที่มีหลากหลายรูปแบบ
						ทำให้การเล่นอยู่รูปแบบเดียวจะทำให้ผู้เล่นรู้สึกว่าเกมยากขึ้น
						ผู้เล่นจึงต้องปรับตัวเข้ากับสถารการณ์อยู่เสมอ ช่วยเสริมความลึก<br />ของเกมการเล่นขึ้นไปอีก
						และผู้เล่นยังสามารถทำการอัพเกรดพลังพิเศษของตนเองให้ดีขึ้น
						และอาวุธปืนภายในเกมให้มีประสิทธิภาพมากขึ้น เรียกได้ว่าเป็นเกม<br />เที่มีแกมการเล่นที่ลึกและหลากหลายมาก
						แต่ด้วยเกมที่จัดว่าต้องใช้ความเร็วที่สูงมาก อาจไม่เหมาะกับผู้เล่นที่มีอาการ Motion Sickness ง่าย
					</TextContent>
					<TextTopicContent> Conclusion </TextTopicContent>
					<TextContent>
						Bioshock Infinite คือภาคต่อที่ยอดเยี่ยมของเกมซีรีย์ Bioshock ทั้งเนื้อหาที่สดใหม่แตกต่างจาก 2
						ภาคแรก เกมการเล่นที่ถูกปรับให้มีความแอคชั่น<br />มากขึ้น แต่ยังรักษาความเป็น RPG
						อันเป็นเอกลักษณ์ได้อย่างดี ทำให้เกมนี้เป็นอีกหนึ่งเกมที่ไม่ควรพลาดสำหรับแฟนเกม FPS และ
						แฟนเกมซีรีย์ Bioshock<br /> ด้วยประการทั้งปวง
					</TextContent>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ReviewTwo;
