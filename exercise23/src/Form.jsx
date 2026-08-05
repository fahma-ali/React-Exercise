import React from "react";
import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    terms: false,
    notifications: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI Design",
    "API Development",
  ];
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Mobile Developer",
    "UI/UX Designer",
    "DevOps Engineer",
  ];
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((preData) => ({
      ...preData,
      [name]: type === "checkbox" ? checked : value,
     
    }));
     console.log(formData);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-green-50 p-10">
      <div className="bg-white max-w-md mx-auto p-8 rounded-xl shadow-xl ">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-8 text-center">
          Developer Application Form
        </h2>
        <form>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              className="w-full border border-gray-300 rounded-md p-1 mt-2"
              onChange={handleChange}
              value={formData.fullname}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="w-full border border-gray-300 rounded-md p-1 mt-2"
              onChange={handleChange}
              value={formData.email}
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              className="w-full border border-gray-300 rounded-md p-1 mt-2"
              onChange={handleChange}
              value={formData.role}
            >
              <option value="">Select a role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor=""
            >
              Years of Experience
            </label>
            <input
              type="text"
              name="experience"
              className="w-full border border-gray-300 rounded-md p-5 mt-2"
              onChange={handleChange}
              value={formData.experience}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div key={skill}>
                <label
                  key={skill}
                  className="flex items-center gap-2 text-sm text-gray-700"
                 >
                  <input
                    type="checkbox"
                    name="skills"
                    onChange={handleChange}
                    value={formData.skill}
                  />

                  {skill}
                </label>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-5 mt-8">
            <input type="checkbox" name="terms" />

            <label className="text-sm text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" name="notifications" />

            <label className="text-sm text-gray-700">
              Receive notifications about new opportunities
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 rounded-md font-semibold hover:bg-rose-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
