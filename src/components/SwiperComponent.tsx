import { A11y, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

import './styles.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function SwiperComponent({ children }: any) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
      spaceBetween={0}
      slidesPerView={6}
      mousewheel={true}
    >
      {children}
    </Swiper>
  );
}
