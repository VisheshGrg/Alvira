// import { getServerTranslations } from '@/lib/i18n/getServerTranslations';
import MainLayout from './MainLayout';

// @ts-ignore
export const getStaticProps = async context => {
  const { locale } = context;
  return {
    props: {
      // @ts-ignore
      ...(await getServerTranslations(locale, ['common'])),
    },
  };
};

export default function ChatBot() {
  return <MainLayout />;
}
