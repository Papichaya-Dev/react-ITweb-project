import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://www.nintendo.com/content/dam/noa/en_US/games/switch/n/no-time-to-relax-switch/no-time-to-relax-switch-hero.jpg");
	height: 790px;
	margin-top: -213px;
	margin-left: -180px;
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
	margin-left: 270px;
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
	background-image: url("https://steamcdn-a.akamaihd.net/steam/apps/829660/ss_499302055b7af5488d328f44def91c91c63f944a.800x600.jpg");
	background-position: center;
	background-size: cover;
	width: 44rem;
	height: 25rem;
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
	background-image: url("https://steamcdn-a.akamaihd.net/steam/apps/829660/ss_14fee4d22a74596416d81b2750f5ece085fad5d2.600x338.jpg?t=1585239550");
	width: 32rem;
	height: 21rem;
	margin-top: 13px;
	border-block: 10vh;
`;

const NewsTwo = styled.div`
	background-image: url("https://steamcdn-a.akamaihd.net/steam/apps/829660/ss_2254acdb164d2e95393ca391621c8d80bc586142.600x338.jpg?t=1585239550");
	width: 37.5rem;
	height: 21em;
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
class ReviewFour extends Component {
	render() {
		const opts = {
			height: '390',
			width: '640',

			playerVars: {
				//www.youtube.com/watch?v=jqunKh27m4M

				autoplay: 1
			}
		};
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicOpen animationIn="fadeInRightBig" animationInDuration={1500}>
						<TextTopicReview> Razer Hammerhead Duo (In-ear) </TextTopicReview>
						<TextTopicOpenTwo>เกมบอร์ดสุดป่วนจำลองการใช้ชีวิต</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						ในตอนนี้ปฎิเสธไม่ได้เลยว่ามีเกมกระดานมากมายถูกส่งลงระบบดิจิตอลมากมาย ทั้งที่มาจากเกมกระดานจริงๆ
						และเกมกระกานที่กำเนิดมาเพื่อ PC โดยฉพาะ <br />วันนี้เรามาพบกับรีวิวเกม ‘No time to relax’
						เกมกระดานจำลองชีวิตสุดป่วนที่พร้อมให้เราและเพื่อได้แข่งขันกันพัฒนาชีวิตให้สมบูรณ์ที่สุด
					</TextContent>
					<TextTopicContent> Story </TextTopicContent>
					<Image />
					<TextContent>
						ภายในเกมเราจะรับบทเป็นเหล่าบุคคลว่างที่อาศัยภายในอพาทเมนต์เล็กๆในเมืองแห่งหนึ่ง
						และเรา(ร่วมถึงเพื่อน)ถูกไล่ออกจากอพาทเมนต์เพื่อหารายได้<br />ในการดำรงชีวิต
						ภารกิจสุดป่วนเพื่อเติมเต็มชีวิตให้สมบูรณ์จึงเริ่มต้นขึ้น เรียกได้ว่าเกม No time to relax มี
						story ที่เป็นพื้นฐานให้กับ Theme และ<br />คอนเซ็ปของเกม
						ซึ่งอาจจะไม่ได้มีความน่าตื่นตาและน่าสนใจเท่าเกมอื่นๆ
						แต่ก็ถือว่ามีคอนเซ็ปที่ดีตามมารตฐานสำหรับเกมในรูปแบบเดียวกัน
					</TextContent>
					<TextTopicContent> Presentation </TextTopicContent>
					<TextContent>
						ตัวเกม No time to relax มีเซตติ้งพื้นหลังเป็นเมืองที่ตัวละครอาศัยอยู่
						โดยจะมีสถานที่สำคัญต่างๆเป็นจุดให้เราได้เข้าไปมีส่วนร่วมกับตัวเกม และยังเป็น<br />ส่วนสำคัญของเกมการเล่นอีกด้วย
						ทั้งมหาวิทยาลัยที่ให้เราศึกษาหาความรู้เพื่อใช้ในการประกอบอาชีพที่ต้องการ
						และบริษัทหางานที่ให้เราได้เลือกเส้นทางสาย-<br />อาชีพของตัวเองรวมไปถึงสถาที่อีกมากมายให้เราได้เข้าไปเยี่ยมเยียนเพื่อเติมเต็มชีวิตของเรา
						ตัวเกมมาพร้อมกราฟฟิกสไตล์การ์ตูนตะวันตก ซึ่งมีความ<br />สวยงามและมีเอกลักษณ์ในตัวเอง
						เหมาะสำหรับทุกเพศทุกวัย
					</TextContent>
					<br />
					<Swiper {...params}>
						<NewsOne />
						<NewsTwo />
					</Swiper>
					<TextTopicContent> Gameplay </TextTopicContent>
					<TextContent>
						ตัวเกมจะเป็นรูปแบบเกมกระดานแบบ Turn-based strategy ที่เราจะต้องใช้เวลาใน 1
						รอบของเราให้คุ้มค่าที่สุด โดยสามารถเลือกได้อย่างอิสระว่าในรอบนั้นๆ<br />เราจะให้ตัวละครทำอะไรเช่น
						เดินทางไปที่มหาวิทยาลัยเพื่อหาความรู้
						หรือไปที่ทำงานที่เราได้สมัครไว้เพื่อหารายได้ในการหาดำรงชีวิต แม้กระทั่งนอนอยู่บ้านเฉยๆ<br />ทั้งรอบเพื่อฟื้นค่าความเครียด
					</TextContent>
					<TextContent>
						โดยในแต่ละรอบของการเล่น ผู้เล่นจะมีการสุ่มเหตุการณ์ที่เกิดขึ้นในช่วงสุดสัปดาห์
						ซึ่งจะให้ผลที่ดีและร้ายแตกต่างกันอยู่ที่ดวงของผู้เล่นเอง รวมไปถึงยัง<br />มีการสรุปผลของการถูกล็อตโตรี่และหุ้นสำหรับผู้เล่นที่ซื้อสิ่งเหล่านี้อีกด้วย
						โดยจะมีบางรอบที่มีการแจ้งให้ผู้เล่นทราบว่าต้องจ่ายค่าเช่าแล้ว หรือแม้แต่เตือนว่า<br />เสื้อของเราเก่าจนใกล้ขาดเต็มที
						เพื่อให้เราหาซื้อเสื้อใหม่ล่วงหน้า (หากไม่มีเสื้อผ้า จะไม่สามารถทำงานได้)
					</TextContent>
					<br />
					<VideoOne
						videoId="jqunKh27m4M"
						opts={opts}
						onReady={this.videoOnReady}
						onply={this.videoOnReady}
						onStateChange={this.videoStateChange}
					/>;
					<TextCredit>Credit : https://www.youtube.com/watch?v=jqunKh27m4M</TextCredit>
					<TextTopicContent> Conclusion </TextTopicContent>
					<TextContent>
						สำหรับเกม No time to relax เป็นเกมที่มีมาตรฐานที่ดีตรงตามเกมในสไตล์เดียวกัน
						มีกราฟฟิกที่เป็นเอกลักษณ์สวยงาม รวมถึงตัวเกมรองรับการเล่น<br />ทั้ง Online Offline และ Remote
						play บนแพลตฟอร์ม Steam ทำให้เป็นหนึ่งในเกมสายปาร์ตี้ที่ดีอีกเกมหนึ่งในท้องตลาดตอนนี้
						และเหมาะกับการเล่นกับเพื่อนๆ<br />ในช่วงของการกักตัวอีกด้วย
						สำหรับผู้ที่สนใจสามารถซื้อเกมนี้ได้ทาง Steam ในราคา 229 สำหรับตัวธรรมดา และ 262.80 บาท สำหรับ
						Deluxe Edition
					</TextContent>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ReviewFour;
