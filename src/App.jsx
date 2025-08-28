import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    comments: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const fieldMap = {
    fullName: "entry.2005620554",
    email: "entry.1045781291",
    address: "entry.1065046570",
    phone: "entry.1166974658",
    comments: "entry.839337160",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formBody = new FormData();
    formBody.append(fieldMap.fullName, formData.fullName);
    formBody.append(fieldMap.email, formData.email);
    formBody.append(fieldMap.address, formData.address);
    formBody.append(fieldMap.phone, formData.phone);
    formBody.append(fieldMap.comments, formData.comments);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScsIi11IP3EOXaM6PnRn8m43dYO_VLLCuEpL8B_sWQ7iUXHUQ/formResponse",
        {
          method: "POST",
          mode: "no-cors", // prevents CORS errors
          body: formBody,
        }
      );
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        comments: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "400px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Google Form Submission</h2>

        {isSubmitted && (
          <p style={{ color: "green", textAlign: "center" }}>
            ✅ Thanks! Your response has been submitted.
          </p>
        )}

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="comments"
          placeholder="Comments"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
          style={inputStyle}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "14px",
};
