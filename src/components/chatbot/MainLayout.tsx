import CallBob from './CallBob';
// import LanguageDropdown from './LanguageDropdown';
// import { Layout } from 'antd';
// import LanguageManager from './LanguageManager';
// import { Fragment } from 'react';
// import { CallHistory } from './CallHistory';
// import ConversionIdeasModal from './ConversationIdeasModal';
import CallManager from './CallManager';
// import styles from './styles/styles.module.css';

// const { Header, Content } = Layout;
export default function MainLayout() {
  return (
    <div className="flex justify-center items-center h-full w-full">
        <div className='h-full w-full'> 
          {/* <LanguageManager> */}
            <CallManager>
              {/* <Header className="flex bg-[#000e14] items-center h-12 flex-row px-0 justify-end pr-[200px] pl-[200px] text-slate-300">
                <LanguageDropdown />
              </Header> */}
              {/* <Content> */}
                <CallBob />
              {/* </Content> */}
            </CallManager>
          {/* </LanguageManager> */}
        </div>
      </div>
  );
}
