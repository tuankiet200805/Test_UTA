import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { StatCard } from "./components/StatCard";
import Features from "./components/Features";
import AIFeatures from "./components/AIFeatures";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const statsData = [
    {
      icon: "/img/icon-doctor.png",
      number: "30,000",
      label: "Chuyên Gia Y Tế <br> Đã Tham Gia Cộng Đồng MMed",
    },
    {
      icon: "/img/icon-certificate.png",
      number: "10,000+",
      label: "Giờ Học CME Được Hoàn Thành",
    },
    {
      icon: "/img/icon-talk.png",
      number: "98%",
      label: "Bác Sĩ Sẵn Sàng Giới Thiệu MMed",
    },
    {
      icon: "/img/icon-speaker.png",
      number: "250+",
      label: "Chuyên Gia & Diễn Giả Hàng Đầu",
    },
  ];

  return (
    <div className="App">
      <Header />

      <div className="main-container">
        <div className="container main-container py-5 mt-4">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center mb-5 mb-lg-0">
              <img
                src="/img/Mobile-app.png"
                alt="MMed App"
                className="phone-img-shadow"
              />
            </div>

            <div className="col-lg-7 ps-lg-5">
              <h1 className=" fw-bold mb-4">
                Trao quyền cho đội ngũ y tế Kết Nối, Nâng Tầm, Dẫn Đầu
              </h1>
              <p className="description-text mb-5">
                MMed mang đến cho bác sĩ những công cụ hỗ trợ chuyên môn thông
                minh, kết nối mạng lưới đồng nghiệp và tổ chức y tế uy tín, đồng
                thời mở ra kho tài nguyên số và chương trình CME chất lượng -
                giúp đội ngũ y tế không ngừng phát triển và tiên phong trong
                chăm sóc sức khỏe hiện đại.
              </p>

              <div className="row g-4">
                {statsData.map((item, index) => (
                  <StatCard
                    key={index}
                    icon={item.icon}
                    number={item.number}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <AIFeatures />
      <Partners />

      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
