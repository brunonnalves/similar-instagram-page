import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import { SwiperSlide, useSwiper } from 'swiper/react';
import { CarouselBox } from './styles';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselImg = (props: any) => {
    const swiper = useSwiper();

    return (
        <CarouselBox
            slidesPerView={1}
            pagination={true}
            navigation={true}
            modules={[Navigation, Pagination]}
        >
            {props.ids.map((id: number) => (
                <SwiperSlide><img src={`https://picsum.photos/id/${id}/527/325`} /></SwiperSlide>
            ))}
        </CarouselBox>
    );
};

export default CarouselImg;