import { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import { useAuth } from "../../hooks/useAuth";

const TASKS = gql(`
  query GetTasksByUser($userId: ID!) {
    getTasksByUser(userId: $userId) {
      createdAt
      id
      todo
    }
  }
`);

const ADDTASK = gql(`
  mutation AddTask($input: addTaskInput) {
    addTask(input: $input) {
      createdAt
      id
      todo
    }
  }
`);

const DELETETASK = gql(`
  mutation DeleteTask($taskId: ID!) {
    deleteTask(id: $taskId) {
      createdAt
      id
      todo
    }
  }
`);

const Tasklist = () => {
  const { user } = useAuth();

  const [todo, setTodo] = useState("");

  const { data } = useQuery(TASKS, {
    variables: {
      userId: user.id,
    },
  });

  const [addTaskMutation] = useMutation(ADDTASK, {
    variables: {
      input: {
        todo: todo,
        userId: parseInt(user.id),
      },
    },
    refetchQueries: [
      {
        query: TASKS,
        variables: { userId: user.id },
        awaitRefetchQueries: true,
      },
    ],
  });

  const [deleteTaskMutation] = useMutation(DELETETASK);

  function deleteTask(taskId) {
    deleteTaskMutation({
      variables: {
        taskId: taskId,
      },
      refetchQueries: [
        {
          query: TASKS,
          variables: { userId: user.id },
          awaitRefetchQueries: true,
        },
      ],
    });
  }

  return (
    <div className=" flex flex-col items-center">
      <h1 className=" text-4xl m-16 font-bold">Tasklist Web App</h1>
      <div className="p-6">
        <input
          className=" bg-slate-100 rounded-md p-4 m-4"
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Create a new task"
        />
        <button
          onClick={addTaskMutation}
          className=" bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600"
        >
          Add Tasks
        </button>
      </div>
      <div>
        {data?.getTasksByUser?.length > 0 ? (
          <ul>
            {data.getTasksByUser.map((task) => (
              <div
                className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md"
                key={task.id}
              >
                <li className="self-center font-semibold pr-10 mr-6 grow">
                  {task.todo}
                </li>
                <button
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                  className=" bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div>
            <p>No Task Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasklist;
