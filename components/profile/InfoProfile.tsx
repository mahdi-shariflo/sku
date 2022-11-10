import React from "react";

const InfoProfile = () => {
  return (
   <>
   {/* following && followers */}
    <div className="flex justify-around items-center mt-3">
      <div className="text-center">
        <p className="count-follow">4.5k</p>
        <p className="text-count">دنبال کنندها</p>
      </div>
      <div className="text-center">
        <p className="count-follow">4.5k</p>
        <p className="text-count">دنبال شوندها</p>
      </div>
    </div>
    {/* fullname && bio */}
   <div className="mt-6">
   <p className="fullname-profile yekanBold">مهدی شریفلو</p>
   <p className="bio-profile">زندگی خیلی سخته و من عاشق سختی هاشم , ادامه میدم در جریان باش</p>
   </div>

   {/* follow & message */}
   <div className="flex justify-around mt-8 ">
    <button className="btn-follow-profile">دنبال کردن</button>
    <button className="btn-profile-message">پیام</button>
   </div>
   </>
  );
};

export default InfoProfile;
