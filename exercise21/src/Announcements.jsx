import React from 'react'

export const Announcements = () => {
      const announcements = [
        {
          title: "New Course Available",
          body: "Check out our new TypeScript course!",
          time: "2 hours ago",
        },
        {
          title: "Maintenance Notice",
          body: "Platform updates scheduled for tonight",
          time: "5 hours ago",
        },
      ];
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4 mt-5 capitalize">
      <h1 className="font-semibold">announcements</h1>
      {announcements.map((announcement, index) => (
        <div key={index} className="border-l-4 border-blue-400 pl-3">
          <h1 className="font-medium">{announcement.title}</h1>
          <p className="text-gray-500 text-sm">{announcement.body}</p>
          <p className="text-gray-400 text-xs">{announcement.time}</p>
        </div>
      ))}
    </div>
  );
}
