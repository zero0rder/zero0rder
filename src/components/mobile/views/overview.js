import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { MobileOverviewContainer, SlideCard } from '../styled';
import { repos } from '../../../utils/repos/repoData';

import 'swiper/css';
import 'swiper/css/pagination';

export const MobileOverview = () => {

    return (
        <MobileOverviewContainer>
            <Swiper
                direction={'vertical'}
                onSlideChange={(slide) => console.log('slide change', slide)}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{clickable: true}}
                modules={[Pagination]}
                className='mobile-swiper'>
                {
                    repos.map((e, i) => {
                        if(i < 5)
                            return (
                                <SwiperSlide key={i}>
                                    <SlideCard className={`slide-${e.id}`}>
                                        <header>{e.name}</header>
                                        <div>
                                            <p>{e.desc}</p>
                                            <span>{e.link}</span>
                                        </div>
                                    </SlideCard>
                                </SwiperSlide>
                            );

                        return null;
                    })
                }
            </Swiper>
        </MobileOverviewContainer>
    )
}