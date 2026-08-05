import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
const initialForm = {
  fullname: "",
  email: "",
  role: "",
  experience: "",
  skills: [],
  terms: false,
  notifications: false,
};
const Form = () => {
const [formData, setFormData] = useState(() => {
  const savedData = localStorage.getItem("applicationForm");

  return savedData ? JSON.parse(savedData) : initialForm;
});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
    "UI/UX Designer",
    "Product Manager",
  ];


  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("applicationForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => {
      if (name === "skills") {
        return {
          ...prevData,
          skills: checked
            ? [...prevData.skills, value]
            : prevData.skills.filter((skill) => skill !== value),
        };
      }

      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!/^[A-Za-z ]{2,30}$/.test(formData.fullname)) {
      errors.fullname = "Name must contain only letters (2-30 characters)";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    if (!formData.role) {
      errors.role = "Please select a role";
    }

    if (
      formData.experience === "" ||
      formData.experience < 0 ||
      formData.experience > 50
    ) {
      errors.experience = "Experience must be between 0 and 50";
    }

    if (formData.skills.length === 0) {
      errors.skills = "Select at least one skill";
    }

    if (!formData.terms) {
      errors.terms = "You must accept terms";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      setTimeout(() => {
        console.log(formData);

        setLoading(false);

        setSuccess(true);
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  const resetForm = () => {
    setFormData({
      fullname: "",
      email: "",
      role: "",
      experience: "",
      skills: [],
      terms: false,
      notifications: false,
    });

    setErrors({});

    localStorage.removeItem("applicationForm");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 to-green-50 p-10">
      <div className="bg-white max-w-md mx-auto p-8 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-8">
          Developer Application Form
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}

          <div className="mb-5">
            <label className="block mb-2">Full Name</label>

            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />

              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full border rounded-md p-2 pl-10"
              />
            </div>

            <p className="text-red-500 text-sm">{errors.fullname}</p>
          </div>

          {/* Email */}

          <div className="mb-5">
            <label className="block mb-2">Email</label>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md p-2 pl-10"
              />
            </div>

            <p className="text-red-500 text-sm">{errors.email}</p>
          </div>

          {/* Role */}

          <div className="mb-5">
            <label>Role</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-2"
            >
              <option value="">Select role</option>

              {roles.map((role) => (
                <option key={role}>{role}</option>
              ))}
            </select>

            <p className="text-red-500 text-sm">{errors.role}</p>
          </div>

          {/* Experience */}

          <div className="mb-5">
            <label>Years of Experience</label>

            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-2"
            />

            <p className="text-red-500 text-sm">{errors.experience}</p>
          </div>

          {/* Skills */}

          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <label key={skill} className="flex gap-2">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleChange}
                />

                {skill}
              </label>
            ))}
          </div>

          <p className="text-red-500 text-sm">{errors.skills}</p>

          {/* Terms */}

          <div className="flex gap-2 mt-6">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            <label>I agree to terms</label>
          </div>

          <p className="text-red-500 text-sm">{errors.terms}</p>

          {/* Notifications */}

          <div className="flex gap-2 mt-4 mb-6">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleChange}
            />

            <label>Receive notifications</label>
          </div>

          <button
            disabled={loading}
            className="w-full bg-rose-600 text-white py-2 rounded-md disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="w-full mt-3 border py-2 rounded-md"
          >
            Reset Form
          </button>
        </form>
      </div>

      {/* Success Modal */}

      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl text-center">
            <h2 className="text-xl font-bold text-green-600">Success 🎉</h2>

            <p className="mt-3">Your application was submitted.</p>

            <button
              onClick={() => setSuccess(false)}
              className="mt-5 bg-rose-600 text-white px-5 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};;

export default Form;
