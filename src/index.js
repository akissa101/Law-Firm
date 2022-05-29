import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/themeContext';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import './assets/styles/reset.css';
import './index.css';
import App from './App';
import 'aos/dist/aos.css';
import 'flag-icon-css/css/flag-icons.min.css';
import './i18n';

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <ThemeProvider>
        <body className="bg-gray-200 dark:bg-black  transition-all">
          <App />
        </body>
      </ThemeProvider>
    </React.StrictMode>
    ,
  </Suspense>,
  document.getElementById('root')
);
