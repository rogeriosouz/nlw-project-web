import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { yupResolver } from '@hookform/resolvers/yup';
import { CaretDown, Check, GameController } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { api } from '../api/axios';
import { Input } from './Form/input';

type GameType = {
  id: string;
  title: string;
};

type Inputs = {
  name: string;
  discord: string;
  yearsPlaying: string;
  hoursStart: string;
  hourEnd: string;
};

export function CreatAdModal() {
  const [data, setData] = useState<GameType[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [voiceChannel, setVoiceChannel] = useState(false);
  const [selectGame, setSelectGame] = useState('');

  const schema = yup
    .object({
      name: yup.string().required(),
      discord: yup.string().required(),
      yearsPlaying: yup.number().required(),
      hoursStart: yup.string().required(),
      hourEnd: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  function submit(data: Inputs) {
    console.log(data);
    console.log(voiceChannel);
    console.log(selectGame);
  }

  useEffect(() => {
    api.get('/games').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
        <Dialog.Title className="text-2xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleSubmit(submit)} className="mt-8">
          <div className="w-full flex flex-col gap-2 mb-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game?
            </label>

            <Select.Root onValueChange={setSelectGame}>
              <Select.Trigger className="outline-none text-zinc-500 font-normal text-[14px] bg-zinc-900 w-full rounded py-3 px-4 flex items-center justify-between">
                <Select.Value
                  className="font-normal text-[14px]"
                  placeholder="Selecione o game que deseja jogar"
                />
                <Select.Icon>
                  <CaretDown fontSize={24} />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content>
                  <Select.ScrollUpButton />
                  <Select.Viewport>
                    <Select.Group className="w-full bg-white rounded">
                      <Select.Label className="pl-8 py-2 text-[14px] text-zinc-400">
                        Games
                      </Select.Label>

                      {data.map((item) => (
                        <Select.Item
                          key={item.id}
                          value={item.id}
                          className="flex items-center gap-2 w-full py-2 px-2 hover:bg-[#2A2634] hover:text-white transition-colors"
                        >
                          <div className="relative pl-6">
                            <Select.ItemIndicator className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-full left-1">
                              <Check className="w-5 h-5 text-emerald-500" />
                            </Select.ItemIndicator>
                            <Select.ItemText>{item.title}</Select.ItemText>
                          </div>
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton />
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="w-full flex flex-col gap-2 mb-2">
            <label className="font-semibold" htmlFor="name">
              Seu nome (ou nickname)
            </label>
            <Input
              placeholder="Como te chamam dentro do game?"
              className="placeholder:text-zinc-500 font-normal text-[14px] bg-zinc-900 w-full h-[50px] rounded py-4 px-3"
              type="text"
              id="name"
              registerinput={register('name')}
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          <div className="w-full min-h-min flex gap-6">
            <div className="w-full flex flex-col gap-2 mb-2">
              <label className="font-semibold" htmlFor="yearsPlaying">
                Joga há quantos anos?
              </label>
              <Input
                registerinput={register('yearsPlaying')}
                placeholder="Tudo bem ser ZERO"
                className="placeholder:text-zinc-500 font-normal text-[14px] bg-zinc-900 w-full h-[50px] rounded py-4 px-3"
                type="number"
                id="yearsPlaying"
              />
            </div>

            <div className="w-full flex flex-col gap-2 mb-2">
              <label className="font-semibold" htmlFor="discord">
                Qual seu Discord?
              </label>
              <Input
                registerinput={register('discord')}
                placeholder="Usuario#0000"
                className="placeholder:text-zinc-500 font-normal text-[14px] bg-zinc-900 w-full h-[50px] rounded py-4 px-3"
                type="text"
                id="discord"
              />
            </div>
          </div>

          <div className="mb-6 flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="weekDays">
                Quando costuma jogar?
              </label>

              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                onValueChange={setWeekDays}
                value={weekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Domingo"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  D
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Segunda"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title="Terca"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quarta"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="4"
                  title="Quinta"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  Q
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="5"
                  title="Sesta"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>

                <ToggleGroup.Item
                  value="6"
                  title="Sabado"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'
                  }`}
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>

            <div className="flex gap-2 flex-col flex-1 w-[100px]">
              <label className="font-semibold" htmlFor="hourStart">
                Qual horário do dia?
              </label>
              <div className="flex gap-2 items-center">
                <Input
                  registerinput={register('hoursStart')}
                  className="bg-zinc-900 font-normal text-[14px] text-zinc-500 rounded"
                  id="hoursStart"
                  type="time"
                  placeholder="De"
                />

                <Input
                  registerinput={register('hourEnd')}
                  className="bg-zinc-900 font-normal text-[14px] text-zinc-500 rounded"
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <label className="mb-8 font-normal text-[14px] flex gap-3 items-center">
            <Checkbox.Root
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setVoiceChannel(true);
                } else {
                  setVoiceChannel(false);
                }
              }}
              name="useVoiceChannel"
              className="w-6 h-6 bg-zinc-900 flex items-center justify-center"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-500" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>
          <div className="flex gap-4 items-center justify-end">
            <Dialog.Close className="bg-zinc-500 hover:bg-zinc-400 transition-colors rounded-md py-3 px-5 text-base font-semibold">
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-400 transition-colors rounded-md flex items-center justify-center gap-3 py-3 px-5 text-base font-semibold"
            >
              <GameController fontSize={24} />
              Encontrar duo
            </button>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
