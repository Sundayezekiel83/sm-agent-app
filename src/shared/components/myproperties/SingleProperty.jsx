import React from 'react';

const SingleProperty = ({
  propertyName,
  propertyPrice,
  propertyLocation,
  propertyDuration,
  propertyAvaliablity,
  noLease,
  propertyImage,
}) => {
  return (
    <>
      <div class="max-w-sm rounded-lg overflow-hidden shadow-lg  m-3 ">
        <img class="w-full " src={propertyImage} alt="Sunset in the mountains" />

        <div class="px-6 pt-4 pb-2 flex flex-row justify-between  ">
          <span class="inline-block bg-emerald-300  rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2">
            {propertyAvaliablity}
          </span>
          <span class="inline-block bg-indigo-500 rounded-full px-3 py-1 text-md font-semibold text-white mr-2 mb-2">
            {noLease} Lease{' '}
          </span>
        </div>

        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2">{propertyName}</div>
          <p class="text-gray-700 text-base">{propertyLocation}</p>
        </div>

        <div class="px-6 py-2">
          <div class="font-bold text-xl mb-2 text-emerald-500">
            {propertyPrice}/<small className="text-xl text-gray-500">Month</small>
          </div>
          <p class="text-gray-700 text-base">{propertyDuration}</p>
        </div>
      </div>
    </>
  );
};

export default SingleProperty;
