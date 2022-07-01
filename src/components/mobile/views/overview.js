import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { MobileOverviewContainer, SlideCard, SlideBanner } from '../styled';
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
                                        <SlideBanner source={e.src} />
                                        <div className='slide-body'>
                                            <span>{e.name}</span>
                                            <p>{e.desc}</p>
                                            <div>
                                                <a href={e.link}><span>Open App</span></a>
                                            </div>
                                        </div>
                                    </SlideCard>
                                </SwiperSlide>
                            );

                        return null;
                    })
                }
            </Swiper>
            {/* <MobileSwipeDown>
                <span>Swipe Down</span>
                <span>
                    <span className="iconify" data-icon="ph:caret-down-thin"></span>
                </span>
            </MobileSwipeDown> */}
        </MobileOverviewContainer>
    )
}