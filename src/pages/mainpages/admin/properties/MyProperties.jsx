import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import AnyProperties from './anyproperties/any_properties';
import './properties.scss';
import LandProperties from './lands/land_properties';
import ApartmentProperties from './apartments/apartment_properties';
import ShopProperties from './shops/shop_properties';

const InfoAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 0.5s ${InfoAnimation};
`;

const MyProperties = () => {
  // const isSmallerThanLgScreen = useMediaQuery({ query: `(max-width: ${gridBreakpoints.lg})` });
  const [openProperties, setOpenProperties] = useState('any');

  return (
    <main>
      <div className="container py-8 mx-auto">
        <div className="flex flex-row justify-between">
          <h5 className="font-bold text-2xl font-bold">321 Properties are avaliable</h5>
          <div>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white mr-3 text-sm py-2 px-4 rounded "
            to={'/add-properties'}
          >
            Add Properties
          </Link>
           <Link
            className="bg-emerald-500 hover:bg-emerald-700 text-white text-sm py-2 px-4 rounded "
            to={'/view-users'}
          >
           View Users
          </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center setting-top">
          <div className="d-flex justify-content-center align-items-center">
            <div className="setting-title-wrapper" onClick={() => setOpenProperties('any')}>
              <span className="setting-title">Any</span>
              <div className={`underline ${openProperties === 'any' && 'underline-growth'}`}></div>
            </div>
            <div className="setting-title-wrapper" onClick={() => setOpenProperties('lands')}>
              <span className="setting-title">Lands</span>
              <div
                className={`underline ${openProperties === 'lands' && 'underline-growth'}`}
              ></div>
            </div>
            <div className="setting-title-wrapper" onClick={() => setOpenProperties('apartments')}>
              <span className="setting-title">Apartment</span>
              <div
                className={`underline ${openProperties === 'apartments' && 'underline-growth'}`}
              ></div>
            </div>
            <div className="setting-title-wrapper" onClick={() => setOpenProperties('shops')}>
              <span className="setting-title">Shops</span>
              <div
                className={`underline ${openProperties === 'shops' && 'underline-growth'}`}
              ></div>
            </div>
          </div>
        </div>
        {openProperties === 'any' && (
          <FadeDiv>
            {' '}
            <AnyProperties />
          </FadeDiv>
        )}
        {openProperties === 'lands' && (
          <FadeDiv>
            {' '}
            <LandProperties />
          </FadeDiv>
        )}
        {openProperties === 'apartments' && (
          <FadeDiv>
            {' '}
            <ApartmentProperties />
          </FadeDiv>
        )}
        {openProperties === 'shops' && (
          <FadeDiv>
            {' '}
            <ShopProperties />
          </FadeDiv>
        )}
      </div>
    </main>
  );
};

export default MyProperties;
