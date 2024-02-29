import { Archive, MessageCircleHeart, ShieldCheck } from "lucide-react";

export function CompanyValues() {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-text-color text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to account
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">

        <div className="rounded-[10px] hover:bg-[#FCFAE3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="p-[4px] rounded-[.8rem] bg-[#F3F2AD] w-[45px] h-[45px] flex items-center justify-center">
              <Archive color="orange" size={30} />
            </div>
            <span className="font-semibold text-text-color text-[18px]">Simplicity</span>
          </div>
          <p className="text-[13px] text-text-color opactiy-[.7] py-[1rem] font-semibold">
            Things being made beaultifuly simple are at the heart of everything we do.
          </p>
        </div>

        <div className="rounded-[10px] hover:bg-[#F7EDF5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="p-[4px] rounded-[.8rem] bg-[#F7D1E1] w-[45px] h-[45px] flex items-center justify-center">
              <MessageCircleHeart color="red" size={30} />
            </div>
            <span className="font-semibold text-text-color text-[18px]">Proactivity</span>
          </div>
          <p className="text-[13px] text-text-color opactiy-[.7] py-[1rem] font-semibold">
            We believe in making things better for everyone, even if just by a little bit!
          </p>
        </div>

        <div className="rounded-[10px] hover:bg-[#EEEDF7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="p-[4px] rounded-[.8rem] bg-[#DEDEF8] w-[45px] h-[45px] flex items-center justify-center">
              <ShieldCheck color="blue" size={30} />
            </div>
            <span className="font-semibold text-text-color text-[18px]">Security</span>
          </div>
          <p className="text-[13px] text-text-color opactiy-[.7] py-[1rem] font-semibold">
            We work on the basis of creating trust which can be nurtured through authenticity and transparency.
          </p>
        </div>

      </div>
    </div>
  );
}