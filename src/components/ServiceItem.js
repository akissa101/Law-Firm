import React from 'react';

const ServiceItem = ({ icon, title, desc }) => {
  return (
    <div className=" items-center  text-white  ">
      <div className="bg-transparent text-white py-2 px-4 rounded-lg ring-1 ">
        <div className="icons text-amber-400 text-3xl flex gap-6">
          {icon}
          <h1 className=" text-2xl pb-4 capitalize ">{title}</h1>
        </div>
        <p className="  text-md leading-md ">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
