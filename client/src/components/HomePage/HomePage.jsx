import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Button, Container, Row, Col, Spinner, ListGroup, ListGroupItem } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const CustomCardNew = styled(Card)`
margin-left:200px;
width:22rem;
  height:25rem;
  margin-top:-40px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;

`;
const CustomCardArticle = styled(Card)`
margin-left:200px;
width:22rem;
  height:25rem;
  margin-top:-40px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;

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

const BackgroundHome = styled.div`background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);`;
const HeaderHome = styled.div`
	background-color: black;
	opacity: 0.30;
	width: 100%;
	transition: 100ms;
	height: 10vh;
`;
const NewsOne = styled.div`
	background-image: url("https://gpstatic.com/acache/11/55/1/uk/t620x300-14ffb7194cd7805029505bc727e90aee.jpg");
	width: 38.5rem;
	height: 18.5rem;
	margin-top: 25px;
	font-family: 'Kanit', sans-serif;
	border-block: 10vh;
	transition: transform .2s;
	&:hover {
		transform: scale(1.1);
	}
`;
const NewsTwo = styled.div`
	background-image: url("https://medias.spotern.com/spots/w640/10/10338-1532336916.jpg");
	width: 40rem;
	height: 20rem;
	border-block: 10vh;
	margin-top: 13px;
`;
const NewsThree = styled.div`
	background-image: url("https://cdn.lowgif.com/full/dd9c3d8955412e92-10-things-i-hate-about-you-on-tumblr.gif");
	width: 40rem;
	height: 20rem;
	border-block: 10vh;
	margin-top: 13px;
`;
const NewsFour = styled.div`
	background-image: url("https://art-sheep.com/wp-content/uploads/2015/06/UnseenphotosofJohnLennonandYokoOno19802.jpg");
	width: 40rem;
	height: 20rem;
	border-block: 10vh;
	margin-top: 13px;
`;
const TextTop = styled.div`
	color: black;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 50px;
	margin-left: 200px;
	margin-top: 25px;
	opacity: 0.8;
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
class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	readNew() {
		console.log('Fetch');
		this.props.history.push('/ReviewTwo');
	}
	render() {
		return (
			<div className="inner">
				<BackgroundHome>
					<Navbar />
					<TopicText>Daily news !</TopicText>
					<Swiper {...params}>
						<NewsOne onClick={() => this.readNew()}>
							<TextTop />
						</NewsOne>
						<NewsTwo />
						<NewsThree />
						<NewsFour />
					</Swiper>
					<TextNewest>Newest</TextNewest>
					<Swiper {...params}>
						<CustomRow>
							<CustomCol md={4}>
								<CustomCardNew>
									<Card.Img
										variant="top"
										src="https://maxthetrax.com/wp-content/uploads/2016/12/john-and-yoko_byKishinShinoyama.jpg"
									/>
									<Card.Body>
										<Card.Title>Newest</Card.Title>
										<Card.Text>ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ</Card.Text>
										<Button style={{ marginLeft: '95px' }} variant="outline-light">
											กดเพื่ออ่านต่อ
										</Button>
									</Card.Body>
								</CustomCardNew>
							</CustomCol>

							<CustomColTwo md={4}>
								<CustomCardNew>
									<Card.Img
										variant="top"
										src="https://maxthetrax.com/wp-content/uploads/2016/12/john-and-yoko_byKishinShinoyama.jpg"
									/>
									<Card.Body>
										<Card.Title>Newest</Card.Title>
										<Card.Text> ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ</Card.Text>
										<Button style={{ marginLeft: '95px' }} variant="outline-light">
											กดเพื่ออ่านต่อ
										</Button>
									</Card.Body>
								</CustomCardNew>
							</CustomColTwo>

							<CustomColTwo md={4}>
								<CustomCardNew>
									<Card.Img
										variant="top"
										src="https://maxthetrax.com/wp-content/uploads/2016/12/john-and-yoko_byKishinShinoyama.jpg"
									/>
									<Card.Body>
										<Card.Title>Newest</Card.Title>
										<Card.Text>ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ</Card.Text>
										<Button style={{ marginLeft: '95px' }} variant="outline-light">
											กดเพื่ออ่านต่อ
										</Button>
									</Card.Body>
								</CustomCardNew>
							</CustomColTwo>
						</CustomRow>
					</Swiper>

					<TextArticle>Article</TextArticle>
					<CustomRow>
						<CustomCol md={4}>
							<CustomCardArticle>
								<Card.Img
									variant="top"
									src="https://m.media-amazon.com/images/M/MV5BNjMxZGNlZGUtYzM3OS00NjhiLTliZDMtM2Y5ODVjOTgzYjE2XkEyXkFqcGdeQXVyNzIwNDA4NzI@._V1_SX1533_CR0,0,1533,999_AL_.jpg"
								/>
								<Card.Body>
									<Card.Title>Article</Card.Title>
									<Card.Text>ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ</Card.Text>
									<Button style={{ marginLeft: '95px' }} variant="outline-light">
										กดเพื่ออ่านต่อ
									</Button>
								</Card.Body>
							</CustomCardArticle>
						</CustomCol>
						<CustomColTwo md={4}>
							<CustomCardArticle>
								<Card.Img
									variant="top"
									src="https://m.media-amazon.com/images/M/MV5BNjMxZGNlZGUtYzM3OS00NjhiLTliZDMtM2Y5ODVjOTgzYjE2XkEyXkFqcGdeQXVyNzIwNDA4NzI@._V1_SX1533_CR0,0,1533,999_AL_.jpg"
								/>
								<Card.Body>
									<Card.Title>Article</Card.Title>
									<Card.Text> ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ</Card.Text>
									<Button style={{ marginLeft: '95px' }} variant="outline-light">
										กดเพื่ออ่านต่อ
									</Button>
								</Card.Body>
							</CustomCardArticle>
						</CustomColTwo>
						<CustomColTwo md={4}>
							<CustomCardArticle>
								<Card.Img
									variant="top"
									src="https://m.media-amazon.com/images/M/MV5BNjMxZGNlZGUtYzM3OS00NjhiLTliZDMtM2Y5ODVjOTgzYjE2XkEyXkFqcGdeQXVyNzIwNDA4NzI@._V1_SX1533_CR0,0,1533,999_AL_.jpg"
								/>
								<Card.Body>
									<Card.Title>Article</Card.Title>
									<Card.Text> ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ</Card.Text>
									<Button style={{ marginLeft: '95px' }} variant="outline-light">
										กดเพื่ออ่านต่อ
									</Button>
								</Card.Body>
							</CustomCardArticle>
						</CustomColTwo>
					</CustomRow>

					<TextReview>Review</TextReview>
					<CustomCol md={4} />
					<CustomCardReview>
						<Card.Img
							variant="top"
							src="https://petmaya.com/wp-content/uploads/2016/09/nirvana-nevermind-07.jpg"
						/>
						<Card.Body>
							<Card.Title>Article</Card.Title>
							<Card.Text>ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ</Card.Text>
							<Button style={{ marginLeft: '95px' }} variant="outline-dark">
								กดเพื่ออ่านต่อ
							</Button>
						</Card.Body>
					</CustomCardReview>

					<div>
						{/* <Animated animationIn="fadeInLeft" animationInDuration={1000}>
            <News onClick={()=> this.readNew()}></News>
                */}
						<p className="info">{this.state.content}</p>

						{/* </Animated> */}
					</div>
					<Footer />
				</BackgroundHome>
			</div>
		);
	}
}

export default HomePage;
