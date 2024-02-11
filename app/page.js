import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl mb-8">NextJS Practise</h1>
      <Link className="btn btn-accent capitalize" href="/client">
      Get started
      </Link>
    </div>
  );
};

export default HomePage;
