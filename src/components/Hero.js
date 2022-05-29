import hummerImg from '../assets/images/hummer.jpg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative ">
      <div className="">
        <img src={hummerImg} alt="" className="h-screen  w-full" />
      </div>
      <div className="absolute top-24 md:top-64 lg:top-32 right-8 w-[72%]  lg:w-[54%] h-[60%] lg:h-80 bg-white dark:bg-black dark:text-gray-200 bg-opacity-40 dark:bg-opacity-80 shadow-indigo-700 shadow-sm rounded-xl flex flex-col  z-10">
        <h2 className="text-center pt-16 lg:pt-8 text-sm md:text-lg lg:text-xl uppercase">
          {t('hero_subheading')}
        </h2>{' '}
        <h1 className="py-8 md:py-16 lg:py-4 text-2xl md:text-3xl font-extrabold text-center uppercase">
          {t('hero_heading')}
        </h1>
        <p className="text-sm md:text-md text-center lg:leading-4 px-[5%] md:px-[10%]">
          {t('hero_desc')}
        </p>
        <button
          type="button"
          className="bg-orange-800 text-gray-200 px-16  py-3 m-12   rounded-xl hover:bg-orange-300 "
        >
          {t('hero_btn')}
        </button>
      </div>
    </div>
  );
};

export default Hero;
