import React from "react";
import Exercise from "../components/Exercise";
import exc from "../data/exercise.json";

const Select = () => {
  return (
    <div>
      {exc.exercises.map((ex, index) => (
        <Exercise
          title={ex.title}
          serial_number={ex.serial_number}
          description={ex.description}
          task={ex.task}
          basic_query={ex.basic_query}
          result={ex.result}
          key={index}
        />
      ))}
    </div>
  );
};

export default Select;
