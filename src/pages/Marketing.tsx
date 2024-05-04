// import EmptyBoard from "../ui/EmptyBoard";
import TaskItemItem from "../features/TasksItemsItem";

function Marketing() {
  const filterData = "Marketing Plan";
  return (
    <div className="h-screen w-full">
      {/* <div className="flex items-center justify-center h-full">
        <EmptyBoard />
      </div> */}

      <TaskItemItem filterString={filterData} />
    </div>
  );
}

export default Marketing;
