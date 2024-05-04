import { useTasks } from "./useTasks";

export function useSpecificTask(filterProp: string) {
  const { isPending: isLoading, tasks } = useTasks();

  const task = tasks?.filter(
    (task) => filterProp.toLowerCase() === task.name.toLowerCase()
  );

  return {
    isLoading,
    task,
  };
}
