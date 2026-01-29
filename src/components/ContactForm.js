import React, { useState } from "react";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim())
      newErrors.fullName = "Vui lòng nhập họ và tên.";

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!formData.organization.trim())
      newErrors.organization = "Vui lòng nhập tổ chức.";

    if (!formData.role.trim()) newErrors.role = "Vui lòng nhập vai trò.";

    if (!formData.message.trim())
      newErrors.message = "Vui lòng để lại lời nhắn.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Gửi thành công! Chúng tôi sẽ liên hệ sớm.");
      console.log("Form Data:", formData);

      setFormData({
        fullName: "",
        email: "",
        organization: "",
        role: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="contact-card p-4 p-md-5 rounded-4">
          <div className=" mb-5">
            <h2 className="section-title fw-bold mb-3">Kết nối cùng MMed</h2>
            <p className="sub-text fw-bold text-secondary">
              Chúng tôi luôn sẵn sàng lắng nghe! Gửi ngay câu hỏi hoặc góp ý của
              bạn - đội ngũ MMed sẽ phản hồi nhanh chóng để đồng hành cùng bạn
              trên hành trình phát triển chuyên môn.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label fw-bold">
                  Họ và tên<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control custom-input ${errors.fullName ? "is-invalid" : ""}`}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <div className="invalid-feedback">{errors.fullName}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control custom-input ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">
                  Tổ chức<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control custom-input ${errors.organization ? "is-invalid" : ""}`}
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
                {errors.organization && (
                  <div className="invalid-feedback">{errors.organization}</div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold">
                  Vai trò<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className={`form-control custom-input ${errors.role ? "is-invalid" : ""}`}
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                />
                {errors.role && (
                  <div className="invalid-feedback">{errors.role}</div>
                )}
              </div>

              <div className="col-12">
                <label className="form-label fw-bold">
                  Lời nhắn<span className="text-danger">*</span>
                </label>
                <textarea
                  className={`form-control custom-input ${errors.message ? "is-invalid" : ""}`}
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              <div className="col-12 text-center mt-4">
                <button type="submit" className="btn btn-submit px-5 py-2">
                  Gửi
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
