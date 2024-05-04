import { useQuery } from "@tanstack/react-query";
import { getTasksApi } from "../Apis/fetchTasks";

export function useTasks() {
  const {
    isPending,
    data: tasks,
    error,
  } = useQuery({
    queryKey: ["boards"],
    queryFn: getTasksApi,
  });

  return {
    isPending,
    tasks,
    error,
  };
}
