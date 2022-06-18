import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { MobileOverviewContainer } from './../styled';
import 'swiper/css';
import 'swiper/css/pagination';

export const MobileOverview = () => {

    return (
        <MobileOverviewContainer>
            <Swiper
                direction={'vertical'}
                onSlideChange={(slide) => console.log('slide change', slide)}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{clickable: true, }}
                modules={[Pagination]}
                className='mobile-swiper'>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </MobileOverviewContainer>
    )
}