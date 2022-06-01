import Globalstyle from "./GlobalStyle";
import ReviewContext from "./ReviewContext";
import ReviewCreate from "./ReviewCreate";
import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import ReviewList from "./ReviewList";

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
