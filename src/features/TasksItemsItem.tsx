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

function TaskItemItem({ filterString }: { filterString: string }): JSX.Element {
  const { isLoading, task } = useSpecificTask(filterString);

  // console.log(task);

  const columns = task?.map((tsk) => tsk.columns);

  const colArr = columns?.flat();
  const colArrObj = colArr?.map((arr) => arr.tasks);
  // console.log(colArrObj?.flat());
  const flatArr = colArrObj?.flat();

  const todos = flatArr?.filter((arr) => arr.status === "Todo");

  const doing = flatArr?.filter((arr) => arr.status === "Doing");
  const done = flatArr?.filter((arr) => arr.status === "Done");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <PageRow columns="repeat(3, 1fr)">
      <PageColumn>
        <span className="flex gap-4">
          <Circle color="#49c4e5" />
          <StyledHeading>todo ({todos?.length})</StyledHeading>
        </span>
        {todos?.map((todo, i) => (
          <TaskItem item={todo} key={i} />
        ))}
      </PageColumn>
      <PageColumn>
        <span className="flex gap-4">
          <Circle color="#8471f2" />
          <StyledHeading>Doing ({doing?.length})</StyledHeading>
        </span>
        {doing?.map((doing, i) => (
          <TaskItem item={doing} key={i} />
        ))}{" "}
      </PageColumn>
      <PageColumn>
        <span className="flex gap-4">
          <Circle color="#67e2ae" />
          <StyledHeading>done ({done?.length})</StyledHeading>
        </span>
        {done?.map((don, i) => (
          <TaskItem item={don} key={i} />
        ))}
      </PageColumn>
    </PageRow>
  );
}

export default TaskItemItem;
