import React from 'react';
import { BiDonateBlood } from 'react-icons/bi';
import { MdBloodtype } from 'react-icons/md';
import { FaHandsHelping } from 'react-icons/fa';

function Main() {
  return (
    <div className='main'>
      <div className='main-title'>
        <h1>Welcome to BloodGram!</h1>
        <div className='main-title-tag'>
          <p className='title-tag'>
            Save a life and connect your lives
            <FaHandsHelping className='hands-helping' />
          </p>
        </div>
      </div>
      <div className='border-line'></div>
      <div className='main-need'>
        <p>Daily an apple keeps you doctor away</p>
        <div className='button'>
          <button className='btn btn-need'>
            Need Blood
            <MdBloodtype />
          </button>
        </div>
      </div>
      <div className='main-donate'>
        <p>There are thousands of people who are in need of blood...</p>
        <div className='button'>
          <button className='btn btn-donate'>
            Donate Now
            <BiDonateBlood />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
