"use client";

import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        className="btn btn-accent mr-3"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button
        className="btn btn-accent"
        onClick={() => {
          if (count >= 1) setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default ClientPage;
