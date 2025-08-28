import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLScsIi11IP3EOXaM6PnRn8m43dYO_VLLCuEpL8B_sWQ7iUXHUQ/formResponse"
        method="POST"
        target="_self"
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

        <input
          type="text"
          name="entry.2005620554"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="entry.1045781291"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="entry.1065046570"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="tel"
          name="entry.1166974658"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <textarea
          name="entry.839337160"
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
