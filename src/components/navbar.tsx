export function Navbar() {
  return (
    <div className="flex justify-between items-center p-[3rem]">
      <div>
        <h1 className="text-[25px] text-blue-color">
          <strong>Job</strong>Search
        </h1>
      </div>

      <div className="flex gap-8">
        <li className="text-[#6F6F6F] hover:text-blue-color">Jobs</li>
        <li className="text-[#6F6F6F] hover:text-blue-color">Companies</li>
        <li className="text-[#6F6F6F] hover:text-blue-color">About</li>
        <li className="text-[#6F6F6F] hover:text-blue-color">Contact</li>
        <li className="text-[#6F6F6F] hover:text-blue-color">Blog</li>
        <li className="text-[#6F6F6F] hover:text-blue-color">Login</li>
        <li className="text-[#6F6F6F] hover:text-blue-color">Register</li>
      </div>
    </div>
  );
}