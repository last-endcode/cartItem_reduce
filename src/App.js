import React from 'react';
import Navbar from './Components/Navbar';
import CartContent from './Components/CartContent';
import { useGlobalContext } from './Components/Context';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <>
      <Navbar />
      <CartContent />
    </>
  );
}

export default App;
