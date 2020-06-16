import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';

const BackgroundHeader = styled.div`
	background-image: url("https://thumbs.gfycat.com/MisguidedCircularCowbird-max-1mb.gif");
	height: 650px;
	margin-top: -300px;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const BackgroundBody = styled.div`
	background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
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

const TextTopicHeadphone = styled.div`
	width: 300;
	font-size: 120px;
	font-family: 'Source Sans Pro';
	color: black;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: 280px;
`;
const TextTopicc = styled.div`
	font-family: 'Kanit', sans-serif;
	font-weight: bolder;
	font-size: 60px;
	color: black;
	font-weight: 100;
	margin-top: 350px;
	margin-left: 200px;
`;
const TextTopiccc = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 20px;
	color: black;
	font-weight: 100;
	margin-top: 25px;
	margin-left: 180px;
`;
const Imagee = styled.div`
	background-image: url("https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.15752-9/82986548_1547449925429949_4487863352537831584_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_eui2=AeGrW8HIaczoWtZKP8sTpxcu4BTDEON00zPgFMMQ43TTMwQl3c0YJtBfef0TrrcmChRn4-joAK3-Kt58-m8v_ZGi&_nc_ohc=kghtAlPMdhEAX--QG9i&_nc_ht=scontent.fbkk12-2.fna&oh=f78cd880902081f00fe65cbfc825a18c&oe=5F0AF3F2");
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

const Imageeee = styled.div`
	background-image: url("https://notebookspec.com/web/wp-content/uploads/2016/10/sound-card.jpg");
	background-position: center;
	background-size: cover;
	width: 40rem;
	height: 22rem;
	margin-left: 430px;
	margin-top: 20px;
	transition: transform .2s;
	&:hover {
		transform: scale(1.2);
	}
`;
const params = {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true
	},
	pagination: {
		el: '.swiper-pagination'
	}
};
const NewsOne = styled.div`
	background-image: url("https://images-na.ssl-images-amazon.com/images/I/61nLrOctSWL._AC_SY355_.jpg");
	width: 30rem;
	height: 20rem;
	margin-top: 13px;
	border-block: 10vh;
	transition: transform .2s;
	&:hover {
		transform: scale(1.2);
	}
`;
const NewsTwo = styled.div`
	background-image: url("https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/M/H/153964_1580759090.jpg");
	width: 30rem;
	height: 20rem;

	margin-top: 13px;
`;
const NewsThree = styled.div`
	background-image: url("https://notebookspec.com/web/wp-content/uploads/2016/10/sound-card.jpg");
	width: 55rem;
	height: 20rem;
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
const TextTopicContent = styled.div`
	font-family: 'Kanit', sans-serif;
	font-size: 35px;
	color: #00008b;
	font-weight: 100;
	margin-top: 25px;
	margin-left: 180px;
`;

class ArticleThree extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicHead animationIn="fadeInRight" animationInDuration={1500} />
					<TextTopicc>"Sound Card" คืออะไร และสำคัญขนาดไหน ?</TextTopicc>
					<Imagee />
					<TextTopiccc>
						สำหรับสื่อบันเทิงต่างๆในปัจจุบัน เราไม่อาจปฏิเสธิได้เลยว่า ‘เสียง’
						คือหนึ่งในสื่อที่มีอิทธิพลอย่างมาก ไม่ว่าจะเป็น การเพิ่มความสมจริงภายในเกม
						<br />หรือสร้างบรรยากาศให้กับผู้เสพสื่อนั้นๆเข้าถึงความบันเทิงได้มากขึ้น และในวันนี้ทาง IT
						Disassembly จะขอพาทุกท่านมารู้จักกับอุปกรณ์ที่เป็นกุญแจสำคัญ<br />
						ของการมีพลังเสียงที่ยอดเยี่ยมภายในคอมพิวเตอร์กัน ครับ
					</TextTopiccc>
					<TextTopicContent> Soundcard คืออะไร </TextTopicContent>

					<TextTopiccc>
						Soundcard คืออุปกรณ์ Hardware ภายในเครื่องคอมพิวเตอร์
						เป็นแผงวงจรที่ทำหน้าที่สร้างและจัดการเสียงต่างๆ ที่เกิดขึ้นก่อนจะแสดงผลไปที่ลำโพง<br />หรือหูฟัง
						ดังนั้น Soundcard จึงมีอิธิพลอย่างมากกับคุณภาพเสียงที่แสดงออกมา ยิ่ง คุณภาพของ Soundcard สูง
						คอมพิวเตอร์ยิ่งผลิตเสียงได้ยอดเยี่ยมเท่านั้น
					</TextTopiccc>
					<TextTopicContent> Soundcard มีแบบไหนบ้าง </TextTopicContent>

					<TextTopiccc>
						ตัวของ Soundcard จะถูกแบ่งออกเป็น 2 แบบ หลักๆ ได้แก่<br /> - On board เป็น soundcard
						แบบชิปที่ถูกติดตั้งบน Mainboard <br />- External เป็น Soundcard ที่เชื่อมต่อกับคอมพิสเตอร์ด้วย
						USB โดยปกติแล้ว External Soundcard มักมีประสิทธิภาพที่ดีกว่าแบบ On board <br />เนื่องจากชิปเซ็ตภานใน
						และการทำงาน ที่มีสเกลที่ใหญ่กว่าชิปขนาดเล็ก ทำให้ External Soundcard
						เป็นที่นิยมสำหรับผู้ที่มีความจริงจังในการเสพสื่อบันเทิงบน คอมพิวเตอร์<br />
						<br />และนี้คือข้อมูลเบื้องต้นของ Soundcard โดยเราจะเจาะลึกข้อมูลในส่วนของ External Soundcard
						ในบทความหน้า
					</TextTopiccc>
					<Swiper {...params}>
						<NewsOne />
						<NewsTwo />
						<NewsThree />
					</Swiper>

					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ArticleThree;
