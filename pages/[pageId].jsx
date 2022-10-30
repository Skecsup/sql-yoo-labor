import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Exercise from "../components/Exercise";
import { useAppContext } from "../context/appContext";

const TasksForTables = () => {
  const router = useRouter();
  const tableId = router.query.pageId;
  const [tasks, setTasks] = useState([]);

  const { fetchTableData, tableData } = useAppContext();
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("api/gettasks");
      const data = await response.json();
      setTasks(data.results.filter((task) => task.BelongsTo === tableId));
    };
    fetchTasks();
    fetchTableData(tableId);
  }, [tableId]);
  return (
    <>
      {tasks.map((task, i) => (
        <Exercise
          tableData={tableData}
          title={task.Title}
          serial_number={i + 1}
          description={task.TaskDescription}
          task={task.Task}
          result={task.Solution}
          belongs={task.BelongsTo}
          key={task.TaskID}
        />
      ))}
    </>
  );
};

export default TasksForTables;
