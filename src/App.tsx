import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { api } from './api/axios';
import logo from './assets/Logo.svg';
import { CreatAdBanner } from './components/CreatAdBanner';
import { CreatAdModal } from './components/CreatAdModal';

import { GameBanner } from './components/GameBanner';
import { SwiperComponent } from './components/SwiperComponent';

import { SwiperSlide } from 'swiper/react';

type GameType = {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    Ad: number;
  };
};

export function App() {
  const [data, setData] = useState<GameType[]>([]);

  useEffect(() => {
    api.get('/games').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="px-3 max-w-[1344px] mx-auto  flex flex-col items-center my-20">
      <img src={logo} alt="Logo.png" />
      <h1 className="text-center text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="w-full flex items-center justify-center flex-1  mt-16">
        <SwiperComponent>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <GameBanner
                key={item.id}
                adsCount={item._count?.Ad}
                bannerUrl={item.bannerUrl}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>

      <Dialog.Root>
        <CreatAdBanner />
        <CreatAdModal />
      </Dialog.Root>
    </div>
  );
}
