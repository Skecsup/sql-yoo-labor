import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Exercise from "../components/Exercise";

const Home = () => {
  return (
    <div>
      <h1>{`Welcome to SQL - YOO! Let's learn SQL together!`}</h1>
      <p>Select one of the tables on the sidebar to start the tasks.</p>
    </div>
  );
};

export default Home;
