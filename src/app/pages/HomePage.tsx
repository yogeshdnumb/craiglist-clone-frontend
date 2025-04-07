import CategoryAccordion from "@/components/custom/CategoryAccordion";
import PopularGrid from "@/components/custom/PopularGrid";

import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="p-2">
      <Link to="jobs">Jobs</Link>
      <Link to="/create">create</Link>
      <Link to="/login">Joblogin</Link>
      <Link to="/secure">secured</Link>
      <PopularGrid />
    </div>
  );
}
