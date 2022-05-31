import Globalstyle from "./GlobalStyle";
import ReviewContext from "./ReviewContext";
import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import ReviewList from "./ReviewList";

function App() {
  return (
    <div className="App">
      <ReviewContext>
        <Globalstyle />
        <ReviewHeader />
        <ReviewList />
        <ReviewItem />
      </ReviewContext>
    </div>
  );
}

export default App;
