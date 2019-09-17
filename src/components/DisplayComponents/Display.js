import React from "react";

const Display = numbers => {
  return (
    <div className="display">{numbers.display === "" ? "0" : numbers.display}
    </div>
  );
};

export default Display;