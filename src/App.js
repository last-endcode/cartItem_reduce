import React from 'react';

// components needed
import Navbar from './Components/Navbar';
import CartContent from './Components/CartContent';
import Loading from './Components/Loading';
import { useGlobalContext } from './Components/Context';

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <main>
        <Navbar />
        <CartContent />
      </main>
    </>
  );
}

export default App;
