import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Sidebar } from "../src/components/Sidebar/Sidebar";
import { Video } from "../src/components/Video/Video";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header/Header";

export default function Home({ data }) {
  const [speed, setSpeed] = useState(1);
  const [chosenVideo, setChosenVideo] = useState(data[0].url);
  const [theme, setTheme] = useState(dark);
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Video Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <main className={styles.main}>
        {isLoading ? (
          <div className="loaderWrapper">
            <div className="loader" />
          </div>
        ) : (
          <div className="wrapperwholepage">
            <Header />
            <Video speed={speed} setSpeed={setSpeed} chosenVideo={chosenVideo} />

            <Sidebar
              speed={speed}
              setSpeed={setSpeed}
              data={data}
              setChosenVideo={setChosenVideo}
              toggleTheme={toggleTheme}
              theme={theme}
              chosenVideo={chosenVideo}
            />
          </div>
        )}
      </main>
    </ThemeProvider>
  );
}

// getStaticProps melhora a performance, bom para SEO -
// com getStaticProps o server usa o data e faz o cache
// import normal iria para o client side e n faria o cache

export async function getStaticProps() {
  const { vids } = await import("../data/data.json");

  return {
    props: {
      data: vids,
    },
  };
}
