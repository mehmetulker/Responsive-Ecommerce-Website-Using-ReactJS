import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 border flex flex-col items-center  border-gray-300">
        <div className="w-full  flex  items-center justify-between ">
          <div className=" w-1/2 flex flex-col text-sm text-gray-700 mx-2">
            <p>Sayın İSMAİL KÜTÜK</p>
            <p>ihlalli geçişleriniz aşaığıda gösterimişti</p>
            <div className="flex items-center justify-center mt-1">
              <p className="w-full border ">Toplam IGB Sayıs</p>
              <p className="w-full border text-center">1</p>
            </div>
          </div>
          <div className="">
            <img src={assets.marmara} alt="" />
          </div>
        </div>

        <div className="w-[99%]  items-center justify-start gap-3 border border-blue-300 rounded  py-4 my-2 bg-blue-100 text-gray-500 font-light">
          <span className="font-medium ml-2 text-gray-600">Bilgi!</span> Yeşil
          renkli satır/satırlar ödeme sürecinin tamamlanmasın beklemektedir.
        </div>
        <div className="w-full items-center  gap-3 py-4 my-2">
          <div className="w-full flex mx-2 items-center justify-start gap-3 border-b-2 rounded">
            <input type="checkbox" className="mx-1" />
            <p>İhlalli Geçiş Tarihi</p>
            <p>Giriş İstasonu</p>
            <p>Çıkış İstasonu</p>
            <p>Araç Sınıfı</p>
            <p>Son ödeme Tarihi</p>
            <p>İGB No</p>
            <p>Plaka</p>
            <p>Geçiş Bedeli</p>
            <p>Ceza Bedeli</p>
            <p>Toplam Tutar</p>
            <p>Ödenecek Tuta </p>
            <p>Detay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
