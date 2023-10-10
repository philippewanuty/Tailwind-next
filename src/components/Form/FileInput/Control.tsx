'use client';

import { ChangeEvent, ComponentProps } from 'react';
import { useFIleInput } from './Root';

export type ControlProps = ComponentProps<'input'>;

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFIleInput();

  function hadleFilesSelected(event:ChangeEvent<HTMLInputElement>) {
if (!event.target.files?.length){
    return
}
const files = Array.from(event.target.files)

onFilesSelected(files)
  }

  return <input type="file" className="sr-only" id={id} onChange={hadleFilesSelected} {...props} />;
}
