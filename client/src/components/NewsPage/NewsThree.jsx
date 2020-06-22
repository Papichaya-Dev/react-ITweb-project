import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';
import Navbar from '../Layout/Navbar';

const BackgroundHeader = styled.div`
	background-image: url("https://www.amd.com/system/files/2019-06/259809-ghost-recon-keyart-1920x600_0.jpg");
	height: 400px;
	width: 100%;
	margin-top: -25px;
	margin-right: 100px;
	margin-left: -5px;
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
	background-image: url("https://obs.line-scdn.net/0hy3uADUQ_JhxIOA3hpiBZS3FuJXN7VDUfLA53HxRWeCgwADEedls-KWRscHthAGFCJglpcmt9eXwwDmAadgk");
	width: 50rem;
	height: 25rem;
	margin-top: 13px;
	border-block: 10vh;
`;
const NewsTwo = styled.div`
	background-image: url(" https://media1.tenor.com/images/316a126915212f9cbdc48661e2b2d51d/tenor.gif?itemid=15153449");
	height: 25rem;
	width: 40rem;
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
class NewsThree extends Component {
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
						Ghost recon breakpoint
						<br />เตรียมเพิ่มเพื่อนร่วมทาง AI ในเดือนกรกฎาคมนี้
					</TextTopicOpen>
					<TextContent>
						รอคอยกันมานานกับอัพเดทใหม่ของเกม Ghost Recon Breakpoint ที่กำลังจะปล่อย patch ภายในเดือนนี้
						พร้อมกับการประกาศอัพเดทใหม่ของเดือนหน้า <br />ซึ่งสิ่งที่น่าสนใจเป็นอย่างมากคือการเพิ่มระบบ AI
						เพื่อนร่วมทีมเข้ามาภายในตัวเกม<br />
						<br />อ้างอิงจาก Blog post ของเกม ได้มีการประกาศอัพเดทในรหัส TU 2.1.0
						โดยจะมีการเพิ่มเติมและแก้ไขต่าง ๆ โดยจะมีการแก้ไขข้อผิดพลาดภายในตัวเกม<br /> การอัพเดทระบบ
						Gunsmith หรือระบบแต่งปืนเพิ่มเติม รวมไปถึงการปรับสมดุลของปืน DMR และที่สำคัญที่สุดคือการเพิ่ม AI
						เพื่อนร่วมทางภายในเกม<br /> รวมไปถึงการอัพเดท content ของระบบ PVP อีกด้วย<br />
						<br />ตัวเกม Ghost Recon Breakpoint วางจำหน่ายบนแพลตฟอร์ม PC (Uplay, Epic game store) PS4 และ
						Xbox ในราคาเริ่มต้นที่ 1600 บาทไทย
					</TextContent>

					<Swiper {...params}>
						<NewsOnee />
						<NewsTwo />
					</Swiper>
					<BackgroundFooter>
						<TextFooter>Copyright &copy; {new Date().getFullYear()}ITDisassembly</TextFooter>
					</BackgroundFooter>
				</BackgroundBody>
			</div>
		);
	}
}
export default NewsThree;
