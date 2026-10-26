
import React from "react";

const ReactMemo = React.memo(function ReactMemo({ count }) {
  return (
    <div>
      <h2>React.memo Example</h2>
      <p>Current counter value: {count}</p>
    </div>
  );
});

export default ReactMemo;
