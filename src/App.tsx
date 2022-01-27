/** @jsxImportSource @emotion/react */
import { ReactComponent as ScrollToTopIcon } from 'assets/svgs/arrowhead-up.svg';
import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import { Button, ButtonIcon, Footer, Navbar, Task, TaskCard } from 'components';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:8080/tasks');
      const blob = await res.json();
      setTasks(blob);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="wrapper" css={tw`relative flex flex-col gap-y-5 my-10`}>
        <div css={tw`flex justify-between items-center`}>
          <h1>Task list</h1>
          <Button label="Create task" icon={<PlusIcon />} variant="primary" />
        </div>
        <div css={tw`grid grid-cols-4 gap-5`}>
          {tasks.map((task, index) => (
            <TaskCard key={task.name + index} {...task} />
          ))}
        </div>
        <div css={tw`self-end sticky bottom-16 z-50 transform translate-x-[150%]`}>
          <ButtonIcon icon={<ScrollToTopIcon />} size="lg" border="circle" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
