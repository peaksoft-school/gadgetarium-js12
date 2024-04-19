import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import scss from './PhotoSlider.module.scss';

import './slider.scss';

import { useGetPhotoStoreQuery } from '@/src/redux/api/aboutStore';
export const PhotoSlider = () => {
	const { data } = useGetPhotoStoreQuery();
	return (
		<>
			<Swiper
				modules={[Virtual, Navigation, Pagination]}
				slidesPerView={3}
				centeredSlides={false}
				spaceBetween={20}
				pagination={{
					type: 'fraction'
				}}
				navigation={true}
				virtual
				// className={scss.photoSliderContainer}
				style={{ width: '100%', height: '31rem', borderRadius: '5px' }}
			>
				{data?.map((slideContent, index) => (
					<SwiperSlide
						className={scss.photos_slider}
						key={slideContent._id}
						virtualIndex={index}
					>
						<img src={slideContent.photoSliderStore} alt="logo" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
