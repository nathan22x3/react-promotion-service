import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import { ReactComponent as ScrollToTopIcon } from 'assets/svgs/arrowhead-up.svg';
import { Button, Navbar, TaskCard, Task } from 'components';
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Footer from 'components/Footer';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8080/tasks');
      const blob = await res.json();
      setTasks(blob);
      console.log(blob);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <main className="wrapper" css={tw`flex flex-col gap-y-5 my-10`}>
        <div css={tw`flex justify-between items-center`}>
          <h1>Task list</h1>
          <Button label="Create task" icon={<PlusIcon />} variant="filled" />
        </div>
        <div css={tw`grid grid-cols-4 gap-5`}>
          {tasks.map((task, index) => (
            <TaskCard key={task.name + index} {...task} />
          ))}
        </div>
        <div
          css={tw`fixed right-8 bottom-24 z-50 flex justify-center items-center w-[50px] h-[50px] rounded-full bg-gray-700 text-gray-600 text-[36px]`}
        >
          <ScrollToTopIcon />
        </div>
      </main>
      <Footer />
    </div>
  );
};

App.defaultProps = {};

export default App;
