import Snippet from "./components/booknotes/Snippet";
import Header from "./components/Header";
import { bookNotes } from "./data/notes.js";
import shortid from "shortid";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      {bookNotes.map((data) => (
        <Snippet
          key={shortid.generate()}
          title={data.title}
          points={data.points}
          ReadingDate={data.readingDate} //como se pasa la date?
          ISBN={data.ISBN}
          year={data.year}
          amazon={data.amazon}
          review={data.review}
        />
      ))}
    </>
  );
}

export default App;
