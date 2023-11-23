import React from "react";
import appstore from "../assets/appstore.png";
import playstore from "../assets/playstore.png";
import landing from "../assets/landing.png";
import Topbar from "../components/Topbar";
export default function Landing() {
  return (
    <>
    <Topbar/>
    <div className="flex flex-col-reverse md:flex-row">
  <div className="mx-4 md:mx-20 lg:mx-40">
    <p className="font-bold mb-4">Welcome!<br />
      <span className="font-normal">Smart parking Dashboard</span></p>
    <p className="mb-8">
      Le Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
      Alias saepe voluptatibus odio accusantium asperiores doloremque <br />
      culpa accusamus cum, <br />
      unde eveniet voluptatem consequatur perferendis, illum corrupti facere <br />
      cupiditate fugit id assumenda!
    </p>
    <div className="flex space-x-4 mb-8">
      <button><img src={appstore} width={150} alt="App Store" /></button>
      <button><img src={playstore} width={150} alt="Play Store" /></button>
    </div>
  </div>

  <div className="mx-4 md:mx-10 lg:mx-20 mt-10 md:mt-16 lg:mt-20">
    <img src={landing} width={400} />
  </div>
</div>




    </>
  );
}
