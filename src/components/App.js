import React, { useState, useEffect, useCallback } from 'react';
     
const App = () => {
  const [ballPosition, setBallPosition] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
 
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowRight' && event.keyCode === 39) {
      setBallPosition(prevPosition => prevPosition + 5);
    }
  }, []);
  
  useEffect(() => {
    if (gameStarted) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [gameStarted, handleKeyDown]);
 
  return (
    <div>
      {!gameStarted ? (
        <button className="start" onClick={() => setGameStarted(true)}>Start</button>
      ) : (
        <div 
          className="ball" 
          style={{
            position: 'absolute',
            left: `${ballPosition}px`
          }}
        >
          ⚪
        </div>
      )}
    </div>
  );
}
 
export default App;