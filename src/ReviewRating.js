import styled from "styled-components";

const ReviewRating = () => {
  return (
    <ReviewRatingStyle>
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
    </ReviewRatingStyle>
  );
};

const ReviewRatingStyle = styled.div`
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: space-around;
    positon: relative;
    background: hsl(228, 33%, 97%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 16px;
    padding: 10px;
    transition: 0.1s;
    color: hsl(239, 57%, 85%);
  }

  .rating li label {
    position: absolute;
    padding: 7px 10px;
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
