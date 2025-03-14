import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Initialize the Telegram Web App
    const tg = window.Telegram.WebApp;

    // Expand the mini app to full screen
    tg.expand();

    // Enable the main button (optional)
    tg.MainButton.setText('Start bot');
    tg.MainButton.show();
  }, []);

  const handleStartButtonClick = () => {
    const tg = window.Telegram.WebApp;

    // Send data to the bot
    tg.sendData(JSON.stringify({ command: '/start' }));

    // Optionally, close the mini app after sending data
    tg.close();
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