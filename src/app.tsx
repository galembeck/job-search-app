import { CompanyValues } from "./components/company-values";
import { JobsShowcase } from "./components/jobs-showcase";
import { Navbar } from "./components/navbar";
import { SearchBar } from "./components/search-bar";

export function App() {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <SearchBar />
      <JobsShowcase />
      <CompanyValues />
    </div>
  )
}
