import React from 'react';

const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => {

  return (
    <div className='quantity-box'>
      <button onClick={onDecrement} disabled={quantity === 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrement}disabled={quantity === 9}>+</button>
    </div>
  );
};

export default QuantitySelector;
