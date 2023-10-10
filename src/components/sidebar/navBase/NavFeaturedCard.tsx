export function NavFeaturedCard() {
  return (
    <div className="flex flex-col px-4 py-5 rounded-md hover:bg-violet-50 gap-4 ">
      <div className="space-y-1">
        <p className="text-sm/5 font-medium  text-violet-700 "> Used space</p>
        <p className=" text-sm/5 font-normal text-violet-500">Your team has used 80% of your available space. Need more?</p>
      </div>

      <div className=" h-2 rounded-md bg-violet-100 ">
        <div className=" h-2 w-[80%] rounded-md bg-violet-600"></div>
      </div>

      <div className="space-x-3">
        <button type="button" className=" font-semibold text-violet-700 hover:text-violet-900">
          Dismiss
        </button>
        <button type="button" className=" font-semibold text-violet-700 hover:text-violet-900">
          Upgrade Plan
        </button>
      </div>
    </div>
    

    
  );
}
