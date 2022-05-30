import Snippet from "./components/booknotes/Snippet";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Snippet
        title="Anything you want - Derek Sivers"
        points={10}
        ReadingDate={10102018} //como se pasa la date?
        ISBN={9781511366076}
        year={2018}
        amazon="https://www.amazon.com/Anything-You-Want-Lessons-Entrepreneur/dp/1511366079"
        review="This book is packed with wisdom and it just makes you feel good reading it. Whether you are an entrepreneur, artist, or someone trying to figure out your next project or next theme of your life, this book is for you!"
      />
    </>
  );
}

export default App;
