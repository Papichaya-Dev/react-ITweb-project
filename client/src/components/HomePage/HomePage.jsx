import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Button, Container, Row, Col, Spinner, ListGroup, ListGroupItem } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import Search from '../../components/search';

const CustomCardNew = styled(Card)`
margin-left:200px;
  width:22rem;
  height:25rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const CustomCardArticle = styled(Card)`
margin-left:200px;
  width:22rem;
  height:26rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const CustomCardReview = styled(Card)`
margin-left:200px;
width:22rem;
  height:25rem;
  margin-top:-40px;
  font-family: 'Kanit', sans-serif;
  

`;
const CustomCol = styled(Col)`
  margin-bottom:50px;

`;
const CustomColTwo = styled(Col)`
  margin-bottom:50px;
  margin-left:-100px;

`;
const CustomRow = styled(Row)`
margin-top:50px;


`;
const TextCardNew = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
    
 &:hover {
		color: #5226FF;
		cursor: pointer;
	}
`;
const CardImage = styled(Card.Img)`
	height:12.3rem;
`;
const BackgroundHome = styled.div`background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);`;
const HeaderHome = styled.div`
	background-color: black;
	opacity: 0.30;
	width: 100%;
	transition: 100ms;
	height: 10vh;
`;
const NewsOne = styled.div`
	background-image: url("https://thegamershow.com/wp-content/uploads/2019/12/3f4e937e-9111-11e9-ba4e-42010af006b9-808x454.jpg");
	width: 50rem;
	height: 28rem;
	margin-top: 15px;
	font-family: 'Kanit', sans-serif;
	border-block: 10vh;
	transition: transform .2s;
	transition: 300ms;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
		transform: scale(1.03);
	}
`;
const NewsTwo = styled.div`
	background-image: url("https://www.playulti.com/static/thumb/2019/8/8/attach-1567913268083.jpg");
	width: 50rem;
	height: 28rem;
	border-block: 10vh;
	margin-top: 15px;
	font-family: 'Kanit', sans-serif;
	border-block: 10vh;
	transition: transform .2s;
	transition: 300ms;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
		transform: scale(1.03);
	}
`;

const NewsThree = styled.div`
	background-image: url("https://newcastlebeach.org/images/smule-9.jpg");
	width: 45.5rem;
	height: 28rem;
	border-block: 10vh;
	margin-top: 15px;
	font-family: 'Kanit', sans-serif;
	border-block: 10vh;
	transition: transform .2s;
	transition: 300ms;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
		transform: scale(1.03);
	}
`;

const NewsFour = styled.div`
	background-image: url("https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2020/04/Hobby-News-Sony-DualSense-885x400.jpg");
	width: 45.5rem;
	height: 28rem;
	border-block: 10vh;
	margin-top: 15px;
	font-family: 'Kanit', sans-serif;
	border-block: 10vh;
	transition: transform .2s;
	transition: 300ms;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
		transform: scale(1.03);
	}
`;

const TextTopicOne = styled.div`
	margin-top: 350px;
	text-decoration: none;
	color: white;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 26px;
	font-weight: bolder;
	background-color: black;
	height: 30vh;
	opacity: 0.7;
`;
const TextCardNewsTitle = styled(Card.Title)`
    font-family: 'Kanit', sans-serif;
	font-size:19px;
`;
const TextNewest = styled.div`
	color: black;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 50px;
	margin-left: 200px;
	margin-top: 25px;
	opacity: 0.8;
`;
const TextArticle = styled.div`
	color: black;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 50px;
	margin-left: 200px;
	margin-top: -15px;
	opacity: 0.8;
`;
const TextReview = styled.div`
	color: black;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 50px;
	margin-left: 200px;
	margin-top: -20px;
	opacity: 0.8;
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
const TopicText = styled.div`
	margin-left: 600px;
	margin-top: 70px;
	text-decoration: none;
	color: black;
	font-family: 'Source Sans Pro', sans-serif;
	border: 2px solid black;
	border-radius: 4px;
	width: 300px;
	text-align: center;
	justify-content: center;
	align-items: center;

	font-size: 50px;
`;
const FooterHome = styled.div`
	background-color: black;
	width: 100%;
	transition: 100ms;
	height: 15vh;
	font-family: 'IM Fell French Canon SC', serif;
	font-size: 50px;
	color: white;
`;
const TextCardReview = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
    
 &:hover {
		color: #5226FF;
		cursor: pointer;
	}
