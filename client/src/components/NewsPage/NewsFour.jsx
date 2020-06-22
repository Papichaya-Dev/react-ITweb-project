import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://www.lynxeye.com/wp-content/uploads/2017/08/samsung-1.jpg");
	height: 800px;
	margin-top: -350px;
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
	margin-left: 150px;
`;
const TextTopicOpenTwo = styled(Animated)`
	font-family: 'Kanit', sans-serif;
	font-weight: bolder;
	font-size: 50px;
	color: black;
	font-weight: 100;
	margin-top: 10px;
	margin-left: -80px;
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
	background-image: url("https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.15752-9/101876602_869378646876559_6796938325307455286_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeHBv7Sc1HKLlbUefOmfvir8dvrPpLsx5RN2-s-kuzHlE-hNHSSUCPA7tZSIbxAxUyd1RgZoOtke9YxosN3Pmlbf&_nc_ohc=81L5jbta6v8AX85455Z&_nc_ht=scontent.fbkk12-4.fna&oh=4fdcfd4ef82a534bd576422cc9034231&oe=5F0618B6");
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
class NewsFour extends Component {
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
						<TextTopicOpenTwo>
							หลุด SSD จากทาง Samsung ขนาด 8 TP<br /> พร้อมราคาสุดโหด
						</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						เรียกได้ว่าหลุดมาอย่างกระชั้นชิดกันทีเดียวกับตัวของ Solid state drive หรือ SSD จากทาง Samsung
						ซึ่งเพิ่มดีกรี ความสุดยอดด้วยความจุถึง 8 TB ทีเดียว<br />
						ซึ่งมาพร้อมกับราคาที่ใหญ่ยิ่งเช่นเดียวกัน
					</TextContent>

					<Image />
					<TextContent>
						จากรายงานของทาง PCgamers ได้มีการพบเห็น SSD ของทาง Samsung หลุดมาบนหน้าร้านค้าของเว็บไซต์
						จำหน่ายสินค้าออนไลน์อย่าง Amazon <br />โดยจากสเปคพื้นฐานนั้น SSD ตัวนี้ให้ความจุถึง 8 TB
						เลยทีเดียว ซึ่งชื่อรหัสที่ถูกตั้งไว้ ของรุ่นนี้มีชื่อว่า 870 QVO SATA Samsung SSD
						ซึ่งราคาที่ถูกระบุไว้<br />ก็สูงพอๆกับความจุเช่นกัน เพราะราคาของ SSD ตัวนี้สูง ถึง 900$(ประมาณ
						28179 บาทไทย) เลยทีเดียว และจากข้อมูลที่หลุดมานั้น ได้ระบุว่า SSD ตัวนี้<br />จะวางขายในวันที่
						24 สิงหาคม ภายในปีนี้<br />
						<br />เวลานี้เราต้องมารอดูกันว่าราคาที่แท้จริงจะเป็นอย่างไรในวันจำหน่ายจริงที่จะถึงในเร็วๆนี้
						:-)
					</TextContent>

					<br />
					<BackgroundFooter>
						<TextFooter>Copyright &copy; {new Date().getFullYear()}ITDisassembly</TextFooter>
					</BackgroundFooter>
				</BackgroundBody>
			</div>
		);
	}
}
export default NewsFour;
