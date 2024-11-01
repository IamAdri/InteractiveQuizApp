import Head from "next/head";

import localFont from "next/font/local";
//import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    if (questions === null) {
      fetch("http://localhost:3000/api/questions")
        .then((response) => response.json())
        .then((data) => setQuestions(data));
    } else {
      localStorage.setItem("questions", JSON.stringify(questions));
      setQuestions(questions);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Bine ati venit!</h1>
        <br></br>
        <br></br>
        <h2>
          <Link href="/categories">Categorii</Link>
        </h2>
      </div>
    </>
  );
}
