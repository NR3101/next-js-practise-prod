import TaskFormCustom from "@/components/TaskFormCustom";
import TasksList from "@/components/TasksList";

export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TasksList />
    </div>
  );
};

export default TasksPage;
