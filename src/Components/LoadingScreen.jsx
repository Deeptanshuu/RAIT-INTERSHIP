import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
    <InfinitySpin
      visible={true}
      width="200"
      color="black"
      ariaLabel="infinity-spin-loading"
    />
    </div>
  );
};

export default LoadingScreen;
