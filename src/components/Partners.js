import React from "react";
import "../css/Partners.css";

const Partners = () => {
  const partnerData = [
    { id: 1, logo: "" },
    { id: 2, logo: "" },
    { id: 3, logo: "" },
    { id: 4, logo: "" },
    { id: 5, logo: "" },
    { id: 6, logo: "" },
  ];

  return (
    <section className="partners-section py-5 bg-white">
      <div className="container">
        <h2 className="partners-title mb-5">
          Hơn 100 trường đại học y khoa, hiệp hội chuyên ngành và bệnh viện hàng
          đầu Việt Nam hợp tác cung cấp nội dung giáo dục chất lượng cao trên
          MMed.
        </h2>

        <div className="partners-grid d-flex flex-wrap justify-content-center">
          {partnerData.map((item) => (
            <div key={item.id} className="partner-circle">
                  {item.logo ? (
                <img
                  src={item.logo}
                  alt="Partner Logo"
                  className="partner-img"
                />
              ) : (
                <div className="partner-placeholder"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
