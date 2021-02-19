import Head from "next/head";
import SearchBar from "../components/SearchBar";
import Coins from "../components/Coins";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crypto Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Homepage</h1>

      <SearchBar type="text" placeholder="Enter currency" />
      <Coins />
    </div>
  );
}
