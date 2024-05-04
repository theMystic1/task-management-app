import styled from "styled-components";
import PageColumn from "../ui/PageColumns";
import PageRow from "../ui/PageRow";
import TaskItem from "../ui/TaskItem";
import { useSpecificTask } from "../services/hooks/useSpecificTask";

const StyledHeading = styled.h2`
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.6rem;
  font-weight: 600;
`;

const Circle = styled.div`
  border-radius: 50%;
  height: 2.4rem;
  width: 2.4rem;
  background-color: ${(prop) => prop.color};
`;

// Define the Task type before using it
type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: [];
};

function RoadmapItem({ filterString }: { filterString: string }): JSX.Element {
  const { isLoading, task } = useSpecificTask(filterString);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const columns = task?.map((tsk) => tsk.columns);
  const tasksByColumn = columns?.flat()?.map((arr) => arr.tasks);

  const nowTasks: Task[] = tasksByColumn?.[0] || [];
  const nextTasks: Task[] = tasksByColumn?.[1] || [];
  const laterTasks: Task[] = tasksByColumn?.[2] || [];

  return (
    <PageRow columns="repeat(3, 1fr)">
      <PageColumn>
        <span className="flex gap-4">
          <Circle color="#49c4e5" />
          <StyledHeading>Now ({nowTasks.length})</StyledHeading>
        </span>
        {nowTasks.map((task, index) => (
          <TaskItem item={task} key={index} />
        ))}
      </PageColumn>
      <PageColumn>
        <span className="flex gap-4">
          <Circle color="#8471f2" />
          <StyledHeading>Next ({nextTasks.length})</StyledHeading>
        </span>
        {nextTasks.map((task, index) => (
          <TaskItem item={task} key={index} />
        ))}
      </PageColumn>
      <PageColumn>
        <span className="flex gap-4">
          <Circle color="#67e2ae" />
          <StyledHeading>Later ({laterTasks.length})</StyledHeading>
        </span>
        {laterTasks.map((task, index) => (
          <TaskItem item={task} key={index} />
        ))}
      </PageColumn>
    </PageRow>
  );
}

export default RoadmapItem;
