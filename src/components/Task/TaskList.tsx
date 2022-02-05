/** @jsxImportSource @emotion/react */
import { ReactComponent as PlusIcon } from 'assets/svgs/plus.svg';
import type { Task } from 'components';
import { Button, Container, TaskCard } from 'components';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:8080/tasks');
      const data = await res.json();
      setTasks(data);
    })();
  }, []);

  return (
    <Container
      title="Task list"
      right={<Button label="Create task" icon={<PlusIcon />} variant="primary" />}
    >
      <div css={tw`flex flex-col gap-y-5`}>
        <div css={tw`grid grid-cols-4 gap-5`}>
          {tasks.map((task, index) => (
            <TaskCard key={task.name + index} {...task} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TaskList;
