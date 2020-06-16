import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';

const BackgroundHeader = styled.div`
	background-image: url("https://66.media.tumblr.com/77f7bf80c6ec3be2cb81351a4b178dc4/tumblr_olqufuXnlU1tdhimpo1_400.gifv");
	height: 450px;
	margin-top: -25px;
	margin-bottom: 100px;
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

const TextTopic = styled.div`
	width: 300;
	font-size: 120px;
	font-family: 'Source Sans Pro';
	color: black;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: 280px;
	margin-left: 50px;
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
	background-image: url("https://lh3.googleusercontent.com/_0ZcxLsBJpvhl_DnbhzuojHRFzTpKs3uumLw8Dqq9aZU5X9-HhjnVqP81HT7Di9D4HA");
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
	background-image: url("https://freesoftforpc.com/wp-content/uploads/2020/03/Smule-App-For-Windows.png");
	background-position: center;
	background-size: cover;
	width: 50rem;
	height: 27rem;
	margin-left: 400px;
	margin-top: 20px;
	}
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
const NewsOne = styled.div`
	background-image: url("https://assets.entrepreneur.com/images/misc/1552318025_karaoke-app-for-iphone.jpg");
	width: 50rem;
	height: 25rem;
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

class ArticleTwo extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicHead animationIn="fadeInRight" animationInDuration={1500}>
						<TextTopic>Smule</TextTopic>
					</TextTopicHead>
					<TextTopicc>แนะนำแอพพลิเคชั่น "smule" แอพสำหรับสายร้องเพลง</TextTopicc>
					<Imagee />
					<TextTopiccc>
						สำหรับช่วงของการกักตัว Covid-19 ทำให้หลายต่อหลายคนไม่สามารถออกจากบ้านได้
						ทำให้กิจกรรมหลายๆอย่างนอกสถานที่ถูกระงับไป ซึ่ง<br />หนึ่งในกิจกรรมโปรดของแอดมินคือการ
						‘ร้องเพลงคาราโอเกะ’ นั่นเอง และ แอพพลิเคชั่นที่พอจะช่วยบะเทาความอย่างของแอดมินได้คือ Smule
						<br />แอพพลิเคชั่น Smule เป็นแอพพลิเคชั่นสำหรับการร้องเพลงคาราโอเกะโดยเฉพาะ
						โดยตัวแอพพลิเคชั่นนี้อยู่ในทั้งแพลตฟอร์ม IOS และ Android ซึ่งภายใน<br />ตัวแอพพลิเคชั่นจะมี song
						book ซึ่งก็คือเพลงที่เราสามารถทำการร้องได้ โดย song book
						นี้ถูกจัดทำขึ้นทั้งจากทางผู้ใช้งานแอพพลิเคชั่นและจากทาง Official
					</TextTopiccc>
					<Swiper {...params}>
						<NewsOne onClick={() => this.readNew()} />
					</Swiper>
					<TextTopiccc>
						ภายในแอพพลิเคชั่นสามารถเลือกการร้องได้ว่าจะเข้าร่วมกับผู้ใช้งานคนอื่นๆ หรือเปิดการร้องแบบคู่หรือ
						Duet ด้วยตัวเอง ไปจนถึงการร้องแบบ<br />เดี่ยวหรือเป็นกลุ่ม
						โดยตัวแอพพลิเคชั่นจะอนุญาติให้ผู้ใช้งานใช้เพียงแค่การเข้าร่วมกับผู้อื่นเท่านั้นหากไม่ใช่สมาชิกรายเดือนของแอพพลิเคชั่น<br />
						ภายในตัวแอพพลิเคชั่นเราสามารถดูการเคลื่อนไหวต่างๆของเพื่อนที่เราติดตามได้
						รวมไปถึงเราจะได้คำเชิญร่วมการร้องแบบคู่หรือกลุ่มจากคนที่เรา<br />ติดตามอีกด้วย
						ทำให้บางครั้งประสบการณ์การร้องเพลงต่างๆอาจไม่เหมือนเดิมเพราะเปลี่ยนเพื่อนร่วมร้องเพลง
						โดยตัวแอพยังมีลูกเล่นอีกมากมาย<br />ทั้งการไลฟ์ และการส่งของขวัญ
					</TextTopiccc>
					<TextTopiccc>สำหรับผู้ที่สนใจสามารถเข้าไปดาวน์โหลดได้ที่ google store และ apple store</TextTopiccc>
					<Imageeee />
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ArticleTwo;
