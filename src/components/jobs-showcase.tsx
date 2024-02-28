import { Clock } from "lucide-react";

import LogoLine from '../assets/logo-line.png';
import LogoIntel from '../assets/logo-intel.png';
import LogoBird from '../assets/logo-bird.png';
import LogoGoogle from '../assets/logo-google.png';
import LogoTravel from '../assets/logo-travel.png';
import LogoBain from '../assets/logo-bain.png';
import LogoAbstract from '../assets/logo-abstract.png';
import LogoPepsi from '../assets/logo-pepsi.png';

const JobsData = [
  {
    id: 1,
    image: LogoLine,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Novac Lunis Co.'
  },
  {
    id: 2,
    image: LogoBird,
    title: 'UI/UX Designer',
    time: '14h',
    location: 'Manchester',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Liquid Accessments'
  },
  {
    id: 3,
    image: LogoIntel,
    title: 'Fullstack Developer',
    time: 'Now',
    location: 'Brazil',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Web-Tech Agency'
  },
  {
    id: 4,
    image: LogoGoogle,
    title: 'Product Designer',
    time: 'Now',
    location: 'Germany',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Government'
  },
  {
    id: 5,
    image: LogoTravel,
    title: 'Researcher',
    time: '06h',
    location: 'Norway',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'New Castle'
  },
  {
    id: 6,
    image: LogoBain,
    title: 'Lead Developer',
    time: '20h',
    location: 'Leeds',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Nin Co.'
  },
  {
    id: 7,
    image: LogoAbstract,
    title: 'UI Designer',
    time: '10h',
    location: 'Turkey',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Nimelai'
  },
  {
    id: 8,
    image: LogoPepsi,
    title: 'Data Scientist',
    time: '03h',
    location: 'France',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Name and Sons'
  }
]

export function JobsShowcase() {
  return (
    <div>
      <div className="flex gap-10 justify-center flex-wrap items-center py-10">

        {
          JobsData.map(({ id, image, title, time, location, description, company }) => {
            return (
              <div key={id} className="group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-color shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-text-color group-hover:text-white">{title}</h1>
                  <span className="flex items-center text-[#CCC] gap-1">
                    <Clock /> {time}
                  </span>
                </span>

                <h6 className="text-[#CCC]">{location}</h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {description}
                </p>

                <div className="flex items-center gap-2">
                  <img src={image} alt="Company logo" className="w-[10%]" />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">{company}</span>
                </div>

                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-text-color hover:bg-white group-hover/item:text-text-color group-hover:text-white">
                  Apply now
                </button>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}