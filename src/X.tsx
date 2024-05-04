import { useTasks } from "./services/hooks/useTasks";

function X(): JSX.Element {
  const { isPending: isLoading, tasks } = useTasks();
  console.log(tasks);

  if (isLoading) return <p>Loading</p>;

  return <div>hELLO rEACT</div>;
}

export default X;
