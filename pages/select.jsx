import React, { useEffect, useState } from "react";
import Exercise from "../components/Exercise";

const Select = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api/gettasks");
      const data = await response.json();
      setTasks(data.results);
    };
    fetchData();
  }, []);
  return (
    <div>
      {tasks.map((task) => (
        <Exercise
          title={task.Title}
          serial_number={task.TaskID}
          description={task.TaskDescription}
          task={task.Task}
          result={task.Solution}
          key={task.TaskID}
        />
      ))}
    </div>
  );
};

export default Select;
