import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://i.ytimg.com/vi/98pssleA9tg/maxresdefault.jpg");
	height: 600px;
	margin-top: -25px;
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
	background-image: url("https://images.firstpost.com/wp-content/uploads/2019/10/hyperx-cloud-earbuds-8.jpg");
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
	background-image: url("https://media.kingston.com/hyperx/key-features/hx-keyfeatures-headset-cloud-earbuds-2-sm.jpg");
	width: 32rem;
	height: 21.4rem;
	margin-top: 13px;
	border-block: 10vh;
`;

const NewsTwo = styled.div`
	background-image: url("https://www.idgcdn.com.au/article/images/740x500/dimg/hyperx_cloud_earbuds.png");
	width: 38.5rem;
	height: 22.5em;
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
class ReviewThree extends Component {
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
						<TextTopicReview> HyperX cloud earbuds </TextTopicReview>
						<TextTopicOpenTwo>Earbuds ใส่สบายจากค่าย HyperX</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						ในปัจจุบันที่การเล่นเกมไม่ได้อยู่เพียงแค่บนคอมพิวเตอร์อีกต่อไป
						หากรวมไปถึงการเล่นเกมอย่างจริงจังในระดับอีสปอร์ตบนแพลตฟอร์มมือถือเอง ก็เป็นที่<br />นิยมอย่างมากในยุคปัจจุบัน
						วันนี้ทางเราขอนำเสนอรีวิวหนึ่งในหูฟังจากทาง HyperX ที่ไม่ได้มีดีเพียงแค่เสียง
						แต่รวมไปถึงการสวมใส่ที่ออกแบบมาเพื่อ<br />ความสบายในการสวมใส่อีกด้วย HyperX Cloud Earbuds
					</TextContent>
					<TextTopicContent> สเปคพื้นฐาน </TextTopicContent>
					<Image />
					<TextContent>
						ความถี่: 20Hz-20,000Hz <br />ความต้านทาน: 65 Ω <br />น้ำหนัก: 19 ก. <br />ประเภทและความยาวสาย: 4
						ตอน 1.2 ม.
						<br />การเชื่อมต่อ: แจ็ค 3.5<br />เรียกได้ว่าเป็นสเปคมาตรฐานสำหรับหูฟังราคา 1450 บาท
						และจุดเด่นที่ความยาวที่ออกแบบมาเหมาะสมกับการใช้งานทั้งคอมพิวเตอร์และมือถือ โดยความยาว <br />1.2
						เมตรสามารถใช้ได้กับโทรศัพท์โดยไม่มีปัญหาอะไร
						แต่อาจเป็นปัญหาเล็กน้อยหากผู้ใช้งานใช้กับคอมพิวเตอร์ PC ที่ตั้งไว้ที่พื้นและห่างจากตัวผู้ใช้งาน
					</TextContent>
					{/* <VideoOne
						videoId="6OhkjiEM_5I"
						opts={opts}
						onReady={this.videoOnReady}
						onply={this.videoOnReady}
						onStateChange={this.videoStateChange}
					/>;
					<TextCredit>Credit : https://www.youtube.com/watch?v=6OhkjiEM_5I</TextCredit> */}
					<TextContent>
						สำหรับตัวเชื่อมต่อถูกออกแบบมาแบบแจ็ค 3.5 ทรงตั้งฉาก 90 องศา
						ซึ่งเป็นการออกแบบมาสำหรับการใช้งานเพื่อโทรศัพท์มือถือ และการใช้งานกับ<br />เครื่องเกมพกพาได้อย่างดี
						แต่เป็นที่น่าเสียดายที่ตัวสายไม่มีการแยก line ของไมค์และหูฟังแยกออกจากกัน
						โดยตัวผลิตภัณฑ์มาพร้อมกับกล่องสำหรับเก็บหูฟัง <br />และยางทรง Earbuds อีก 2
						ขนาดสำหรับผู้ใช้งานที่มีทรงของหูขนาดเล็กและใหญ่
						เพื่อให้ผู้ใช้งานสามารถใส่ได้โดยไม่คับเกินไปหรือหลวมเกินไป ตัวยางของหูฟังมา<br />ในทรงของ
						Earbuds ซึ่งทำให้ผู้ใช้ใส่สบายกว่าหูฟังที่มียางแบบ In-ear
						เนื่องจากตัวยางไม่ได้เข้าไปในหูเราแต่แนบอยู่กับช่วงใบหูเราเท่านั้น แต่ด้วยรูปทรงและวัสดุ<br />ของยาง
						เมื่อใช้งานไประยะหนึ่งตัวยางอาจเกินอาการหลวมและหลุดออกจากตัวลำโพงได้ง่าย
						จึงต้องระมัดระวังในการใส่และถิดในระดับหนึ่ง และด้วยยางทรง <br />Earbuds
						ทำให้ตัดเสียงรอบข้างได้น้อยกว่ายางทรง In-ear
						อาจทำให้เกิดการรบกวนจากภายนอกที่มากกว่าหูฟังรุ่นอื่นเล็กน้อย
					</TextContent>
					<br />
					<Swiper {...params}>
						<NewsOne />
						<NewsTwo />
					</Swiper>
					<TextContent>
						สำหรับเนื้อเสียงของหูฟัง จะเน้นหนักไปทางเสียงเบส
						ทำให้ในการเล่นเกมจะสามารถแยกเสียงต่ำได้ชัดเจนเช่นสียงของการเดินต่างๆสำหรับเกม FPS<br />
						แต่ไม่เหมาะกับการฟังเพลงที่จริงจังเพราะในส่วนของลำโพงไม่สามารถแสดงผลของเสียงที่มีรายละเอียดที่ลึกในบางจุดของดนตรีได้อย่างชัดเจน
						อาจทำให้มี<br />อาการเสียงเพี้ยนในบางจุดหากสังเกตการฟังอย่างดี HyperX Cloud Earbuds
						คือหูฟังในราคา 1450 บาทที่ได้ตามมาตรฐานตลาด และด้วยความใส่สบายและ<br />เนื้อเสียงที่เหมาะกับการเล่นเกมนอกสถานที่
						ทำให้หูฟังตัวนี้สามารถเป็นตัวเริ่มต้นของผู้ที่ต้องการความจริงจังกับการเล่นเกมบนโทรศัพท์มือถือหรือเครื่องเกม<br />พกพาได้ดี
					</TextContent>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ReviewThree;
