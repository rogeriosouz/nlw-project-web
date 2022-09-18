import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreatAdBanner() {
  return (
    <div className="w-full pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div
        className=" bg-[#2A2634] px-8 sm:py-8 py-3 self-stretch flex sm:flex-row  flex-col gap-5 justify-between items-center
        "
      >
        <div className="text-center">
          <strong className=" sm:mb-0 mb-2  text-2xl text-white font-bold block">
            Não encontrou seu duo?
          </strong>
          <span className="text-base text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="justify-center sm:w-48 h-12 w-full rounded-md bg-violet-500 hover:bg-violet-600 transition-colors text-white text-base font-medium flex items-center gap-3">
          <MagnifyingGlassPlus fontSize={24} color={'#fff'} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
