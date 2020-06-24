import React from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { deletePost, removeLike } from '../../actions/postActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../Layout/Footer';
import { getReview, addLike } from '../../actions/ReviewAction';

const TitleReview = styled.div`
	margin-left: 600px;
	margin-top: 20px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	width: 300px;
	text-align: center;
	justify-content: center;
	font-size: 50px;
	font-weight: bolder;
`;
const TitleReviewTwo = styled.div`
	margin-top: -10px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 23px;
	font-weight: bolder;
`;
const TitleReviewThree = styled.div`
	margin-top: -5px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 23px;
	font-weight: bolder;
`;
const TextCardReview = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
    
 &:hover {
		color: #5226FF;
		cursor: pointer;
	}
`;
const TextCardNewTwo = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #A6009B;
		cursor: pointer;
	}
`;
const CustomCardArticle = styled(Card)`
margin-left:200px;
  width:22rem;
  height:28rem;
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
  height:26rem;
  margin-top:-20px;
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
const TextCardNewThree = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #39C741;
		cursor: pointer;
	}
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

const FooterHome = styled.div`
	background-color: black;
	width: 100%;
	transition: 100ms;
	height: 15vh;
	font-family: 'IM Fell French Canon SC', serif;
	font-size: 50px;
	color: white;
	margin-top: 20px;
`;
const ButtonNext = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:650px;
margin-top:40px;
&:hover {
   
    cursor: pointer;
    color:#A6009B;
    
    }
`;

const ButtonNextTwo = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
   
   cursor: pointer;
   color:#A6009B;
   
   }
