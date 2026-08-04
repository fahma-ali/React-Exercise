import React from "react";
import { Header } from "./Header";
import { Stats } from "./Stats";
import { CourseProgress } from "./CourseProgress";
import { AssignmentsCard } from "./AssignmentsCard";
import { Announcements } from "./Announcements";

export const Student_Dashboard = () => {
  return (
    <div>
      <Header />
      <Stats />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <CourseProgress />
        </div>
        <div>
          <AssignmentsCard />
          <Announcements />
        </div>
      </div>
    </div>
  );
};
export default Student_Dashboard;
