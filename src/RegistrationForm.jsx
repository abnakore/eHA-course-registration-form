// RegistrationForm.jsx - Start with this template
import React, { useState } from "react";

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = "Invalid email format";

    if (!age) newErrors.age = "Age is required";
    else if (isNaN(age) || age < 18)
      newErrors.age = "You must be 18 or older to register";

    if (!course) newErrors.course = "Please select a course";
    console.log(newErrors);

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your validation logic here
    const validationErrors = validate();

    // TODO: Show success message if everything is valid
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setErrors({});
      // Clear form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setCourse("");
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Course Registration</h2>

      {/* TODO: Add your form fields here */}
      {isSubmitted && (
        <p className="success-message">🎉 Registration successful!</p>
      )}

      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors.firstName && (
          <p className="error-message">{errors.firstName}</p>
        )}
      </div>

      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <p className="error-message">{errors.age}</p>}
      </div>

      <div className="form-group">
        <label>Course Selection:</label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="">-- Select a course --</option>
          <option value="react">React Fundamentals</option>
          <option value="javascript">JavaScript Mastery</option>
          <option value="uiux">UI/UX Design Basics</option>
        </select>
        {errors.course && <p className="error-message">{errors.course}</p>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
