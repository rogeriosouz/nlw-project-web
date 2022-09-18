import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  registerinput: any;
  typeinput: 'error' | 'normal';
  messageerro?: string | null;
}

export function Input(props: InputProps) {
  return (
    <>
      {props.typeinput === 'error' ? (
        <>
          <input
            {...props}
            {...props.registerinput}
            className="border border-red-500 outline-none placeholder:text-red-500 font-normal text-[14px] bg-zinc-900 w-full rounded py-3 px-4"
          />

          <p className="text-red-500 font-semibold text-xs w-full ">
            {props.messageerro}
          </p>
        </>
      ) : (
        <input
          {...props}
          {...props.registerinput}
          className="mb-2 outline-none placeholder:text-zinc-500 font-normal text-[14px] bg-zinc-900 w-full rounded py-3 px-4"
        />
      )}
    </>
  );
}
