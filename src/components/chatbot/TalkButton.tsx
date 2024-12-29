// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { faMicrophone, faMicrophoneSlash, faSquare } from '@fortawesome/free-solid-svg-icons';
// import { useTranslation } from 'next-i18next';
import Lottie from "lottie-react";
import aiAnimation from "../../../public/Animation - 1725269749563.json";
import aiAnimation2 from "../../../public/Animation - 1725269749563.json";
import aiAnimation3 from "../../../public/Animation - 1725269749563.json";

import { INITIALS } from './initials';

import { FaSquare } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa";
import { MdPhoneDisabled } from "react-icons/md";

interface TalkButtonProps {
  userCall: () => void;
  userSpeak: () => void;
  userStopSpeaking: () => void;
  listening: boolean;
  isCalling: boolean;
  endCall: () => void;
  isChatbotSpeaking: boolean;
}

export default function TalkButton({
  userCall,
  userSpeak,
  userStopSpeaking,
  listening,
  isCalling,
  endCall,
  isChatbotSpeaking,
}: TalkButtonProps) {
  // const { t } = useTranslation();
  if (!isCalling) {
    return (
      <div className="w-auto flex flex-row items-center justify-center">
        <Lottie animationData={aiAnimation} loop={true} className="w-[60px] h-[60px]" />
        <div className='flex flex-row justify-center items-center align-middle'>
          <button
            className="cursor-pointer outline-none md:text-base text-white border-none"
            onClick={userCall}
            style={{ height: '40px' }} // Match the button height with the icon
          >
            <div className="w-[110px] h-[30px] text-xl text-[#212529] font-bold flex justify-center items-center transition-all duration-300 ease-in-out hover:text-slate-500">
              {INITIALS.call}
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center flex-row items-center absolute bottom-7 md:relative lg:bottom-0">
      {listening ? (
        <div className='flex flex-row items-center justify-center'>
          <button className="py-4" onClick={userStopSpeaking}>
            <span className="relative flex h-[40px] w-[40px]">
              {/* <span className="absolute inline-flex h-full w-full rounded-full bg-[#adb5bd] "></span> */}
              <span className="relative inline-flex rounded-full h-[40px] w-[40px] bg-[#adb5bd] justify-center items-center">
                  <FaSquare size="18" color="black" className='opacity-80' />
              </span>
            </span>
          </button>
          <Lottie animationData={aiAnimation3} loop={true} className="w-[70px] h-[70px]" />
        </div>
      ) : (
        <div className='flex flex-row items-center justify-center'>
          <button
            className={`py-4 ${isChatbotSpeaking ? 'pointer-events-none' : ''}`}
            onClick={userSpeak}
          >
            <span className="relative flex h-[40px] w-[40px] mr-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-gray-300"></span>
              <span
                className={`relative inline-flex rounded-full h-[40px] w-[40px] justify-center items-center bg-[#adb5bd]`}
              >
                {/* <FontAwesomeIcon
                  icon={isChatbotSpeaking ? faMicrophoneSlash : faMicrophone}
                  style={{ color: 'white', fontSize: '20px' }}
                ></FontAwesomeIcon> */}
                {!isChatbotSpeaking && (<FaMicrophone size="25" color="black" className='opacity-80' />)}
                {isChatbotSpeaking && (<FaMicrophoneSlash  size="25" color="black" className='opacity-80' />)}
              </span>
            </span>
          </button>
          {isChatbotSpeaking && <Lottie animationData={aiAnimation2} loop={true} className="w-[70px] h-[70px]" />}
          {/* {!isChatbotSpeaking && <p className='ml-2 mr-4 font-bold text-[#212529]'>Tap to Speak</p>} */}
        </div>
      )}

      <button
        className="cursor-pointer outline-none h-[40px] w-[40px] text-red-700 bg-[#adb5bd] rounded-full border-none border-r-5 shadow pl-2 pr-2 ml-2"
        onClick={endCall}
      >
        {/* {INITIALS.hangUp} */}
        <MdPhoneDisabled size="25" />
        
      </button>
    </div>
  );
}
