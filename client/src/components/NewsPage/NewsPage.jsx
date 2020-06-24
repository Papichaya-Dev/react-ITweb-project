import React from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { deletePost, removeLike } from '../../actions/postActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../Layout/Footer';
import { getNews, addLike } from '../../actions/NewsAction';

const TitleNew = styled.div`
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
const TitleNewTwo = styled.div`
	margin-top: -10px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 23px;
	font-weight: bolder;
`;
const TitleNewThree = styled.div`
	margin-top: -5px;
	text-decoration: none;
	color: black;
	font-family: 'Kanit', sans-serif;
	text-align: center;
	justify-content: center;
	font-size: 23px;
	font-weight: bolder;
`;
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
const TextCardNew = styled(Card.Text)`
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

const CardImage = styled(Card.Img)`
	height:12.3rem;
`;

const CustomCardReview = styled(Card)`
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
	font-size: 30px;
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
margin-top:-20px;
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
margin-top:-20px;
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
margin-top:-20px;
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
class NewsPage extends React.Component {
	readNews() {
		console.log('Fetch');
		this.props.history.push('/news/NewsOne');
	}
	readNewsTwo() {
		console.log('Fetch');
		this.props.history.push('/news/NewsTwo');
	}
	readNewsThree() {
		console.log('Fetch');
		this.props.history.push('/news/NewsThree');
	}
	readNewsFour() {
		console.log('Fetch');
		this.props.history.push('/news/NewsFour');
	}
	readNewsFive() {
		console.log('Fetch');
		this.props.history.push('/news/NewsFive');
	}

	state = {
		likes: 0
	};

	componentWillMount() {
		this.props.getNews();
	}

	getLikeCount(id) {
		let likesCount;
		if (this.props.news) {
			console.log('have data already');
			console.log(this.props.news);
			this.props.news.map((news) => {
				if (id === news._id) {
					console.log(news.likes.length);
					likesCount = news.likes.length;
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
					<TitleNew>News</TitleNew>
					<TitleNewTwo>รวบรวมข่าวสารเกี่ยวกับอุปกรณ์คอมพิวเตอร์</TitleNewTwo>
					<TitleNewThree>ที่น่าสนใจทั้งหมดไว้ที่นี้แล้ว</TitleNewThree>
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
								<button onClick={() => this.props.addLike('5ef3724e00ac363f297d21d3')}>
									❤️Likes: {this.getLikeCount('5ef3724e00ac363f297d21d3')}{' '}
								</button>
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
									<Card.Title>Epic game store เตรียมแจกเกมฟรี ภายในวันที่ 11 มิถุนายนนี้</Card.Title>
									<TextCardNew>
										เรียกได้ว่าแทบจะกลายเป็นกิจวัตรประจำสัปดาห์ไปแล้วสำหรับบริษัทอย่าง Epic game
										เจ้าของ engine ชื่อดังอย่าง Unreal engine ที่จะ . . .
									</TextCardNew>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef372f800ac363f297d21d4')}>
									❤️Likes: {this.getLikeCount('5ef372f800ac363f297d21d4')} {' '}
								</button>
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
										รอคอยกันมานานกับอัพเดทใหม่ของเกม Ghost Recon Breakpoint ที่กำลังจะปล่อย patch
										ภายในเดือนนี้ พร้อมกับ . . .
									</TextCardNew>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef3732a00ac363f297d21d5')}>
									❤️Likes: {this.getLikeCount('5ef3732a00ac363f297d21d5')} {' '}
								</button>
							</CustomCardNew>
						</CustomColTwo>
					</CustomRow>
					<CustomRow>
						<CustomCol md={4}>
							<CustomCardArticle>
								<Card.Img
									onClick={() => this.readNewsFour()}
									variant="top"
									src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.15752-9/101876602_869378646876559_6796938325307455286_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeHBv7Sc1HKLlbUefOmfvir8dvrPpLsx5RN2-s-kuzHlE-hNHSSUCPA7tZSIbxAxUyd1RgZoOtke9YxosN3Pmlbf&_nc_ohc=81L5jbta6v8AX85455Z&_nc_ht=scontent.fbkk12-4.fna&oh=4fdcfd4ef82a534bd576422cc9034231&oe=5F0618B6"
								/>
								<Card.Body onClick={() => this.readNewsFour()}>
									<Card.Title>หลุด SSD จากทาง Samsung ขนาด 8 TP พร้อมราคาสุดโหด</Card.Title>
									<TextCardNewTwo>
										เรียกได้ว่าหลุดมาอย่างกระชั้นชิดกันทีเดียวกับตัวของ Solid state drive หรือ SSD
										จากทาง Samsung ซึ่งเพิ่มดีกรี . . .
									</TextCardNewTwo>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef3736b00ac363f297d21d7')}>
									❤️Likes: {this.getLikeCount('5ef3736b00ac363f297d21d7')} {' '}
								</button>
							</CustomCardArticle>
						</CustomCol>
						<CustomColTwo md={4}>
							<CustomCardArticle>
								<Card.Img
									onClick={() => this.readNewsFive()}
									variant="top"
									src="https://i.ytimg.com/vi/hTawLr62caw/maxresdefault.jpg"
								/>
								<Card.Body onClick={() => this.readNewsFive()}>
									<Card.Title>
										World war 3 เกมยิงสงครามยุคปัจจุบันเตรียมเปิดตัวใหม่อีกครั้งกับผู้จัดจำหน่ายใหม่
									</Card.Title>
									<TextCardNewTwo>
										เรียกได้ว่าเป็นหนึ่งในเกมที่เปิดตัวได้อย่างยิ่งใหญ่และพบกับปัญหาจนสุดท้ายก็ดับไปอย่าง
										World war 3 เกมยิง แนวสงครามขนาดใหญ่ . . .
									</TextCardNewTwo>
								</Card.Body>
								<button onClick={() => this.props.addLike('5ef373a500ac363f297d21d8')}>
									❤️Likes: {this.getLikeCount('5ef373a500ac363f297d21d8')} {' '}
								</button>
							</CustomCardArticle>
						</CustomColTwo>
					</CustomRow>
					<ButtonNext variant="dark">1</ButtonNext> <ButtonNextTwo variant="dark">2</ButtonNextTwo>{' '}
					<ButtonNextThree variant="dark">3</ButtonNextThree>
					<BackgroundFooter>
						<TextFooter>Copyright &copy; {new Date().getFullYear()}ITDisassembly</TextFooter>
					</BackgroundFooter>
				</BackgroundBody>
			</div>
		);
	}
}

NewsPage.defaultProps = {
	showActions: true
};

NewsPage.propTypes = {
	deletePost: PropTypes.func.isRequired,
	addLike: PropTypes.func.isRequired,
	removeLike: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	getNews: PropTypes.func.isRequired,
	news: PropTypes.array,
	addLike: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	news: state.news.news_list
});
export default connect(mapStateToProps, { deletePost, addLike, removeLike, getNews, addLike })(NewsPage);
