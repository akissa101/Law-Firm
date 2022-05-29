import React, { useState } from 'react';
import cookies from 'js-cookie';
import classNames from 'classnames';
import i18next from 'i18next';
import { IoMdArrowDropdown } from 'react-icons/io';
import languages from './Languages';

const DropdownLanguage = () => {
  let currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  return (
    <div className="  border-x-2 border-slate-400 dark:border-gray-800 bg-orange-300  px-4 dark:bg-black rounded-lg flex justify-center items-center">
      {/* {languages.map(({ code, name, country_code }) => ( */}
      <div>
        {currentLanguageCode === 'en' ? (
          <button
            className="flex items-center"
            onClick={() => {
              i18next.changeLanguage((currentLanguageCode = 'ar'));
            }}
          >
            {(currentLanguageCode = 'عبربي')}
            <span
              className={`flag-icon flag-icon-${(currentLanguageCode =
                'sa')} mx-2`}
            ></span>
          </button>
        ) : (
          <button
            className="flex items-center"
            onClick={() => {
              i18next.changeLanguage((currentLanguageCode = 'en'));
            }}
          >
            {(currentLanguageCode = 'en')}
            <span
              className={`flag-icon flag-icon-${(currentLanguageCode =
                'gb')} mx-2`}
            ></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default DropdownLanguage;