`;
class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	readNews() {
		console.log('Fetch');
		this.props.history.push('/newsone');
	}
	readNewsTwo() {
		console.log('Fetch');
		this.props.history.push('/newstwo');
	}
	readNewsThree() {
		console.log('Fetch');
		this.props.history.push('/newsthree');
	}
	readNewsFive() {
		console.log('Fetch');
		this.props.history.push('/newsfive');
	}
	readArticle() {
		console.log('Fetch');
		this.props.history.push('/articleone');
	}
	readArticleTwo() {
		console.log('Fetch');
		this.props.history.push('/articletwo');
	}
	readArticleThree() {
		console.log('Fetch');
		this.props.history.push('/articlethree');
	}
	readReview() {
		console.log('Fetch');
		this.props.history.push('/reviewone');
	}
	readReviewTwo() {
		console.log('Fetch');
		this.props.history.push('/reviewtwo');
	}
	readReviewThree() {
		console.log('Fetch');
		this.props.history.push('/reviewthree');
	}
	render() {
		return (
			<div className="inner">
				<BackgroundHome>
					<Navbar />

					<TopicText>Daily news !</TopicText>

					<Swiper {...params}>
						<NewsOne onClick={() => this.readNewsFive()}>
							<TextTopicOne>
								World war 3 เกมยิงสงครามยุคปัจจุบัน<br />เตรียมเปิดตัวใหม่อีกครั้งกับผู้จัดจำหน่ายใหม่
							</TextTopicOne>
						</NewsOne>

						<NewsTwo onClick={() => this.readNewsTwo()}>
							<TextTopicOne>
								Epic game store เตรียมแจกเกมฟรี<br /> ภายในวันที่ 11 มิถุนายนนี้
							</TextTopicOne>
						</NewsTwo>
						<NewsThree onClick={() => this.readArticleTwo()}>
							<TextTopicOne>
								แนะนำ Application "Smule"<br /> แอพสำหรับสายร้องเพลง
							</TextTopicOne>
						</NewsThree>
						<NewsFour onClick={() => this.readNews()}>
							<TextTopicOne>
								เปิดเผยข้อมูล Playstation 5 กับ Controller “Dualsense”<br />
							</TextTopicOne>
						</NewsFour>
					</Swiper>
					<TextNewest>Newest</TextNewest>
					<Swiper {...params}>
						<CustomRow>
							<CustomCol md={4}>
								<CustomCardNew>
									<Card.Img
										onClick={() => this.readNews()}
										variant="top"
										src="https://i.ytimg.com/vi/I0rRrXq0Y4Y/maxresdefault.jpg"
									/>
									<Card.Body onClick={() => this.readNews()}>
										<Card.Title>เปิดเผยข้อมูล Playstation 5 กับ Controller “Dualsense”</Card.Title>
										<TextCardNew>
											ช่วงเวลาในวันที่ 8 เมษายน ที่ผ่านมา ทาง Playstation
											บริษัทเจ้าของเครื่องเล่นเกมชั้นนำของโลก ก็ได้เปิดเผยข้อมูลสำคัญ . . .{' '}
										</TextCardNew>
									</Card.Body>
								</CustomCardNew>
							</CustomCol>

							<CustomColTwo md={4}>
								<CustomCardNew>
									<CardImage
										onClick={() => this.readNewsTwo()}
										variant="top"
										src="https://gameworldobserver.com/wp-content/uploads/2019/12/Epic-Games.jpeg"
									/>
									<Card.Body onClick={() => this.readNewsTwo()}>
										<Card.Title>
											Epic game store เตรียมแจกเกมฟรี ภายในวันที่ 11 มิถุนายนนี้
										</Card.Title>
										<TextCardNew>
											เรียกได้ว่าแทบจะกลายเป็นกิจวัตรประจำสัปดาห์ไปแล้วสำหรับบริษัทอย่าง Epic game
											เจ้าของ engine ชื่อดังอย่าง Unreal engine ที่จะ . . .
										</TextCardNew>
									</Card.Body>
								</CustomCardNew>
							</CustomColTwo>

							<CustomColTwo md={4}>
								<CustomCardNew>
									<CardImage
										onClick={() => this.readNewsThree()}
										variant="top"
										src="https://gameranx.com/wp-content/uploads/2020/01/1d56ce75-b00e-4469-a03b-8e752a868537.jpg"
									/>
									<Card.Body onClick={() => this.readNewsThree()}>
										<Card.Title>
											Ghost recon breakpoint เตรียมเพิ่มเพื่อนร่วมทาง AI ในเดือนกรกฎาคมนี้
										</Card.Title>
										<TextCardNew>
											รอคอยกันมานานกับอัพเดทใหม่ของเกม Ghost Recon Breakpoint ที่กำลังจะปล่อย
											patch ภายในเดือนนี้ พร้อมกับ . . .
										</TextCardNew>
									</Card.Body>
								</CustomCardNew>
							</CustomColTwo>
						</CustomRow>
					</Swiper>

					<TextArticle>Article</TextArticle>
					<Swiper {...params}>
						<CustomRow>
							<CustomCol md={4}>
								<CustomCardArticle>
									<Card.Img
										variant="top"
										onClick={() => this.readArticle()}
										src="https://i.insider.com/5dd2d2f27eece55b137c4a2c?width=1100&format=jpeg&auto=webp"
									/>
									<Card.Body onClick={() => this.readArticle()}>
										<TextCardNewsTitle>“หูฟัง” อาวุธสำคัญสำหรับเหล่าเกมเมอร์"</TextCardNewsTitle>
										<TextCardNew>
											1.Earbuds หูฟังประเภท Earbuds คือ 1 ใน
											หูฟังรูปแบบที่เก่าแก่ที่สุดของโลกตั้งแต่สมัยเทป
											ซึ่งปัจจุบันยังได้รับความนิยมอย่างต่อเนื่อง . . .
										</TextCardNew>
									</Card.Body>
								</CustomCardArticle>
							</CustomCol>

							<CustomColTwo md={4}>
								<CustomCardArticle>
									<CardImage
										variant="top"
										onClick={() => this.readArticleTwo()}
										src="https://newcastlebeach.org/images/smule-9.jpg"
									/>
									<Card.Body onClick={() => this.readAeticleTwo()}>
										<Card.Title>"Smule" แอพสำหรับสายร้องเพลง</Card.Title>
										<TextCardNew>
											สำหรับช่วงของการกักตัว Covid-19 ทำให้หลายต่อหลายคนไม่สามารถออกจากบ้านได้
											ทำให้กิจกรรมหลายๆอย่างนอกสถานที่ถูกระงับไป ซึ่ง . . .
										</TextCardNew>
									</Card.Body>
								</CustomCardArticle>
							</CustomColTwo>

							<CustomColTwo md={4}>
								<CustomCardArticle onClick={() => this.readArticleThree()}>
									<CardImage
										variant="top"
										src="https://mercular.s3.ap-southeast-1.amazonaws.com/upload/contents/2018/09/what-is-a-sound-card-885x400.jpg"
									/>
									<Card.Body>
										<Card.Title>Sound Card คืออะไร และสำคัญขนาดไหน</Card.Title>
										<TextCardNew>
											สำหรับสื่อบันเทิงต่างๆในปัจจุบัน เราไม่อาจปฏิเสธิได้เลยว่า ‘เสียง’
											คือหนึ่งในสื่อที่มีอิทธิพลอย่างมาก ไม่ว่าจะเป็น . . .
										</TextCardNew>
									</Card.Body>
								</CustomCardArticle>
							</CustomColTwo>
						</CustomRow>
					</Swiper>
					<TextReview>Review</TextReview>
					<Swiper {...params}>
						<CustomRow>
							<CustomCol md={4}>
								<CustomCardArticle>
									<Card.Img
										onClick={() => this.readReview()}
										variant="top"
										src="https://steamcdn-a.akamaihd.net/steam/apps/341940/capsule_616x353.jpg?t=1558373076"
									/>
									<Card.Body onClick={() => this.readReview()}>
										<Card.Title>Hatred – ศาลเตี้ยล้างบางผู้คน กับเนื้อหาสุดดาร์ค</Card.Title>
										<TextCardReview>
											วันนี้เรามาพบกับรีวิวเกมที่เป็นหนึ่งในเกมที่ถูกแบนจากหลายๆประเทศ
											ด้วยความรุนแรงและเนื้อหาที่มืดมน
											ของชายผู้บ้าคลั่งออกไล่ฆ่าผู้คนด้วยเหตุผลที่เข้าใจได้อย่าง Hatred . . .
										</TextCardReview>
									</Card.Body>
								</CustomCardArticle>
							</CustomCol>

							<CustomColTwo md={4}>
								<CustomCardArticle>
									<Card.Img
										onClick={() => this.readReviewTwo()}
										variant="top"
										src="https://images.gog-statics.com/35cd661ed60c46beb5a99a744f6e70ab12c0b4055a92028ef0b2460ff09e6962_product_card_v2_mobile_slider_639.jpg"
									/>
									<Card.Body onClick={() => this.readReviewTwo()}>
										<Card.Title>
											Bioshock Infinite – ดำดิ่งสู่ความลับของเมืองลอยฟ้าแห่ง Columbia
										</Card.Title>
										<TextCardReview>
											สำหรับรีวิวในครั้งนี้ คือเกม FPS จากปี 2013 ที่ผสมผสานความเป็น Action กับ
											RPG ไว้อย่างลงตัว และเนื้อเรื่องที่ซับซ้อนน่าติดตามกับ Bioshock Infinite . .
											.
										</TextCardReview>
									</Card.Body>
								</CustomCardArticle>
							</CustomColTwo>

							<CustomColTwo md={4}>
								<CustomCardArticle onClick={() => this.readReviewThree()}>
									<Card.Img
										variant="top"
										src="https://i.ytimg.com/vi/0Wb3qffszQY/maxresdefault.jpg"
									/>
									<Card.Body>
										<Card.Title>HyperX cloud earbuds – Earbuds ใส่สบายจากค่าย HyperX</Card.Title>
										<TextCardReview>
											วันนี้ทางเราขอนำเสนอรีวิวหนึ่งในหูฟังจากทาง HyperX
											ที่ไม่ได้มีดีเพียงแค่เสียง แต่รวมไปถึงการสวมใส่ที่ออกแบบมา . . .
										</TextCardReview>
									</Card.Body>
								</CustomCardArticle>
							</CustomColTwo>
						</CustomRow>
					</Swiper>
					<Footer />
				</BackgroundHome>
			</div>
		);
	}
}

export default HomePage;
