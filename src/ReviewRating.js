import styled from "styled-components";

const ReviewRating = ({ selected }) => {
  return (
    <ReviewRatingStyle>
      <div>
        <ul className="rating">
          <li key={1}>
            <input
              type="radio"
              id="1"
              name="rating"
              value={1}
              onChange={selected}
            />
            <label htmlFor="1">1</label>
          </li>
          <li key={2}>
            <input
              id="2"
              name="rating"
              type="radio"
              value={2}
              onChange={selected}
            />
            <label htmlFor="2">2</label>
          </li>
          <li key={3}>
            <input
              id="3"
              name="rating"
              type="radio"
              value={3}
              onChange={selected}
            />
            <label htmlFor="3">3</label>
          </li>
          <li key={4}>
            <input
              id="4"
              name="rating"
              type="radio"
              value={4}
              onChange={selected}
            />
            <label htmlFor="4">4</label>
          </li>
          <li key={5}>
            <input
              id="5"
              name="rating"
              type="radio"
              value={5}
              onChange={selected}
            />
            <label htmlFor="5">5</label>
          </li>
          <li key={6}>
            <input
              id="6"
              name="rating"
              type="radio"
              value={6}
              onChange={selected}
            />
            <label htmlFor="6">6</label>
          </li>
          <li key={7}>
            <input
              id="7"
              name="rating"
              type="radio"
              value={7}
              onChange={selected}
            />
            <label htmlFor="7">7</label>
          </li>
          <li key={8}>
            <input
              id="8"
              name="rating"
              type="radio"
              value={8}
              onChange={selected}
            />
            <label htmlFor="8">8</label>
          </li>
          <li key={9}>
            <input
              id="9"
              name="rating"
              type="radio"
              value={9}
              onChange={selected}
            />
            <label htmlFor="9">9</label>
          </li>
          <li key={10}>
            <input
              id="10"
              name="rating"
              type="radio"
              value={10}
              onChange={selected}
            />
            <label htmlFor="10">10</label>
          </li>
        </ul>
      </div>
    </ReviewRatingStyle>
  );
};

const ReviewRatingStyle = styled.div`
  width: 90%;
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0;
  }

  .rating li {
    display: flex;
    justify-content: space-around;
    positon: relative;
    background: hsl(228, 33%, 97%);
    width: 26px;
    height: 26px;
    border-radius: 50%;
    font-size: 16px;
    padding: 10px;
    transition: 0.1s;
    color: hsl(239, 57%, 85%);
  }

  .rating li label {
    position: absolute;
    padding: 5px 10px;
    cursor: pointer;
  }

  .rating li:hover {
    background-color: hsl(238, 40%, 52%);
    color: #fff;
  }

  [type="radio"] {
    opacity: 0;
  }

  [type="radio"]:checked ~ label {
    background: hsl(238, 40%, 52%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 26px;
    height: 23px;
    border-radius: 50%;
    font-size: 16px;
    padding: 10px;
    padding-top: 13px;
    position: absolute;
    top: 14.69em;
  }

  @media (max-width: 1030px) {
    .rating li {
      width: 15px;
      height: 15px;
      font-size: 13px;
    }

    .rating li label {
      position: absolute;
      top: 18.4em;
      // padding: 10px;
      cursor: pointer;
      padding: 7px;
    }

    [type="radio"]:checked ~ label {
      position: absolute;
      top: 18.1em;
      width: 15px;
      height: 12px;
      font-size: 13px;
    }
  }
`;

export default ReviewRating;
