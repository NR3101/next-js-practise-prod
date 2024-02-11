import Link from "next/link";
import React from "react";

const InfoPage = () => {
  return (
    <div>
      <h1 className="text-bold text-3xl text-center text-rose-400">InfoPage</h1>

      <Link className="text-xl font-semibold text-teal-600" href="/about">
        About Page
      </Link>
    </div>
  );
};

export default InfoPage;
