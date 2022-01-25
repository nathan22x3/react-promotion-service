import React from 'react';
/** @jsxImportSource @emotion/react */
// import tw from 'twin.macro';
import { Navbar } from 'components/index';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

App.defaultProps = {};

export default App;
