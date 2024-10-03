import React, { useState } from 'react'; // Add useState to the import
import Background from './Components/Background/Background';
import Navbar from "./Components/Navbar/Navbar";
export const App = () => {
  let heroData = [
    { text1: "Drive into", text2: "what you love" },
  ];

  // Correct useState hook
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(true); // Fix the typo here

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar/>
    </div>
  )
}

export default App;
