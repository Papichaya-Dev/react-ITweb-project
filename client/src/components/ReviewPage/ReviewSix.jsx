import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://notebookspec.com/web/wp-content/uploads/2017/01/kraken71v2_gallery07-v2.jpg");
	height: 710px;
	margin-top: -150px;
	margin-left: -5px;
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
	margin-left: 220px;
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
	margin-left: 400px;
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
	background-image: url("https://itcity.co.th/wp-content/uploads/2018/10/Rzr_KrakenProV2_gallery_6-1500x750.jpg");
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
	background-image: url("https://game.mthai.com/app/uploads/2016/10/Screen-Shot-2559-10-25-at-2.54.51-PM.png");
	width: 50rem;
	height: 28rem;
	margin-top: 13px;
	border-block: 10vh;
`;

const NewsTwo = styled.div`
	background-image: url("https://www.playulti.com/static/thumb/2018/7/10/attach-1533869877953.jpg");
	width: 50rem;
	height: 28rem;
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
class ReviewSix extends Component {
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
						<TextTopicReview> Razer Kraken pro v.2 </TextTopicReview>
						<TextTopicOpenTwo>จบในตัวไปกับ Razer</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						ในปัจจุบันมีหูฟังในรูปแบบ Headset มากมายวางจำหน่ายในท้องตลาด ซึ่งความหลากหลายที่เกิดขึ้นทำ
						ให้มีหูฟัง Headset รูปแบบที่มี Soundcard <br />ในตัวเอง
						ทำให้ไม่จำเป็นต้องมีอุปกรณ์เสริมแยกออกมาอย่าง External soundcard ให้ต้องจ่ายเงินเพิ่ม
						และวันนี้เราอยู่กับหนึ่งในหูฟัง Headset ที่เรียกได้ว่า<br />จบในตัวละคุ้ม ราคาอย่างมากกับ “Razer
						Kraken Pro V.2”
					</TextContent>
					<TextTopicContent> สเปคพื้นฐาน </TextTopicContent>
					<Image />
					<TextContent>
						-Frequency response : 12 Hz - 28 kHz<br />
						-Impedance : 32 Ohm @ 1 kHz<br />
						-Sensitivity (@1 kHz) : 123 dB<br />
						-Input power : 30 mW (Max)<br />
						-Drivers : 50 mm, with Neodymium magnets<br />
						-Inner ear cup diameter : 56 mm / 2.2 in<br />
						สำหรับในด้านของสเปคพื้นฐานนั้นต้องบอกได้ว่าครบตามมาตรฐานของหูฟังในราคาช่วง 3000 บาท ทีเดียว
						อีกทั้งตัวของหูฟังนั้นยังมี driver ของตนเอง<br />ที่มากับ Soundcard ในตัวของ hardware เอง
						ทำให้หูฟังตัว นี้ไม่จำเป็นต้องใช้ soundcard จากบอร์ดหรือ soundcard เสริมเลย
						ทำให้จบในตัวของมันเอง ซึ่งทาง <br />Razer ก็ได้ มีซอร์ฟแวร์ Razer synapse
						ที่จะช่วยปรับเสียงของหูฟังให้ได้ตามแบบที่เราชอบได้เลย ทำให้รองรับผู้ใช้งานแทบ ทุกกลุ่ม
					</TextContent>

					<TextContent>
						ในส่วนของเนื้อเสียงนั้น ตัวลำโพงมีเสียงออกไปทางเบสที่หนักกว่าเสียงอื่นๆ ทำให้เหมาะกับการเล่นเกม
						แนวยิงหรือ FPS อีกทั้งตัวหูฟังยังรองรับ<br />ระบบสียงที่หลากหลาย ทั้ง Stereo 5.1 และ 7.1
						ช่วยให้เราเลือกมิติเสียง ที่เหมาะกับเกมนั้นๆได้ อีกทั้งยังสามารถทำการเพิ่มความหนักของเสียงหรือ
						Bass Boost <br />สำหรับเกมเมอร์สาย ฮาร์ดคอร์ที่ต้องการเสียงที่หนักแน่นเร้าใจอีกด้วย
					</TextContent>
					<br />
					<Swiper {...params}>
						<NewsOne />
						<NewsTwo />
					</Swiper>
					<TextContent>
						สำหรับข้อเสียของหูฟังตัวนี้คือการที่ไม่สามารถใช้รวมกัย External soundcard ได้ทำให้ไม่สามารถ
						ปรับปรุงเสียงของหูฟังได้สำหรับคนที่มี <br />External soundcard ที่คุณภาพดีกว่าที่อยู่ในหูฟัง
						และการแสดงผลของ เสียงที่ไม่ละเอียดมากนักสำหรับใช้ในการฟังเพลงอย่างจริงจัง และตัววัสดุ<br />ที่เป็นยางตรง
						Earmuff ที่ร้อนและ อาจจะทำให้ไม่สบายเมื่อใช้งานเป็นเวลานาน
					</TextContent>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ReviewSix;
