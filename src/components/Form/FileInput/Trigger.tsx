'use client';

import { UploadCloud } from 'lucide-react';
import { useFIleInput } from './Root';

export function Trigger() {
  const {id} = useFIleInput();

  return (
    <label
      htmlFor={id}
      className=" group flex-1 mx-2 cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-200 py-4 px-6 shadow-sm hover:border-violet-200 hover:bg-violet-25"
    >
      <div className="bg-zinc-100 flex h-10 w-10 items-center justify-center rounded-full border-6 border-zinc-50 group-hover:border-violet-50   group-hover:bg-violet-100">
        <UploadCloud className="w-5 h-5 text-zinc-600  group-hover:text-violet-600" />
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-sm font-normal text-zinc-500  group-hover:text-violet-600">
          <span className=" text-sm font-semibold text-violet-700 ">Click to upload</span> or drag and drop
        </span>
        <span className=" text-xs text-zinc-500  group-hover:text-violet-600">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
