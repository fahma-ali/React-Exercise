import React from 'react'

export const AssignmentsCard = () => {
    const assignments = [
      {
        title: "Build a Todo App",
        course: "React Fundamentals",
        due: "Due 2024-03-20",
        status: "pending",
      },
      {
        title: "API Integration",
        course: "JavaScript Advanced",
        due: "Due 2024-03-18",
        status: "completed",
      },
      {
        title: "Design System",
        course: "UI/UX Design",
        due: "Due 2024-03-25",
        status: "in-progress",
      },
    ];
    const statusStyles = {
      pending: "bg-rose-100 text-rose-600",
      completed: "bg-green-100 text-green-600",
      "in-progress": "bg-yellow-100 text-yellow-700",
    };
  return (
    <div className="bg-white shadow-sm rounded-2xl capitalize p-5 mt-5">
      <h1>upcoming assigments</h1>

      {assignments.map((assigment) => (
        <div className="mb-5 mt-5">
          <div className="flex justify-between items-center ">
            <h4>{assigment.title} </h4>
                  <p className={`${statusStyles[assigment.status]}`}>{assigment.status}</p>
          </div>
          <div className="flex justify-between text-gray-400">
            <p>{assigment.course}</p>
            <p>{assigment.due}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
