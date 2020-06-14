import React, { Component } from 'react';
import Navbar from '../Layout/Navbar';
import styled from 'styled-components';
import { Animated } from 'react-animated-css';
import Swiper from 'react-id-swiper';
import YouTube from 'react-youtube';

const BackgroundHeader = styled.div`
	background-image: url("https://steamcdn-a.akamaihd.net/steam/apps/341940/capsule_616x353.jpg?t=1558373076");
	height: 573px;
	margin-top: -315px;
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
	font-size: 120px;
	font-family: 'Source Sans Pro';
	color: black;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: -10px;
	margin-left: 420px;
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
const TextTopicOpenTwo = styled(Animated)`
	font-family: 'Kanit', sans-serif;
	font-weight: bolder;
	font-size: 50px;
	color: black;
	font-weight: 100;
	margin-top: -30px;
	margin-left: 180px;
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
	background-image: url("https://scummpub.files.wordpress.com/2018/10/hatred-review-pc-482788-17-e1540843849883.jpg");
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
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
};

const NewsOne = styled.div`
	background-image: url("https://i2.wp.com/www.txclan.de/wp-content/uploads/2020/04/Hatred-Screenshot-890x520-min-700x409-1.jpg?resize=700%2C409&ssl=1");
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
	background-image: url("https://s.isanook.com/ga/0/ui/191/955190/06_1413534701.jpg");
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

class ReviewOne extends Component {
	render() {
		const opts = {
			height: '390',
			width: '640',

			playerVars: {
				//www.youtube.com/watch?v=V18SS6PZc6w

				autoplay: 1
			}
		};
		return (
			<div>
				<Navbar />
				<BackgroundBody>
					<BackgroundHeader />
					<TextTopicOpen animationIn="fadeInRightBig" animationInDuration={1500}>
						<TextTopicReview> Hatred </TextTopicReview>
						<TextTopicOpenTwo>" ศาลเตี้ยล้างบางผู้คน กับเนื้อหาสุดดาร์ค "</TextTopicOpenTwo>
					</TextTopicOpen>
					<TextContent>
						เหรียญมี 2 ด้านเสมอ เช่นเดีวกันกับอุตสาหกรรมเกม ที่มีทั้งเกมที่มีเนื้อหาที่สร้างสรรค์
						และเกมที่มีเนื้อหาที่รุนแรงอย่างไร้เหตุผลวันนี้เรามาพบกับรีวิวเกม<br />ที่เป็นหนึ่งในเกมที่ถูกแบนจากหลายๆประเทศ
						ด้วยความรุนแรงและเนื้อหาที่มืดมน ของชายผู้บ้าคลั่งออกไล่ฆ่าผู้คน ด้วยเหตุผลที่เข้าใจได้อย่าง
						Hatred
					</TextContent>
					<TextTopicContent> Story </TextTopicContent>
					<VideoOne
						videoId="V18SS6PZc6w"
						opts={opts}
						onReady={this.videoOnReady}
						onply={this.videoOnReady}
						onStateChange={this.videoStateChange}
					/>;
					<TextCredit>Credit : https://www.youtube.com/watch?v=V18SS6PZc6w</TextCredit>
					<TextContent>
						ภายในเกมเราจะรับบทเป็นชายร่างใหญ่ผู้มาพร้อมความเกียจชังและความบ้าคลั่งอย่างเต็มเปี่ยมและพร้อมที่จะฆ่าทุกๆคนที่เข้ามาเห็นไม่ว่าใครก็ตาม<br />
						เนื้อเรื่องภายในเกมแทบไม่บอกอะไรกับผู้เล่นเลย โดยเราจะได้รับรู้เพียงแค่ทัศนคติของตัวเอกเท่านั้น
						รวมถึงทำความเข้าใจกับบุคลิกและเป้าหมายของตัวเอก
						<br />ผ่านบทสนทนาที่พูดระหว่างทำการสังหารผู้คนบนท้องถนน
						เนื้อเรื่องภายในเกมจึงเป็เพียงการติดตามชีวิตและภารกิจของชายคลั่งเท่านั้น
					</TextContent>
					<TextTopicContent> Presentation </TextTopicContent>
					<Swiper {...params}>
						<NewsOne onClick={() => this.readNew()} />
						<NewsTwo />
					</Swiper>
					<TextContent>
						ตัวเกม Hatred นำเสนอภาพบรรยากาศที่เป็นสีขาวดำตลอดทั้งเกม
						ให้ความรู้สึกที่มืดมนและหดหู่ในเวลาเดียวกัน แต่ตัวเกมจะมีสีสันต่างๆเฉพาะในสิ่งที่<br />สื่อถึงความรุนแรงเพียงเท่านั้น
						เช่นไฟที่กำลังลุกไหม้อาคารหรือรถ หรือสีแดงสดของเลือดจากผู้คน
						เมื่อผสมรวมเข้ากับฉากของเกมที่เป็นสีขาวดำแล้วยิ่งเสริม<br />ความรุนแรงของเกมให้เด่นชัดยิ่งขึ้นอย่างมาก
						ฉากของตัวเกมจะเป็นรูปแบบพื้นที่เปิดให้เราสามารถสำรวจและเข้าไปฆ่าล้างบางได้ทั้งฉาก
						โดยจะมีเป้าหมายหลักใน<br />แต่ละฉากที่แตกต่างกันออกไป
						เมื่อผู้เล่นสามารถทำเป้าหมายหลักได้ครบตัวเกมจะตัดเข้าสู่ฉากต่อไปในรูปของด่านที่ต่อกันจนถึงด่านสุดท้าย
						แม้บางด่านจะมี<br />ความเป็นเส้นตรงจนเกินไปอยู่บ้าง แต่ด้วยด่านที่มีความหลากหลาย
						ก็ทำให้ผู้เล่นไม่รู้สึกเบื่อกับเกม แต่หากผู้เล่นต้องการความหลากหลายของการนำเสนอ<br />เกมนี้อาจไม่ตอบโจทย์เท่าไหร่นัก
						เพราะตัวเกมมีเพียงการฆ่าและผ่านด่านไปเรื่อยๆเท่านั้น แม้จะมีเป้าหมายเสริมให้ผู้เล่นเข้าไปทำ
						แต่ก็ยังเป็นคอนเซ็ปเดิมนั่นคือ<br />การเดินหน้าฆ่าใหม่หมดอยู่ดี
					</TextContent>
					<TextTopicContent> Gameplay </TextTopicContent>
					<TextContent>
						เกมการเล่นของ Hatred มีความเรียบง่ายอย่างมาก โดยตัวเกมมีมุมมองการบังคับแบบ Isometric
						หรือมุมมองด้านบนตามสไตล์เกมยิงยุคเก่าอย่าง<br /> Alien shooter series โดยตัวเกมจัดอยู่ในหมวด
						shooting โดยใช้การเล็งด้วย cursor ของเม้าส์ และโดยเกมมีระบบประหารเมื่อเหยื่ออยู่ในสภาพที่ใกล้ตาย
						<br />ผู้เล่าสามารถเข้าไปใกล้เพื่อกดใช้ท่าสังหารได้ โดยจะได้รับพลังชีวิตคืนเป็นโบนัส
						ตัวเกมมีรูปแบบเดินหน้ายิงผ่านด่าน โดยจะมีเป้าหมายหลักเป็นสถาที่สำคัญ<br />ที่ผู้เล่นต้องเข้าไปถล่มให้สิ้นซาก
						และเป้าหมายรองที่จะได้เป็นคะแนนพิเศษในช่วงท้ายของด่าน แม้ว่าจะมีเป้าหมายให้ทำหลายจุดภายในเกม
						แต่ก็ยังคงรูปแบบเดิม<br />นั่นคือการบุกเข้าไปในสถาที่เป้าหมาย และสังหารทุกคนในนั้นอยู่ดี
						ซึ่งหากใครที่มองหาความหลากหลายในเกมการเล่น เกมนี้จะไม่เหมาะกับท่านเป็นอย่างยิ่ง
					</TextContent>
					<Image />
					<TextTopicContent> Conclusion </TextTopicContent>
					<TextContent>
						Bioshock Infinite คือภาคต่อที่ยอดเยี่ยมของเกมซีรีย์ Bioshock ทั้งเนื้อหาที่สดใหม่แตกต่างจาก 2
						ภาคแรก เกมการเล่นที่ถูกปรับให้มีความแอคชั่น<br />มากขึ้น แต่ยังรักษาความเป็น RPG
						อันเป็นเอกลักษณ์ได้อย่างดี ทำให้เกมนี้เป็นอีกหนึ่งเกมที่ไม่ควรพลาดสำหรับแฟนเกม FPS และ
						แฟนเกมซีรีย์ Bioshock<br /> ด้วยประการทั้งปวง
					</TextContent>
					<FooterHome>ITDismember</FooterHome>
				</BackgroundBody>
			</div>
		);
	}
}
export default ReviewOne;
