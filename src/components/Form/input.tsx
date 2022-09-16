import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  registerinput: any;
}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      {...props.registerinput}
      className="mb-2 outline-none placeholder:text-zinc-500 font-normal text-[14px] bg-zinc-900 w-full rounded py-3 px-4"
    />
  );
}

// async function handleCreatAd(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault();
//   const formData = new FormData(event.target as HTMLFormElement);
//   const data = Object.fromEntries(formData);

//   try {
//     await api.post(`games/${data.game}/ads`, {
//       weekDays: weekDays.map(Number),
//       name: data.name,
//       discord: data.discord,
//       useVoiceChannel: data.useVoiceChannel ? true : false,
//       yearsPlaying: Number(data.yearsPlaying),
//       hoursStart: data.hourStart,
//       hourEnd: data.hourEnd,
//     });

//     alert('anucio criado com susseso');
//   } catch (error) {
//     alert('Erro ao criar o anucio');
//     console.log(error);
//   }
// }
