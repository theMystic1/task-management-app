import { useSpecificTask } from "../services/hooks/useSpecificTask";
import EmptyBoard from "../ui/EmptyBoard";
import RoadmapItem from "../features/RoadmapItem";

function RoadMap() {
  const filteredData = "RoadMap";

  type Task = {
    id: number;
    name: string;
    // Define any additional properties for a Task
  };

  type Column = {
    name: string;
    tasks: Task[];
  };

  const { isLoading, task } = useSpecificTask(filteredData);

  // Ensure task is an array of Column or provide a default value
  const tasks: Column[] = task || [];

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="h-screen w-full">
      {tasks.length > 0 ? (
        <RoadmapItem filterString={filteredData} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <EmptyBoard />
        </div>
      )}
    </div>
  );
}

export default RoadMap;
