// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

interface MessageBoxProps {
  message: string;
}
export default function MessageBox({ message }: MessageBoxProps) {
  return (
    <div className="text-[#212529] font-bold xxs:h-full md:h-auto flex-1 md:mb-5 md:mt-0 xxs:mt-12 xxs:mb-[148px] flex justify-center items-center overflow-y-auto ">
      {/* <FontAwesomeIcon
        icon={faQuoteLeft}
        style={{ color: '#6c757d', fontSize: '30px', paddingRight: '20px' }}
      ></FontAwesomeIcon> */}
      <BiSolidQuoteSingleLeft size="50" color="#212529" className="mr-1 w-[10%]" />

      <div className="h-full flex items-center text-xl w-[90%]">{message}</div>
    </div>
  );
}
