import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <div className="footer p-[5rem] mb-4 bg-blue-color rounded-[10px] gap-8 grid grid-cols-5 m-auto items-start justify-center">
      
      <div>
        <div>
          <h1 className="text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>Search
          </h1>
        </div>

        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and employers find the best candidates. 
        </p>
      </div>

      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>

        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">About us</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>

        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Support Center</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Feedback</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Contact us</li>
        </div>
      </div>

      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>

        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Req Demo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Careers</li>
        </div>
      </div>

      <div className="grid">
        <span className="text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>

        <div className="grid gap-3">
          <small className="text-[14px] text-white">
            galembeckpedro@gmail.com
          </small>

          <div className="flex gap-4 py-[1rem]">
            <Instagram className="bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blue-color" />
            <Facebook className="bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blue-color" />
            <Twitter className="bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blue-color" />
          </div>
        </div>
      </div>
    </div>
  );
}