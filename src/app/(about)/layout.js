import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "20+ Dự Án Đã Hoàn Thành 📝",
    "99% Sự Hài Lòng Của Khách Hàng",
    // "Authored In-Depth Course on Educative",
    // "Contributed as a Technical Course Reviewer 📝",
    // "Recipient of the Hackernoon Noonies Award 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
