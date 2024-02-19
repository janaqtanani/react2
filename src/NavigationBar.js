import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/product">products</a></li>
        <li><a href="/payment">Payment</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;