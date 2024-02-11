import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log('prisma example');
  // await prisma.task.create({
  //   data: {
  //     content: "wake up",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaPage = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show....</h2>;
  }

  return (
    <div>
      <h1 className="text-7xl">PrismaPage</h1>
      {tasks.map((task) => (
        <h2 key={task.id} className="text-xl p-2 capitalize">
          🛌 {task.content}
        </h2>
      ))}
    </div>
  );
};

export default PrismaPage;
