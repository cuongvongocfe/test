import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="CodeBucks"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          Bảo Long Scrap là đại diện độc quyền của Công Ty Cổ Phần Công Nghệ An
          Huy tại Kiên Giang - Đơn vị thứ 02 trong danh sách 23 đơn vị xử lý
          chất thải nguy hại Y Tế - Công Nghiệp được Sở Tài Nguyên và Môi Trường
          đề xuất theo Công Văn số 220/STNMT-BVMT ngày 16/02/2022. Bảo Long
          Scrap cam kết cung cấp cho quý khách hàng dịch vụ xử lý chất thải nguy
          hại hiện đại và tiên tiến với mức chi phí thấp nhất.
          <br/>  <span className="text-2xl pt-2 font-bold text-yellow-300 ">Tư vấn môi trường: 087.6789.252</span> 
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
