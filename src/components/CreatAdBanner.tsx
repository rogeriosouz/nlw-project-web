import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

export function CreatAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div
        className="bg-[#2A2634] px-8 py-8 self-stretch flex justify-between items-center
        "
      >
        <div>
          <strong className="text-2xl text-white font-bold block">
            Não encontrou seu duo?
          </strong>
          <span className="text-base text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="px-4 py-3 rounded-md bg-violet-500 hover:bg-violet-600 transition-colors text-white text-base font-medium flex items-center gap-3">
          <MagnifyingGlassPlus fontSize={24} color={'#fff'} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
