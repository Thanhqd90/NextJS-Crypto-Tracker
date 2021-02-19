import Head from "next/head";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Homepage</h1>

      <SearchBar />
    </div>
  );
}
