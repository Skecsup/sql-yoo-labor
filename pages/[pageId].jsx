import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Exercise from "../components/Exercise";

const TasksForTables = () => {
  const router = useRouter();
  const tableId = router.query.pageId;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/gettasks");
      const data = await response.json();
      setTasks(data.results.filter((task) => task.BelongsTo === tableId));
    };
    fetchData();
  }, [tableId]);
  return (
    <div>
      {tasks.map((task) => (
        <Exercise
          title={task.Title}
          serial_number={task.TaskID}
          description={task.TaskDescription}
          task={task.Task}
          result={task.Solution}
          belongs={task.BelongsTo}
          key={task.TaskID}
        />
      ))}
    </div>
  );
};

export default TasksForTables;
