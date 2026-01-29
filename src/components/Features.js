import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "../css/Features.css";

import "swiper/css";
import "swiper/css/pagination";

const featureSlides = [
  {
    id: 1,
    mainTitle: "Cập nhật y khoa",
    mainDesc:
      "Luôn đi đầu trong tri thức y học. Khám phá các cập nhật chuyên ngành được chọn lọc, súc tích và dễ tiếp thu - giúp bạn không bỏ lỡ bất kỳ tiến bộ nào.",
    subFeatures: [
      {
        icon: "/img/icon-training-video.png",
        title: "Video đào tạo",
        desc: "Học hỏi kinh nghiệm thực tiễn từ các chuyên gia đầu ngành.",
      },
      {
        icon: "/img/icon-share-clinical-cases.png",
        title: "Chia sẻ ca lâm sàng",
        desc: "Trao đổi, học hỏi từ những ca bệnh điển hình.",
      },
      {
        icon: "/img/icon-professional-article.png",
        title: "Bài viết chuyên môn",
        desc: "Theo dõi nhanh các nghiên cứu, công bố y học nổi bật.",
      },
      {
        icon: "/img/icon-treatment-guidelines.png",
        title: "Hướng dẫn điều trị",
        desc: "Cập nhật kịp thời các khuyến cáo và phác đồ điều trị mới nhất.",
      },
    ],
  },
  {
    id: 2,
    mainTitle: "Chương trình CME",
    mainDesc:
      "Học tập y khoa không còn nhàm chán! Các tổ chức uy tín mang đến những chương trình CME sinh động, ngắn gọn và thiết thực.",
    subFeatures: [
      {
        icon: "/img/icon-video-on-demand.png",
        title: "Video theo yêu cầu",
        desc: "Xem bài giảng từ chuyên gia vào bất kỳ thời điểm nào.",
      },
      {
        icon: "/img/icon-ASM.png",
        title: "Đánh giá năng lực",
        desc: "Hoàn thành bài kiểm tra nhanh sau mỗi khóa học.",
      },
      {
        icon: "/img/icon-meeting-online.png",
        title: "Hội thảo trực tuyến",
        desc: "Kết nối trực tiếp với các chuyên gia đầu ngành qua webinar.",
      },
      {
        icon: "/img/icon-certificate.png",
        title: "Chứng chỉ CME điện tử",
        desc: "Nhận chứng chỉ hợp lệ ngay sau khi hoàn tất khóa học.",
      },
    ],
  },
  {
    id: 3,
    mainTitle: "Cộng đồng Chuyên môn",
    mainDesc:
      "Học hỏi không chỉ đến từ sách vở, mà từ những đồng nghiệp cùng chí hướng. Cộng đồng MMed giúp bạn kết nối, trao đổi và cùng nhau nâng tầm kiến thức y khoa.",
    subFeatures: [
      {
        icon: "/img/icon-community-channel.png",
        title: "Kênh cộng đồng",
        desc: "Tham gia các nhóm chuyên khoa sâu để cùng thảo luận và cập nhật kiến thức.",
      },
      {
        icon: "/img/icon-HCP-network.png",
        title: "Mạng lưới HCP",
        desc: "Kết nối và mở rộng quan hệ với hàng ngàn đồng nghiệp trên cả nước.",
      },
      {
        icon: "/img/icon-secure-message.png",
        title: "Tin nhắn Bảo mật",
        desc: "Trò chuyện riêng tư, an toàn với đồng nghiệp hoặc chuyên gia đầu ngành.",
      },
      {
        icon: "/img/icon-comments-and-discussions.png",
        title: "Bình luận & Trao đổi",
        desc: "Thảo luận sôi nổi, chia sẻ quan điểm dưới các bài viết và ca lâm sàng.",
      },
    ],
  },
];

const Features = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
      {" "}
      <div className="container">
        <h2
          className="display-6 fw-bold mb-5"
          style={{ color: "#103982", fontFamily: "Merriweather" }}
        >
          Tính Năng Chính
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="feature-swiper"
          style={{ padding: "50px" }}
        >
          {featureSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="feature-card bg-white rounded-4 p-4 p-lg-5 shadow-sm border">
                <div className="row align-items-center">
                  <div className="col-lg-4 mb-4 mb-lg-0 border-end-lg">
                    <h3 className="fw-bold mb-3 t-center" style={{ color: "#103982" }}>
                      {slide.mainTitle}
                    </h3>
                    <p className="text-secondary mb-0 t-center">{slide.mainDesc}</p>
                  </div>

                  <div className="col-lg-8 ps-lg-5">
                    <div className="row g-4">
                      {slide.subFeatures.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <div className="d-flex flex-column align-items-center text-center">
                            <img
                              src={item.icon}
                              alt={item.title}
                              className="mb-3"
                              style={{ height: "50px", objectFit: "contain" }}
                            />
                            <h5
                              className="fw-bold fs-6"
                              style={{ color: "#103982" }}
                            >
                              {item.title}
                            </h5>
                            <p className="small text-muted mb-0">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
