
import "../css/AIFeatures.css";
export const aiFeaturesData = [
  {
    icon: "/img/icon-adaptive-learning-path.png",
    title: "Adaptive Learning Path",
    desc: "AI tự động gợi ý khóa học tiếp theo dựa trên chuyên môn, CME đã hoàn thành và thói quen học tập của bạn.",
  },
  {
    icon: "/img/icon-predictivee-CME.png",
    title: "Predictive CME & Event Suggestion",
    desc: "AI dự đoán webinar, khóa học hoặc chứng chỉ CME phù hợp kế hoạch học tập của bạn.",
  },
  {
    icon: "/img/icon-AI-attendance-tracking.png",
    title: "AI Attendance Tracking (Webinar)",
    desc: "AI điểm danh tự động, CME chính xác, không mất thời gian thủ công.",
  },
  {
    icon: "/img/icon-AI-article-recommender.png",
    title: "AI Article Recommender",
    desc: "Nhận bài viết, guideline và nghiên cứu mới nhất, phù hợp chính xác với lĩnh vực bạn quan tâm.",
  },
  {
    icon: "/img/icon-AI-profile-completer.png",
    title: "AI Profile Completer",
    desc: "Tự động hoàn thiện hồ sơ chuyên môn, tiết kiệm thời gian đăng ký và tăng độ tin cậy.",
  },
  {
    icon: "/img/icon-blockchain.png",
    title: "Blockchain Verification Certificate",
    desc: "Chứng chỉ CME được cấp với chữ ký số đồng thuận từ nền tảng và tổ chức, chống giả mạo, đảm bảo tin cậy tuyệt đối.",
  },
  {
    icon: "/img/icon-voice-text.png",
    title: "Voice & Text Assistance",
    desc: "Chuyển nội dung bài giảng thành giọng đọc tự nhiên, ghi chú nhanh bằng giọng nói hoặc text, học mọi lúc mọi nơi.",
  },
  {
    icon: "/img/icon-digital-id.png",
    title: "Digital ID Verification",
    desc: "Xác minh chuyên môn ngay lập tức, bảo mật dữ liệu, tạo niềm tin tuyệt đối.",
  },
  {
    icon: "/img/icon-AI-connection-suggestion.png",
    title: "AI Connection Suggestion",
    desc: "Gợi ý kết nối đồng nghiệp, HCP có cùng chuyên ngành hoặc hành vi học tập, mở rộng network chuyên môn hiệu quả.",
  },
];
const AIFeatures = () => {
  return (
    <section className="ai-features py-5 bg-white">
      <div className="container">
        <div className=" mb-5">
          <h2 className="ai-title fw-bold ">
            Học Thông Minh Hơn Với AI – Chuẩn Y Khoa Quốc Tế
          </h2>
          <p
            className="ai-subtitle text-secondary"
          >
            Chúng tôi tận dụng AI tiên tiến để gợi ý khóa học, bài viết y khoa,
            webinar và case lâm sàng phù hợp với chuyên môn và hành vi học tập
            của bạn.
          </p>
        </div>

        <div className="row g-5">
          {aiFeaturesData.map((feature, index) => (
            <div className="col-md-4 text-center" key={index}>
              <div className="ai-feature-item">
                <div className="ai-icon-wrapper mb-3">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="ai-icon"
                  />
                </div>
                <h5 className="ai-feature-title fw-bold mb-2">
                  {feature.title}
                </h5>
                <p className="ai-feature-desc small px-lg-3 text-secondary">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;