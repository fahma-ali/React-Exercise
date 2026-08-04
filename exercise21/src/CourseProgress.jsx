import React from "react";

export const CourseProgress = () => {
    const courses = [
      {
        title: "React Fundamentals",
        percent: 75,
        next: "Components & Props",
        instructor: "Sarah Wilson",
      },
      {
        title: "JavaScript Advanced",
        percent: 45,
        next: "Async/Await",
        instructor: "Mike Johnson",
      },
      {
        title: "UI/UX Design",
        percent: 90,
        next: "Color Theory",
        instructor: "Emily Chen",
      },
    ];
  return (
    <div>
      <div className="bg-white capitalize shadow-sm rounded-2xl px-5 py-3 mt-8">
        <h1 className="mb-10">Course Progress</h1>
        {courses.map((course) => (
          <div className="mb-10 bg-gray-50 rounded-2xl py-2 px-4">
            <div className="flex justify-between">
              <p className="text-gray-600 font-bold">{course.title}</p>
              <p className="text-gray-400">{course.percent}%</p>
                </div>
                <div className="w-full h-2 bg-gray-300 rounded-2xl ">
                    <div className="h-2 bg-gray-600 rounded-2xl" style={{width:`${course.percent}%`}}></div>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-400">{course.next}</p>
                    <p className="text-gray-400">{ course.instructor}</p>
                    </div>
          </div>
        ))}
      </div>
    </div>
  );
};
