import { Search, XCircle, Home, MapPin } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">

      <form action="">

        <div className="flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">

          <div className="flex gap-2 items-center">  
            <Search className="text-[25px] icon" />
            <input 
              type="text" 
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]" 
              placeholder="Search for jobs offers" 
            />
            <XCircle className="text-[30px] text-[#A5A6A6] hover:text-text-color icon" />
          </div>

          <div className="flex gap-2 items-center">  
            <Home className="text-[25px] icon" />
            <input 
              type="text" 
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]" 
              placeholder="Search by company" 
            />
            <XCircle className="text-[30px] text-[#A5A6A6] hover:text-text-color icon" />
          </div>

          <div className="flex gap-2 items-center">  
            <MapPin className="text-[25px] icon" />
            <input 
              type="text" 
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]" 
              placeholder="Search by location" 
            />
            <XCircle className="text-[30px] text-[#A5A6A6] hover:text-text-color icon" />
          </div>

          <button className="bg-blue-color h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-700">
            Search
          </button>
        </div>
      </form>

      <div className="flex items-center gap-10 justify-center">

        <div className='flex items-center gap-2'>
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>

          <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className='flex items-center gap-2'>
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>

          <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Part-time</option>
            <option value="">Full-time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
        </div>

        <div className='flex items-center gap-2'>
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>

          <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Beginner</option>
            <option value="">Intermidate</option>
            <option value="">Senior</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className="text-[#A1A1A1] cursor-pointer">Clear all</span>
      </div>

    </div>
  );
}