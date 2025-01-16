'use client';

import React, { useState, useEffect } from 'react';
import './discount.css';

import { AnimatedGradient } from './animated-gradient';


export default function ChristmasPopup() {
  const [show, setShow] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [snowflakes, setSnowflakes] = useState([]);
  const [showBullet, setShowBullet] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 10000);

    const generateSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          left: Math.random() * window.innerWidth,
          duration: Math.random() * 5 + 5,
          size: Math.random() * 10 + 10,
        });
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();

    const countdownTimer = setInterval(() => {
      const now = new Date(); // Current date and time
    const targetDate = new Date(2025, 0, 30); // January 6th, 2025


      const difference = targetDate.getTime() - now.getTime(); // Time difference in milliseconds

      // Calculate time components
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Set countdown display
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    }, 1000);


    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    setSuccessMessage('');
    setShowBullet(true);

  };

  const handleReopenPopup = () => {
    setShow(true);
    setShowBullet(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const phoneNumber = document.getElementById('phoneInput').value;

    try {
      const response = await fetch('/api/discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Danke schön! Unser Team wird sich in Kürze bei Ihnen melden');
        setTimeout(() => {
          handleClose();
        }, 5000);
      } else {
        setSuccessMessage('Bitte versuchen Sie es später noch einmal.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später.');
    } finally {
      setLoading(false);
    }
  };

  if (!show && !showBullet) return null;

  return (
    <>
      {show && (
        <div id="christmasPopup" className="popup-overlay relative">
        <AnimatedGradient />
    <div className="popup-content">
      <button id="closeButton" onClick={handleClose}>
        &times;
      </button>
      <h2 id="popupTitle">New Year Gift!</h2>
      <div id="popupBody">
        <h4 id="discountText">Startup Landing page in 200 Euros 🌐</h4>
        <p id="offerText">Offer ends in:</p>
        <div id="countdown">
          {countdown.split(' ').map((unit, index) => (
            <span key={index}>{unit}</span>
          ))}
        </div>
        {!successMessage ? (
          <form id="phoneForm" onSubmit={handleSubmit}>
            <label htmlFor="phoneInput">Enter your email for a free consultation:</label>
            <input type="tel" id="phoneInput" required />
            <button type="submit" id="submitButton" disabled={loading}>
              {loading ? 'Sending...' : 'Get it now'}
            </button>
          </form>
        ) : (
          <p className="success-message">{successMessage}</p>
        )}
      </div>
    </div>


          {snowflakes.map((flake) => (
            <div
              key={flake.id}
              className="snowflake"
              style={{
                left: `${flake.left}px`,
                fontSize: `${flake.size}px`,
                animationDuration: `${flake.duration}s`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

      {showBullet && (
        <div id="bulletIcon" onClick={handleReopenPopup}>
          <span>🌐</span>
          <span>€200</span>
          <span>Website</span>
          <span>🌐</span>
        </div>
      )}
    </>
  );
}
