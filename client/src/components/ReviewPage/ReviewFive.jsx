import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://www.gump.in.th/uploaded_files/images/Razer/hammerhead%20Duo%20-%2006.jpg");
	height: 600px;
	margin-top: -40px;
	margin-left: -80px;
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
	margin-left: 30px;
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
	background-image: url("https://specphone.com/web/wp-content/uploads/2019/05/Review-Razer-Hammerhead-Duo-SpecPhone-023.jpg");
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
	background-image: url("https://www.jib.co.th/img_master/uploads/NYX/052019/17052019/hammerhead_Duo_2.jpg");
	width: 55rem;
	height: 34rem;
	margin-top: 13px;
	border-block: 10vh;
`;

const NewsTwo = styled.div`
	background-image: url("https://www.fpsthailand.com/index/wp-content/uploads/2019/05/fps-Razer-Hammerhead-Duo-11-1024x682.jpg");
	width: 55rem;
	height: 34rem;
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
class ReviewFive extends Component {
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
						<TextTopicReview> Razer Hammerhead Duo (In-ear)</TextTopicReview>
					</TextTopicOpen>
					<TextContent>
						สำหรับปี 2019 นั้นได้มีหูฟัง In-ear ตัวใหม่วางจำหน่ายจากทาง Razer
						ซึ่งมีราคาที่สูสีกับคู่แข่งอย่าง HyperX อย่างมากทั้งในด้านราคาและประสิทธิภาพ <br />แต่ทั้ง 2
						นี้ต่างกันอย่างสิ้นเชิงในด้านประเภทของหูฟัง และนี่ คือรีวิวของ ‘Razer Hammerhead Duo’
					</TextContent>
					<TextTopicContent> สเปคพื้นฐาน </TextTopicContent>
					<Image />
					<TextContent>
						ตัว Hammerhead Duo มาพร้อมกับตัวเชื่อมต่อแบบ analog 3.5 mm. พร้อมมีไมค์ในตัว และตัวสาย
						เป็นแบบสายถักตามแบบฉบับของ Razer <br />โดยตัวผลิตภัณฑ์ได้มียางสำหรับหูฟังทั้งหมด 3
						ขนาดสำหรับการเปลี่ยน ให้เหมาะสมกับหูของแต่ละคน เรียกได้ว่ารูปแบบของผลิตภัณฑ์นั้นทำได้ตาม<br />มาตรฐานของราคา
					</TextContent>

					<TextContent>
						สำหรับจุดเด่นของ Hammerhead Duo ซึ่งเป็นจุดขายตามชื่อนั้นคือการใช้ Driver 2 ตัว ภายในลำโพง
						นั่นคือ Dedicated Dynamic Driver และ <br />Balanced Armature Driver
						ซึ่งเป็นเทคโนโลยีใหม่เรียกว่า Dual Driver ซึ่งจะเป็นการแยกส่วนการควบคุมของเสียงแต่ละระดับ โดย
						Driver หนึ่งจะควบคุม<br />เสียงเบส ในขณะที่อีก ตัวจะควบคุมเสียงกลางและแหลม
						ช่วยให้เสียงที่ออกมามีความชัดเจนมากยิ่งขึ้น
					</TextContent>
					<br />
					<Swiper {...params}>
						<NewsOne />
						<NewsTwo />
					</Swiper>
					<TextContent>
						สำหรับเนื้อเสียงของตัวหูฟังสามารถทำได้ดีสำหรับเสียงเบสจากการใช้ Driver ควบคุมแยกจากเสียงอื่น
						และยังสามารถรักษาคุณภาพสำหรับเสียงกลาง<br />และเสียงแหละได้ดีอยู่
						เนื้อเสียงที่ความชัดเจนและไม่ทับซ้อนกัน ช่วยให้การเล่นเกมมีความชัดเจนอน่างมาก
						ในด้านการฟังเพลงก็สามารถทำได้ดีตามมาตรฐาน<br />สำหรับหูฟังที่ถูก
						ออกแบบมาสำหรับการเล่นเกมโดยเฉพาะ <br />
						<br />Razer Hammerhead Duo เป็นหูฟัง In-ear ที่มีประสทธิภาพสูงและคุ้มกับราคา 1,590 บาท เป็น
						ตัวเริ่มต้นและตัวจบที่ดีสำหรับผู้ที่กำลังต้องการเพิ่ม<br />ความจริงจังกับการเล่นเกม
					</TextContent>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ReviewFive;
