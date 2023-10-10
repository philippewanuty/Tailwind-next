import { Cloud, MailIcon, Search, UploadCloud, User } from 'lucide-react';
import { InputControl, InputPrefix, InputRoot } from '../sidebar/mainNavegation/Input';
import * as FileInput from '@/components/Form/FileInput';

export function BodyPage() {
  return (
    //  Personal info
    <div className="mt-8 flex flex-col ">
      <div className="flex items-center justify-between border-b  border-zinc-200 pb-5  ">
        <div className="space-y-1 ">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <p className="text-sm font-normal text-zinc-500">Update your photo and personal details here</p>
        </div>
        <div className="flex gap-3 items-center ">
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold border border-zinc-300 shadow-sm text-zinc-700 rounded-lg bg-white hover:bg-zinc-50">
            Cancel
          </button>
          <button type="submit" form="settings" className="py-2.5 px-4 text text-sm font-semibold rounded-lg shadow-sm text-white  bg-violet-600 hover:bg-violet-700">
            Save
          </button>
        </div>
      </div>

      {/* Name */}
      <form id="settings" className="pt-5 flex flex-col w-full ">
        <div className="grid grid-cols-form pb-5 border-b border-zinc-200  ">
          <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
            Name
          </label>
          <div className=" grid gap-6 grid-cols-2  ">
            <InputRoot>
              <InputControl id="firstName" defaultValue="Philippe"></InputControl>
            </InputRoot>
            <InputRoot>
              <InputControl defaultValue="Wanuty"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Email Adress */}

        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            Email adress
          </label>

          <div className="">
            <InputRoot>
              <InputPrefix>
                <MailIcon className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue="contact@philippewanuty.com"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Your foto */}

        <div className="grid grid-cols-form border-b  border-zinc-200 pt-5 pb-5  ">
          <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
            Your photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">This will be displayed on your profile.</span>
          </label>

          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        {/* Role */}
        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <div className="">
            <InputRoot>
              <InputControl id="role" defaultValue="Web Developer"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Country */}
        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="country" className="text-sm font-medium text-zinc-700">
            Country
          </label>

          <div className="">
            <InputRoot>
              <InputControl id="country" defaultValue="Brazil"></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Timezone */}
        <div className=" grid grid-cols-form pt-5 pb-5 border-b border-zinc-200  ">
          <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
            Timezone
          </label>

          <div className="">
            <InputRoot>
              <InputControl id="timezone" defaultValue=""></InputControl>
            </InputRoot>
          </div>
        </div>

        {/* Bio */}
        <div className="grid grid-cols-form pt-5 pb-5 border-b  border-zinc-200  ">
          <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">Write a short introduction.</span>
          </label>
        </div>

        {/* Portfolio projects */}
        <div className="grid grid-cols-form pt-5 pb-5 border-b  border-zinc-200    ">
          <label htmlFor="projects" className="text-sm font-medium text-zinc-700">
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">Share a few snippets of your work.</span>
          </label>

          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.Control multiple />
          </FileInput.Root>
        </div>

        {/* Final button */}
        <div className="flex flex-row gap-3 justify-end   pt-4 ">
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold border border-zinc-300 shadow text-zinc-700 rounded-lg bg-white hover:bg-zinc-50">
            Cancel
          </button>
          <button type="button" className="py-2.5 px-4 text text-sm font-semibold rounded-lg shadow text-white  bg-violet-600 hover:bg-violet-700">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
