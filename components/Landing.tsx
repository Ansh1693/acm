import React from "react";
import Landsvg from "@/components/media/Landsvg";

const Landing = () => {
  return (
    <div className=" h-screen w-screen flex flex-col items-center justify-evenly bg-land-red cursor-pointer  ">
      <div className="hidden md:flex flex-col justify-evenly items-center space-y-14 ">
        <Landsvg />
        <div className="font-bebas text-white flex items-center justify-evenly ">
          <div className="pr-6">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24.2188C18.6274 24.2188 24 18.8461 24 12.2188C24 5.59133 18.6274 0.21875 12 0.21875C5.37258 0.21875 0 5.59133 0 12.2188C0 18.8461 5.37258 24.2188 12 24.2188ZM13.113 6.41241C12.8737 5.68304 11.8314 5.68304 11.592 6.41241L10.5572 9.56543C10.4501 9.89161 10.1431 10.1124 9.79663 10.1124H6.44783C5.67318 10.1124 5.35109 11.0939 5.9778 11.5445L8.68703 13.4932C8.96731 13.6948 9.08458 14.0522 8.97753 14.3784L7.9427 17.5313C7.70331 18.2607 8.54654 18.8673 9.17325 18.4165L11.8825 16.4678C12.1628 16.2663 12.5423 16.2663 12.8225 16.4678L15.5318 18.4165C16.1585 18.8673 17.0017 18.2607 16.7623 17.5313L15.7275 14.3784C15.6205 14.0522 15.7377 13.6948 16.018 13.4932L18.7272 11.5445C19.3539 11.0939 19.0319 10.1124 18.2572 10.1124H14.9084C14.562 10.1124 14.2549 9.89161 14.1479 9.56543L13.113 6.41241Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-2xl lg:text-4xl ">
            yeah “DV Social” hai aur hum ek creative content marketing agency
            hai.
          </span>
          <div className="pl-6">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24.2188C18.6274 24.2188 24 18.8461 24 12.2188C24 5.59133 18.6274 0.21875 12 0.21875C5.37258 0.21875 0 5.59133 0 12.2188C0 18.8461 5.37258 24.2188 12 24.2188ZM13.113 6.41241C12.8737 5.68304 11.8314 5.68304 11.592 6.41241L10.5572 9.56543C10.4501 9.89161 10.1431 10.1124 9.79663 10.1124H6.44783C5.67318 10.1124 5.35109 11.0939 5.9778 11.5445L8.68703 13.4932C8.96731 13.6948 9.08458 14.0522 8.97753 14.3784L7.9427 17.5313C7.70331 18.2607 8.54654 18.8673 9.17325 18.4165L11.8825 16.4678C12.1628 16.2663 12.5423 16.2663 12.8225 16.4678L15.5318 18.4165C16.1585 18.8673 17.0017 18.2607 16.7623 17.5313L15.7275 14.3784C15.6205 14.0522 15.7377 13.6948 16.018 13.4932L18.7272 11.5445C19.3539 11.0939 19.0319 10.1124 18.2572 10.1124H14.9084C14.562 10.1124 14.2549 9.89161 14.1479 9.56543L13.113 6.41241Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-24 px-4 md:hidden text-7xl  text-white font-bold font-dm">
        <div className="flex justify-center items-center">Swipe Up!</div>
        <div className="font-bebas text-white flex items-center justify-center ">
          <div className="pr-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24.2188C18.6274 24.2188 24 18.8461 24 12.2188C24 5.59133 18.6274 0.21875 12 0.21875C5.37258 0.21875 0 5.59133 0 12.2188C0 18.8461 5.37258 24.2188 12 24.2188ZM13.113 6.41241C12.8737 5.68304 11.8314 5.68304 11.592 6.41241L10.5572 9.56543C10.4501 9.89161 10.1431 10.1124 9.79663 10.1124H6.44783C5.67318 10.1124 5.35109 11.0939 5.9778 11.5445L8.68703 13.4932C8.96731 13.6948 9.08458 14.0522 8.97753 14.3784L7.9427 17.5313C7.70331 18.2607 8.54654 18.8673 9.17325 18.4165L11.8825 16.4678C12.1628 16.2663 12.5423 16.2663 12.8225 16.4678L15.5318 18.4165C16.1585 18.8673 17.0017 18.2607 16.7623 17.5313L15.7275 14.3784C15.6205 14.0522 15.7377 13.6948 16.018 13.4932L18.7272 11.5445C19.3539 11.0939 19.0319 10.1124 18.2572 10.1124H14.9084C14.562 10.1124 14.2549 9.89161 14.1479 9.56543L13.113 6.41241Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-xl flex text-center lg:text-4xl ">
            yeah “DV Social” hai aur hum ek creative content marketing agency
            hai.
          </span>
          <div className="pl-2">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 24.2188C18.6274 24.2188 24 18.8461 24 12.2188C24 5.59133 18.6274 0.21875 12 0.21875C5.37258 0.21875 0 5.59133 0 12.2188C0 18.8461 5.37258 24.2188 12 24.2188ZM13.113 6.41241C12.8737 5.68304 11.8314 5.68304 11.592 6.41241L10.5572 9.56543C10.4501 9.89161 10.1431 10.1124 9.79663 10.1124H6.44783C5.67318 10.1124 5.35109 11.0939 5.9778 11.5445L8.68703 13.4932C8.96731 13.6948 9.08458 14.0522 8.97753 14.3784L7.9427 17.5313C7.70331 18.2607 8.54654 18.8673 9.17325 18.4165L11.8825 16.4678C12.1628 16.2663 12.5423 16.2663 12.8225 16.4678L15.5318 18.4165C16.1585 18.8673 17.0017 18.2607 16.7623 17.5313L15.7275 14.3784C15.6205 14.0522 15.7377 13.6948 16.018 13.4932L18.7272 11.5445C19.3539 11.0939 19.0319 10.1124 18.2572 10.1124H14.9084C14.562 10.1124 14.2549 9.89161 14.1479 9.56543L13.113 6.41241Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between  items-center ">
        <div className="h-12 w-8 rounded-full border-2 mr-5 flex items-center justify-center border-white">
          <span className="h-2 w-2 rounded-full bg-white animate-scroll">
            &nbsp;
          </span>
        </div>
        <div className="font-bebas text-white text-2xl ">Click to discover</div>
      </div>
    </div>
  );
};

export default Landing;
