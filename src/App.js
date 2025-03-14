import React from 'react';
//import { useWebApp } from '@tma.js/sdk';
import WebApp from '@twa-dev/sdk';

const App = () => {
  //const webApp = useWebApp();

  const handleStartButtonClick = () => {
    // Send the /start command to the bot
    WebApp.sendData(JSON.stringify({ command: '/start' }));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Telegram Mini App</h1>
      <button
        onClick={handleStartButtonClick}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Start Bot
      </button>
    </div>
  );
};

export default App;