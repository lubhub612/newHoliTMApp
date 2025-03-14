import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
    // Initialize the Telegram Web App
    const tg = window.Telegram.WebApp;

    // Expand the mini app to full screen
    tg.expand();

    // Enable the main button (optional)
    tg.MainButton.setText('Start bot');
    tg.MainButton.show();
  } else {
    console.log('This app is not running inside Telegram.');
  }
  }, []);

  const handleStartButtonClick = () => {
    if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Send data to the bot
    tg.sendData(JSON.stringify({ command: '/start' }));

    // Optionally, close the mini app after sending data
    tg.close();
  } else {
    console.log('This app is not running inside Telegram.');
  }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Telegram Mini App</h1>
      <button
        onClick={handleStartButtonClick}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Start bot
      </button>
    </div>
  );
};

export default App;