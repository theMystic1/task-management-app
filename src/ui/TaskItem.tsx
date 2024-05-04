import styled from "styled-components";
import Modal from "./Modal";
import TasksView from "./TasksView";
import Menus from "./Menus";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";
import FormView from "./FormView";
import Delete from "./Delete";

const StyledTaskItem = styled.li`
  background-color: var(--color-grey-0);
  min-height: 12rem;
  padding: 1.2rem;
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.1);
  list-style: none;
`;

const H1 = styled.h1`
  color: var(--color-grey-500);
  font-size: 2.4rem;
  font-weight: 600;
`;

const P = styled.p`
  color: var(--color-gray-400);
  font-size: 1.8rem;
`;

interface Subtask {
  title: string;
  isCompleted: boolean;
  // Add other properties of Subtask if needed
}

interface Item {
  title: string;
  status?: string;
  description?: string;
  subtasks: Subtask[];
}

interface TaskItemProps {
  item: Item;
  onCloseModal?: () => void; // Add onCloseModal prop
}

function TaskItem({ item }: TaskItemProps) {
  const title = item.title;
  const subtasks = item.subtasks || [];
  const subtaskCount = subtasks.length;
  const completedTasks = subtasks.filter((sub) => sub.isCompleted);
  const completedTasksCount = completedTasks.length;

  // function handleCloseModal() {
  //   console.log("Modal closed");
  // }

  return (
    // <Modal>
    //   <Modal.Open opens={title}>
    <StyledTaskItem>
      <div
        className="flex justify-between items-center"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <H1>{title}</H1>

        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={item.title} />
              <Menus.List id={item.title}>
                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="view">
                  <Menus.Button icon={<HiEye />}>View</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <FormView type="edit" />
              </Modal.Window>

              <Modal.Window name="delete">
                <Delete type="Task" name={item.title} />
              </Modal.Window>

              <Modal.Window name="view">
                <TasksView item={item} />
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal>
      </div>
      <P>{`${completedTasksCount} of ${subtaskCount} subtasks `}</P>
    </StyledTaskItem>

    //   <Modal.Window name={title} onCloseModal={handleCloseModal}>
    //     <TasksView item={item} />
    //   </Modal.Window>
    // </Modal>
  );
}

export default TaskItem;
