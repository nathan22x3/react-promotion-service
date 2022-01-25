import React from 'react';
/** @jsxImportSource @emotion/react */
// import tw from 'twin.macro';
import { Navbar, TaskCard } from 'components/index';
import avatarDefault from 'assets/images/avatar-default.png';
import task1 from 'assets/images/task-1.png';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Navbar />
      <TaskCard avatar={avatarDefault} type="followers" name="Nam Khoc Hu Hu" image={task1} />
    </div>
  );
};

App.defaultProps = {};

export default App;
