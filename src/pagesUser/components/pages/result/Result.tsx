import React from 'react';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { styled } from '@mui/material';
import { IconArrowRight } from '@/src/assets/icons';
import { useGetPhotoStoreQuery } from '@/src/redux/api/aboutStore';

function SampleNextArrow({ onClick }) {
	return (
		<NextButton onClick={onClick}>
			<IconArrowRight />
		</NextButton>
	);
}

function SamplePrevArrow({ onClick }) {
	return (
		<PrevButton onClick={onClick}>
			<IconArrowRight />
		</PrevButton>
	);
}

export const SliderStore = () => {
	const {data} =  useGetPhotoStoreQuery();
	const settings = {
		centerMode: true,
		infinite: true,
		slidesToShow: 2.33,
		slidesToScroll: 1,
		speed: 500,
		draggable: false,
		prevArrow: <SamplePrevArrow />,
		nextArrow: <SampleNextArrow />
	};

	return (
		<Container>
			<SliderWrapper>
				<SliderStyle {...settings} className="slick-list">
					{data?.map((item) => (
						<Slide key={item._id} className="slick-list">
							<div className="box-img">
								<img src={item.photoSliderStore} alt="select photos" />
							</div>
						</Slide>
					))}
				</SliderStyle>
			</SliderWrapper>
		</Container>
	);
};

const Container = styled('div')`
	text-align: center;
	width: 100%;
	margin: 0px;
`;

const SliderWrapper = styled('div')`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Slide = styled('div')`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.box-img {
		width: 100%;
		height: 530px;

		img {
			filter: brightness(0.3);
			width: 100%;
			height: 100%;
		}
	}
`;

const SliderStyle = styled(Slider)`
	.slick-center {
		filter: brightness(3.1);
	}

	.slick-slide {
		padding: 0 15px;
	}
`;

const NextButton = styled('div')`
	position: absolute;
	top: 50%;
	right: 20rem;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	cursor: pointer;

	z-index: 0;
`;

const PrevButton = styled('div')`
	position: absolute;
	top: 50%;
	left: 20rem;
	transform: translateY(-50%) rotate(180deg);
	display: flex;
	align-items: center;

	z-index: 5;
	cursor: pointer;
`;
