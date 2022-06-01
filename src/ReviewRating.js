import styled from "styled-components";

const ReviewRating = () => {
  return (
    <ReviewRatingStyle>
      <div>
        <ul className="rating">
          <li>
            <input type="radio" />
            <label htmlFor="1">1</label>
          </li>
          <li>
            <input type="radio" />
            <label htmlFor="2">2</label>
          </li>
          <li>
            <input type="radio" />
            <label>3</label>
          </li>
          <li>
            <input type="radio" />
            <label>4</label>
          </li>
          <li>
            <input type="radio" />
            <label>5</label>
          </li>
          <li>
            <input type="radio" />
            <label>6</label>
          </li>
          <li>
            <input type="radio" />
            <label>7</label>
          </li>
          <li>
            <input type="radio" />
            <label>8</label>
          </li>
          <li>
            <input type="radio" />
            <label>9</label>
          </li>
          <li>
            <input type="radio" />
            <label>10</label>
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

  li {
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
    background: hsl(211, 10%, 45%);
    color: #fff;
  }

  [type="radio"] {
    opacity: 0;
  }

  [type="radio"]:checked {
    background: #ff6a95;
    color: #fff;
  }
`;

export default ReviewRating;
