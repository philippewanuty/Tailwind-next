import { ComponentProps } from 'react';


 type InputRootProps = ComponentProps<'div'>;

export function InputRoot(props: InputRootProps) {
  return <div className=" mx-2 flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-zinc-300 shadow-sm " {...props} />;
}


type InputPrefixProps = ComponentProps<'div'>;

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<'input'>;

export function InputControl(props: InputControlProps) {
  return <input className=" w-full border-none p-0 bg-transparent text-zinc-900 placeholder-zinc-600" {...props} />;
}


