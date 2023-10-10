import { LogOut } from "lucide-react";

export function Profile() {
    return (
      <div>
        
        <div className="flex flex-row gap-3">
          <img className="h-10 w-10" src="https://github.com/philippewanuty.png" alt="" />

          <div className="truncate">
            <p className="text-sm/5 font-semibold text-zinc-700">Philippe Wanuty</p>
            <p className=" truncate text-sm/5 font-normal text-zinc-500">contact@philippewanuty.com</p>
          </div>
          <button type="button" className="ml-auto p-2 rounded-md hover:bg-zinc-50 ">
            <LogOut className="h-5 w-5   text-zinc-500" />
          </button>
        </div>
      </div>
    );
}