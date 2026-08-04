import React from "react";

export const Stats = () => {
   const stats = [
     { icon: "📊", label: "Average Grade", value: "88%" },
     { icon: "📚", label: "Courses", value: "3" },
     { icon: "⏰", label: "Study Hours", value: "45h" },
     { icon: "✏️", label: "Assignments", value: "12" },
   ];
    return (
      <div className="grid md:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div className="bg-white shadow-sm rounded-xl  gap-2 py-8 px-5 flex items-center">
            <div className="flex gap-2">
              <div className="text-xl">{stat.icon}</div>

              <div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
                <strong className="text-xl font-bold">{stat.value}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};
