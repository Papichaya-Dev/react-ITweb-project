import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';

const BackgroundHeader = styled.div`
	background-image: url("https://steamuserimages-a.akamaihd.net/ugc/860610936970034223/78B6110C47A7FB659A3A8DCAD2E1880FB5EED0F6/");
	height: 573px;
	margin-top: -300px;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const BackgroundBody = styled.div`
	background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
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
	font-size: 30px;
	color: black;
	font-weight: 100;
	margin-top: 5px;
	margin-left: 180px;
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
	background-image: url("https://us.123rf.com/450wm/jay72274/jay722740606/jay72274060600017/428214-white-earbuds-isolated-on-black-background.jpg?ver=6");
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
	background-image: url("https://www.wearable-technologies.com/wp-content/uploads/2018/10/Razer-Nari-Ultimate-1.png");
	background-position: center;
	background-size: cover;
	width: 40rem;
	height: 20rem;
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
	background-image: url("https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Magazine/10October/CR-Electronics-Inlinehero-galaxy-pods-vs-airpods-v3-0819");
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
	background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj1Qxb39tr0vf0E-B8GHxw4Vq3gKkns92p2wnMfsKS1kxSgSAj&usqp=CAU");
	width: 30rem;
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

// fire.firestore().collection('Content').add({
// 	title: '“หูฟัง” อาวุธสำคัญสำหรับเหล่าเกมเมอร์',
// 	body:
// 		'เสียงเป็นหนึ่งในปัจจัยที่สำคัญสำหรับการเล่นเกม โดยเฉพาะเกมที่ทิศทางของเสียงมีความสำคัญอย่างเกมแนว Shooting ที่ทิศทางของเสียงสามารถบ่งบอกถึงตำแหน่งของศัตรูให้เรารู้ได้ และอุปกรณ์ที่จะช่วยให้เราสามารถสัมผัสเสียงได้อย่างมีประสิทธิภาพคือ “หูฟัง” นั่นเอง ในวันนี้เราจะมีดูประเภทของหูฟังที่เป็นที่นิยมในการเล่นเกม และข้อดีข้อเสียของหูฟังในแต่ละประเภทครับ1.Earbudsหูฟังประเภท Earbuds คือ 1 ใน หูฟังรูปแบบที่เก่าแก่ที่สุดของโลกตั้งแต่สมัยเทป ซึ่งปัจจุบันยังได้รับความนิยมอย่างต่อเนื่อง ด้วยจุดเด่นที่ความสบายในการสวมใส่ และขนาดที่สามารถพกพาได้สะดวก ซึ่ง Earbuds แต่ Earbuds จะไม่สามารถกันเสียงรบกวนจากภายนอกได้มากนัก จึงทำให้ Earbuds อาจไม่ตอบโจทย์กับเกมเมอร์ที่ต้องการความจริงจังในการฟังเสียงที่แน่นอนและชัดเจน เช่น การเล่นเกม CSGO (Counter Strike: Global Offensive)2. In-ear Monitors1 ในหูฟังที่เป็นที่นิยมมากที่สุดในปัจจุบัน ซึ่งเราสามารถเห็นได้อย่างแพร่หลาย โดนเฉพาะกับสมาร์ทโฟนแบรนด์ชั้นนำ In-Ear Monitors เป็นหูฟังที่มีขนาดเล็ก พกพาสะดวก และจุดเด่นคือเสียงที่มีความชัดเจนมากกว่า Earbuds จากการใช้งานแบบสอดเข้าหู ซึ่งจะเป็นการป้องกันเสียงรบกวนจากภายนอก รวมไปถึงลำโพงที่สามารถส่งผ่านเสียงเข้าสู่เราได้โดยตรง แต่ไม่สามารถใช้ได้นานนัก เพราะอาจเกิดอาการปวดบริเวณหู รวมไปถึงเสี่ยงต่ออาการอักเสบ หากไม่ทำคสามสะอาดให้ดี และใช้งานหูฟังประเภทนี้เป็นเวลานานจนเกินไป3.Headphoneรู้จักกันดีในชื่อ “หูฟังคาดหัว” Headphone เป็นหูฟังขนาดใหญ่ที่สามารถครอบได้ทั้งหู โดยจุดเด่นอยู่ที่ความสามารถในการแสดงผมทิศทางของเสียงได้อย่างละเอียด และสามารถปิดกั้นเสียงจากภายนอกได้ดี แต่อาจไม่สะดวกสำหรับการพกพาจากขนาดที่ค่อนข้างใหญ่ Headphone คือหูฟังที่ได้รับความนิยมอย่างมากในหมู่เกมเมอร์ ด้วยรูปแบบเสียงของ Headphone ที่ขายในท้องตลาดนั้น ถูกออกแบบมาเพื่อใช้สำหรับการเล่นเกมเป็นส่วนใหญ่ และมีราคาที่หลากหลาย',
// 	published: '15 May 2020'
// });

