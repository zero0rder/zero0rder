import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { MobileOverviewContainer, SlideCard, SlideBanner } from '../styled'
import { top5Mobile, repoSrc } from '../../../utils/repos'
import { useFetch } from '../../../hooks/useFetch'
import 'swiper/css'
import 'swiper/css/pagination'

export const MobileOverview = () => {
    const repos = useFetch(`${process.env.REACT_APP_URI}/repos?sort=updated&per_page=10&page=1`)
    if(!repos) return <iconify-icon icon="eos-icons:bubble-loading"></iconify-icon>

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
                        if(top5Mobile.includes(e.id)){
                            return (
                                <SwiperSlide key={i}>
                                    <SlideCard className={`slide-${e.id}`}>
                                        <SlideBanner source={repoSrc.get(e.id) ?? repoSrc.get('default')} />
                                        <div className='slide-body'>
                                            <span>{e.name}</span>
                                            <p>{e.description}</p>
                                            <div className='open-app-btn'>
                                                <a href={e.homepage} target='_blank' rel='noopener noreferrer'><span>Open App</span></a>
                                            </div>
                                            <div>
                                                <a href={e.html_url} target='_blank' rel='noopener noreferrer'><span>More Info</span></a>
                                            </div>
                                        </div>
                                    </SlideCard>
                                </SwiperSlide>
                            )
                        }

                        return null
                    })
                }
            </Swiper>
        </MobileOverviewContainer>
    )
}