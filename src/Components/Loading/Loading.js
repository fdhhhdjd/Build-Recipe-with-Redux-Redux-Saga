import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Loading = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((current) => --current);
    }, 1000);
    count === 0 && history.push("/login");
    return () => clearInterval(timer);
  }, [count, history]);
  return (
    <div>
      <h1>Bạn chờ {count} là sẽ logout ra nha 🤨</h1>
    </div>
  );
};

export default Loading;
