import { spaceToHyphen } from "@/lib/utils";
import { Link, useParams } from "react-router";

const sampData = {
  community: ["All Services", " Automotive", "Beauty Services"],
  "for-sale": ["All Services", " Automotive", "Beauty Services"],
  jobs: ["All Services", " Automotive", "Beauty Services"],
  hosting: ["All Services", " Automotive", "Beauty Services"],
  services: ["All Services", " Automotive", "Beauty Services"],
  gigs: ["All Services", " Automotive", "Beauty Services"],
};

export default function CatgoryGroupPage() {
  const { group } = useParams();
  return (
    <main className="p-4 flex gap-6">
      {/*  <PopularGrid />
  <div>
    <CategoryAccordion />
  </div> */}
      <nav className="border-r pr-2 flex flex-col gap-1">
        <ul>
          <li className="hover:bg-secondary p-1">
            <Link to="/jobs">jobs</Link>
          </li>
          <li className="hover:bg-secondary p-1">
            <Link to="/for-sale">for sale</Link>
          </li>
          <li className="hover:bg-secondary p-1">
            <Link to="/gigs">gigs</Link>
          </li>
          <li className="hover:bg-secondary p-1">
            <Link to="/hosting">housing</Link>
          </li>
          <li className="hover:bg-secondary p-1">
            <Link to="/community">jobs</Link>
          </li>
          <li className="hover:bg-secondary p-1">
            <Link to="/services">services</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex-1 flex flex-col gap-1">
        {sampData[group]?.map((data, i) => (
          <li key={i}>
            <Link to={spaceToHyphen(data)}>{data}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
