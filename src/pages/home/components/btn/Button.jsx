import { useState, useEffect } from "react";

function Button() {
  const [data, setData] = useState(1);

  const handleClick = () => {
    setData(10);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <span>{data}</span>
      <button onClick={handleClick}>Transformamos A</button>
    </div>
  );
}

export default Button;
