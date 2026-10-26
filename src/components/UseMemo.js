
import React, { useMemo } from "react";

function UseMemo({ todos = [] }) {
  const taskCount = useMemo(() => {
    return todos.length;
  }, [todos]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Total tasks: {taskCount}</p>
    </div>
  );
}

export default UseMemo;