class ArticleOne extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicHead animationIn="fadeInRight" animationInDuration={1500}>
						<TextTopicHeadphone>Headphone</TextTopicHeadphone>
					</TextTopicHead>
					<TextTopicc>“หูฟัง” อาวุธสำคัญสำหรับเหล่าเกมเมอร์</TextTopicc>
					<Imagee />
					<TextTopiccc>
						1.Earbuds หูฟังประเภท Earbuds คือ 1 ใน หูฟังรูปแบบที่เก่าแก่ที่สุดของโลกตั้งแต่สมัยเทป
						ซึ่งปัจจุบันยังได้รับความนิยมอย่างต่อเนื่อง ด้วยจุดเด่นที่<br />ความสบายในการสวมใส่
						และขนาดที่สามารถพกพาได้สะดวก ซึ่ง Earbuds แต่ Earbuds จะไม่สามารถกันเสียงรบกวนจากภายนอกได้มากนัก
						จึงทำให้ Earbuds <br />อาจไม่ตอบโจทย์กับเกมเมอร์ที่ต้องการความจริงจังในการฟังเสียงที่แน่นอนและชัดเจน
						เช่น การเล่นเกม CSGO (Counter Strike: Global Offensive)
					</TextTopiccc>
					<Swiper {...params}>
						<NewsOne onClick={() => this.readNew()} />
						<NewsTwo />
					</Swiper>
					<TextTopiccc>
						2. In-ear Monitors 1 ในหูฟังที่เป็นที่นิยมมากที่สุดในปัจจุบัน ซึ่งเราสามารถเห็นได้อย่างแพร่หลาย
						โดนเฉพาะกับสมาร์ทโฟนแบรนด์ชั้นนำ In-Ear Monitors <br />เป็นหูฟังที่มีขนาดเล็ก พกพาสะดวก
						และจุดเด่นคือเสียงที่มีความชัดเจนมากกว่า Earbuds จากการใช้งานแบบสอดเข้าหู
						ซึ่งจะเป็นการป้องกันเสียงรบกวน<br />จากภายนอก
						รวมไปถึงลำโพงที่สามารถส่งผ่านเสียงเข้าสู่เราได้โดยตรง แต่ไม่สามารถใช้ได้นานนัก
						เพราะอาจเกิดอาการปวดบริเวณหู รวมไปถึงเสี่ยงต่ออาการ<br />อักเสบ หากไม่ทำคสามสะอาดให้ดี
						และใช้งานหูฟังประเภทนี้เป็นเวลานานจนเกินไป
					</TextTopiccc>
					<Imageeee />
					<TextTopiccc>
						3.Headphone รู้จักกันดีในชื่อ “หูฟังคาดหัว” Headphone เป็นหูฟังขนาดใหญ่ที่สามารถครอบได้ทั้งหู
						โดยจุดเด่นอยู่ที่ความสามารถในการแสดงผล<br />ทิศทางของเสียงได้อย่างละเอียด
						และสามารถปิดกั้นเสียงจากภายนอกได้ดี แต่อาจไม่สะดวกสำหรับการพกพาจากขนาดที่ค่อนข้างใหญ่ Headphone
						คือหูฟังที่ได้<br />รับความนิยมอย่างมากในหมู่เกมเมอร์ ด้วยรูปแบบเสียงของ Headphone
						ที่ขายในท้องตลาดนั้น ถูกออกแบบมาเพื่อใช้สำหรับการเล่นเกมเป็นส่วนใหญ่ และ<br />มีราคาที่หลากหลาย
					</TextTopiccc>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ArticleOne;
