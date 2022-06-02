import Globalstyle from "./components/GlobalStyle";
import ReviewContext from "./ReviewContext";
import ReviewCreate from "./components/ReviewCreate";
import ReviewHeader from "./components/ReviewHeader";
import ReviewItem from "./components/ReviewItem";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <div className="App">
      <ReviewContext>
        <Globalstyle />
        <ReviewHeader />
        <ReviewCreate />
        <ReviewList />
        <ReviewItem />
      </ReviewContext>
    </div>
  );
}

export default App;
