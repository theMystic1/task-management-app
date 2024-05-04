import styled from "styled-components";

export const StyledTaskView = styled.article`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 4rem 2.4rem;
  min-width: 60rem;
  max-width: 65rem;
  background-color: var(--color-grey-0);
`;

export const Header = styled.h1`
  color: var(--color-grey-500);
  font-size: 2.4rem;
  font-weight: 600;
`;

export const P = styled.p`
  color: var(--color-gray-400);
  font-weight: 600;
`;

export const SubTask = styled.li`
  background-color: var(--color-grey-50);
  width: 100%;
  padding: 1rem;
  color: var(--color-grey-500);
  font-weight: 600;
  border-radius: 0.2rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 0.2rem;
  background-color: transparent;
  border: 0.1rem solid var(--color-gray-400);
`;

export const Option = styled.option`
  width: 100%;
  padding: 1rem;
  color: var(--color-grey-500);
`;

interface Subtask {
  title: string;
  isCompleted: boolean;
}

interface Item {
  title: string;
  status?: string;
  description?: string;
  subtasks: Subtask[];
}

interface TaskItemProps {
  item: Item;
}

function TasksView({ item }: TaskItemProps) {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalToggle = () => {
  //   setIsModalOpen(!isModalOpen);
  // };

  const { title, status, subtasks, description } = item;
  const subtaskCount = subtasks.length;
  const completedTasks = subtasks.filter((sub) => sub.isCompleted);
  const completedTasksCount = completedTasks.length;

  const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `;

  return (
    <StyledTaskView>
      <StyledDiv>
        <Header>{title}</Header>
        {/* <Modal>
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
              </Menus.List>

              <Modal.Window name="edit">
                <FormView />
              </Modal.Window>

              <Modal.Window name="delete">
                <Delete type="Board" name={item.title} />
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal> */}
      </StyledDiv>
      <P>{description}</P>
      <span>
        <P as="h2">
          Subtasks ( {completedTasksCount} of {subtaskCount})
        </P>
        <Ul>
          {subtasks.map((tsk, i) => (
            <SubTask style={{ display: "flex", gap: "8px" }} key={i}>
              <input
                type="checkbox"
                defaultChecked={tsk.isCompleted}
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: tsk.isCompleted ? "#667EEA" : "transparent",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  borderColor: "#CBD5E0",
                  // Add any additional styles here
                }}
              />

              <span
                style={{
                  textDecoration: tsk.isCompleted ? "line-through" : "none",
                  color: tsk.isCompleted ? "#828fa3" : "", // Adjust the color according to your design
                }}
              >
                {tsk.title}
              </span>
            </SubTask>
          ))}
        </Ul>
      </span>

      <span>
        <P as="h2">Current Status </P>
        <Select disabled={true}>
          <Option>{status}</Option>
        </Select>
      </span>
    </StyledTaskView>
  );
}

P.defaultProps = {
  as: "p",
};
StyledTaskView.defaultProps = {
  as: "article",
};

export default TasksView;