`;
const ButtonNextThree = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
   
   cursor: pointer;
   color:#A6009B;
   
   }
`;
const BackgroundBody = styled.div`
	background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);

	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: '100vw';
	height: '100vh';
`;
const CardImage = styled(Card.Img)`
	height:13rem;
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
class ReviewPage extends React.Component {
	readReview() {
		console.log('Fetch');
		this.props.history.push('/review/ReviewOne');
	}
	readReviewTwo() {
		console.log('Fetch');
		this.props.history.push('/review/ReviewTwo');
	}
	readReviewThree() {
		console.log('Fetch');
		this.props.history.push('/review/ReviewThree');
	}
	readReviewFour() {
		console.log('Fetch');
		this.props.history.push('/review/ReviewFour');
	}
	readReviewFive() {
		console.log('Fetch');
		this.props.history.push('/review/ReviewFive');
	}
	readReviewSix() {
		console.log('Fetch');
		this.props.history.push('/review/ReviewSix');
	}
	state = {
		likes: 0
	};

	componentWillMount() {
		this.props.getReview();
	}

	getLikeCount(id) {
		let likesCount;
		if (this.props.review) {
			console.log('have data already');
			console.log(this.props.review);
			this.props.review.map((review) => {
				if (id === review._id) {
					console.log(review.likes.length);
					likesCount = review.likes.length;
				}
			});
		} else {
			console.log("doesn't have data");
		}
		return likesCount;
	}
	render() {
		const { post, auth, showActions } = this.props;
		return (
			<div>
				<BackgroundBody>
					<Navbar />
					<TitleReview>Review</TitleReview>
					<TitleReviewTwo>รวบรวมรีวิวเกี่ยวกับเกม อุปกรณ์คอมพิวเตอร์</TitleReviewTwo>
					<TitleReviewThree>ครบถ้วน รีวิวจริง ไว้ที่นี้เเล้ว</TitleReviewThree>
					<CustomRow>
						<CustomCol md={4}>
							<CustomCardReview>
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
								<button onClick={() => this.props.addLike('5ef36df500ac363f297d21cd')}>
									❤️Likes: {this.getLikeCount('5ef36df500ac363f297d21cd')}{' '}
								</button>
							</CustomCardReview>
						</CustomCol>

						<CustomColTwo md={4}>
							<CustomCardReview>
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
										สำหรับรีวิวในครั้งนี้ คือเกม FPS จากปี 2013 ที่ผสมผสานความเป็น Action กับ RPG
										ไว้อย่างลงตัว และเนื้อเรื่องที่ซับซ้อนน่าติดตามกับ Bioshock Infinite . . .
									</TextCardReview>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef36e4700ac363f297d21ce')}>
									❤️Likes: {this.getLikeCount('5ef36e4700ac363f297d21ce')}{' '}
								</button>
							</CustomCardReview>
						</CustomColTwo>

						<CustomColTwo md={4}>
							<CustomCardReview>
								<Card.Img
									onClick={() => this.readReviewThree()}
									variant="top"
									src="https://i.ytimg.com/vi/0Wb3qffszQY/maxresdefault.jpg"
								/>
								<Card.Body onClick={() => this.readReviewThree()}>
									<Card.Title>HyperX cloud earbuds – Earbuds ใส่สบายจากค่าย HyperX</Card.Title>
									<TextCardReview>
										วันนี้ทางเราขอนำเสนอรีวิวหนึ่งในหูฟังจากทาง HyperX ที่ไม่ได้มีดีเพียงแค่เสียง
										แต่รวมไปถึงการสวมใส่ที่ออกแบบมา . . .
									</TextCardReview>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef36e8000ac363f297d21cf')}>
									❤️Likes: {this.getLikeCount('5ef36e8000ac363f297d21cf')}{' '}
								</button>
							</CustomCardReview>
						</CustomColTwo>
					</CustomRow>
					<CustomRow>
						<CustomCol md={4}>
							<CustomCardReview>
								<Card.Img
									onClick={() => this.readReviewFour()}
									variant="top"
									src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/n/no-time-to-relax-switch/no-time-to-relax-switch-hero.jpg"
								/>
								<Card.Body onClick={() => this.readReviewFour()}>
									<Card.Title>No time to relax เกมบอร์ดสุดป่วนจำลองการใช้ชีวิต</Card.Title>
									<TextCardNewTwo>
										วันนี้เรามาพบกับรีวิวเกม ‘No time to relax’
										เกมกระดานจำลองชีวิตสุดป่วนที่พร้อมให้เราและเพื่อได้แข่งขันกันพัฒนาชีวิตให้สมบูรณ์ที่สุด
										. . .
									</TextCardNewTwo>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef36eb200ac363f297d21d0')}>
									❤️Likes: {this.getLikeCount('5ef36eb200ac363f297d21d0')}{' '}
								</button>
							</CustomCardReview>
						</CustomCol>
						<CustomColTwo md={4}>
							<CustomCardReview>
								<CardImage
									variant="top"
									onClick={() => this.readReviewFive()}
									src="https://www.gump.in.th/uploaded_files/images/Razer/hammerhead%20Duo%20-%2006.jpg"
								/>
								<Card.Body onClick={() => this.readReviewFive()}>
									<Card.Title>Razer Hammerhead Duo (In-ear)</Card.Title>
									<TextCardNewTwo>
										สำหรับปี 2019 นั้นได้มีหูฟัง In-ear ตัวใหม่วางจำหน่ายจากทาง Razer
										ซึ่งมีราคาที่สูสีกับคู่แข่งอย่าง HyperX อย่างมากทั้งในด้านราคาและ . . .
									</TextCardNewTwo>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef36ed800ac363f297d21d1')}>
									❤️Likes: {this.getLikeCount('5ef36ed800ac363f297d21d1')}{' '}
								</button>
							</CustomCardReview>
						</CustomColTwo>
						<CustomColTwo md={4}>
							<CustomCardReview>
								<CardImage
									variant="top"
									onClick={() => this.readReviewSix()}
									src="https://cm.lnwfile.com/05z5ms.jpg"
								/>

								<Card.Body onClick={() => this.readReviewSix()}>
									<Card.Title> Razer Kraken pro v.2 จบในตัวไปกับ Razer</Card.Title>
									<TextCardNewTwo>
										ในปัจจุบันมีหูฟังในรูปแบบ Headset มากมายวางจำหน่ายในท้องตลาด
										ซึ่งความหลากหลายที่เกิดขึ้นทำ ให้มีหูฟัง Headset . . .
									</TextCardNewTwo>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef36f0200ac363f297d21d2')}>
									❤️Likes: {this.getLikeCount('5ef36f0200ac363f297d21d2')}{' '}
								</button>
							</CustomCardReview>
						</CustomColTwo>
					</CustomRow>
					<ButtonNext variant="dark">1</ButtonNext> <ButtonNextTwo variant="dark">2</ButtonNextTwo>{' '}
					<ButtonNextThree variant="dark">3</ButtonNextThree>{' '}
					<BackgroundFooter>
						<TextFooter>Copyright &copy; {new Date().getFullYear()}ITDisassembly</TextFooter>
					</BackgroundFooter>
				</BackgroundBody>
			</div>
		);
	}
}

ReviewPage.defaultProps = {
	showActions: true
};

ReviewPage.propTypes = {
	deletePost: PropTypes.func.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	getReview: PropTypes.func.isRequired,
	review: PropTypes.array,
	addLike: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	review: state.review.review_list
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike, getReview, addLike })(ReviewPage);
