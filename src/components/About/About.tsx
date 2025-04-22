// About.tsx

import logo from "../../assets/earthcon.png";

export default function About() {
  return (
    <div className="text-vistBlue px-6 py-10">
      <img src={logo} alt="Globe" className="mx-auto my-2 w-60 mt-7" />
      <h1 className="font-mono font-bold text-lg pt-2 text-center">About Country Visual</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-center">
        <div className="text-left space-y-4 px-5">
          <h2 className="font-bold text-lg">Country Visual</h2>
          <p>
            Country Visual is a dynamic ReactJS web application that retrieves country data from a public API, maps it, and allows users to explore detailed information for each country. It leverages modern tools such as Axios for data fetching, React Router for routing, and Tailwind CSS for sleek styling.
          </p>
          <p className="font-bold mt-2 break-all">
            API URL: https://countries-api-abhishek.vercel.app/
          </p>
        </div>

        <div className="text-left space-y-4 px-5">
          <h2 className="font-bold text-lg">Project Highlights</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Data fetched from a RESTful API.</li>
            <li>Dynamic rendering of country details (e.g., Afghanistan).</li>
            <li>
              Displays:
              <ul className="ml-4 list-disc">
                <li>Name, Capital, Region/Subregion</li>
                <li>Population, Area, Coordinates</li>
                <li>Timezones, Currencies, Languages</li>
                <li>Border countries and national flag</li>
              </ul>
            </li>
            <li>Mobile-responsive with reusable components.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}