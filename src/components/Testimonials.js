import React, { useState } from "react";
import "../css/Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "BS. Nguyễn Hoàng Anh",
    specialty: "Chuyên khoa Nội tổng quát",
    quote:
      "MMed giúp tôi tiếp cận kiến thức y khoa chất lượng cao, linh hoạt mọi lúc mọi nơi. Nền tảng CME này thực sự thay đổi cách tôi chăm sóc bệnh nhân, mang lại hiệu quả điều trị tốt hơn và nâng cao tiêu chuẩn hành nghề.",
    image: "/img/Dr-with-bg.png",
  },
  {
    id: 2,
    name: "BS. Trung Hiếu",
    specialty: "Ngoại tổng quát",
    quote:
      "Một nền tảng tuyệt vời để kết nối, học hỏi và hợp tác chuyên môn, giúp tôi không ngừng nâng cao tay nghề và phát triển sự nghiệp y khoa.",
    image: "/img/Dr-with-bg.png",
  },
  {
    id: 3,
    name: "BS. Hồng Dương",
    specialty: "Nội tim mạch",
    quote:
      "MMed mang đến cơ hội trao đổi kinh nghiệm với đồng nghiệp, mở rộng góc nhìn và cập nhật kiến thức mới nhất trong chuyên ngành.",
    image: "/img/Dr-with-bg.png",
  },
  {
    id: 4,
    name: "BS. Thanh Điền",
    specialty: "Nhi khoa",
    quote:
      "Cảm ơn MMed đã trở thành nguồn cảm hứng và động lực để chúng tôi tiếp tục cống hiến cho cộng đồng và nâng cao chất lượng điều trị.",
    image: "/img/Dr-with-bg.png",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = testimonialsData[activeIndex];

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="section-title mb-5">
          LẮNG NGHE ĐỒNG NGHIỆP CỦA BẠN NÓI GÌ VỀ MMED
        </h2>

        <div className="featured-testimonial mb-5">
          <div className="row align-items-center g-0 flex-column-reverse flex-lg-row">
            <div className="col-lg-7 position-relative">
              <div className="main-quote-card bg-white shadow-sm p-4 p-lg-5 rounded-4">
                <p className="main-quote-text mb-4">“{activeData.quote}”</p>
                <h4 className="doctor-name fw-bold mb-1">{activeData.name}</h4>
                <p className="doctor-specialty mb-0">{activeData.specialty}</p>
              </div>
            </div>

            <div className="col-lg-5 position-relative">
              <div className="doctor-image-wrapper">
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="doctor-main-img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {testimonialsData.map((item, index) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div
                className={`small-quote-card h-100 p-4 bg-white rounded-3 shadow-sm text-center ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <p className="small-quote-text text-muted mb-3">
                  "{item.quote.substring(0, 80)}..."
                </p>
                <h6 className="fw-bold mb-1" style={{ color: "#103982" }}>
                  {item.name}
                </h6>
                <small className="text-muted fw-bold">{item.specialty}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
