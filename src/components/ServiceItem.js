import React from 'react';

const ServiceItem = ({ icon, title, desc }) => {
  return (
    <div className=" items-center bg-white  shadow-sm shadow-gray-400 dark:shadow-gray-700 dark:bg-black dark:text-black my-1 py-2 md:px-4 rounded-md border dark:border-gray-700 border-gray-400 ">
      <div className="iconstext-4xl flex gap-6">
        <span className="text-red-600 text-4xl"> {icon}</span>
        <h1 className=" text-2xl pb-4 capitalize text-amber-700 dark:text-red-300  ">
          {title}
        </h1>
      </div>
      <p className="  text-md leading-md text-black dark:text-gray-200 px-2">
        {desc}
      </p>
    </div>
  );
};

export default ServiceItem;
