// import EmptyBoard from "../ui/EmptyBoard";
import TaskItemItem from "../features/TasksItemsItem";

function Marketing() {
  const filterData = "Marketing Plan";
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <div className="flex items-center justify-center h-full">
        <EmptyBoard />
      </div> */}

      <TaskItemItem filterString={filterData} />
    </div>
  );
}

export default Marketing;
