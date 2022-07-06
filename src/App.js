import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <header>What in the Word?</header>
      <main>
        <Search />
      </main>
      <footer className="text-center">
        Coded by{" "}
        <a
          href="https://github.com/taylorrebecca3/react-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          Rebecca Taylor
        </a>
      </footer>
    </div>
  );
}
