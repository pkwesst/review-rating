import { useContext, useRef, useState } from "react";
import { ReviewDispatchContext } from "../ReviewContext";
import styled from "styled-components";
import ReviewRating from "./ReviewRating";

const ReviewCreate = () => {
  const { onCreate } = useContext(ReviewDispatchContext);
  const [review, setReview] = useState({
    name: "",
    content: "",
    rating: "",
  });

  const changeReview = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const nameRef = useRef(null);
  const contentRef = useRef(null);

  const ButtonChangeReview = () => {
    if (review.name.length < 1) {
      nameRef.current.focus();
      return;
    }
    if (review.content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (review.rating.length < 1) {
      window.confirm("Click rating number !");
      return;
    }
    onCreate(review.name, review.content, review.rating);
    alert("Add Review !");

    setReview({
      name: "",
      content: "",
      rating: "",
    });
  };

  return (
    <ReviewCreateStyle>
      <div className="ReviewCreate-container">
        <h2>What's Review rating ?</h2>
        <ReviewRating selected={changeReview} />
        <div className="input-button">
          <div className="input-wrap">
            <textarea
              className="name"
              name="name"
              placeholder="Item"
              type="text"
              maxLength={15}
              ref={nameRef}
              value={review.name}
              onChange={changeReview}
            />
            <textarea
              className="content"
              name="content"
              placeholder="Add a review"
              type="text"
              maxLength={131}
              ref={contentRef}
              value={review.content}
              onChange={changeReview}
            />
          </div>
          <div className="send-button">
            <button onClick={ButtonChangeReview}>SEND</button>
          </div>
        </div>
      </div>
    </ReviewCreateStyle>
  );
};

const ReviewCreateStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;

  .ReviewCreate-container {
    width: 50vw;
    display: flex;
    min-height: 17em;
    margin-top: 20px;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    word-break: break-word;
    background-color: #fff;
    border-radius: 5px;
    letter-spacing: 0.02em;
    word-spacing: 0.1em;
  }

  .input-button {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .input-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    margin-right: 40px;
  }

  .name {
    resize: none;
    padding-top: 8px;
    padding-left: 10px;
    height: 30%;
    margin-bottom: 20px;
    font-size: 13px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    word-spacing: 1px;
    ::placeholder {
      font-family: "Poppins", sans-serif;
    }
  }

  .content {
    resize: none;
    height: 70%;
    padding: 9px;
    font-size: 13px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;

    ::placeholder {
      font-family: "Poppins", sans-serif;
    }
  }

  .send-button button {
    width: 5em;
    height: 10em;
    font-size: 13px;
    border: none;
    border-radius: 7px;
    background-color: hsl(211, 10%, 45%);
    color: hsl(228, 33%, 97%);
    cursor: pointer;

    &:hover {
      background-color: hsl(212, 24%, 26%);
      color: hsl(228, 33%, 97%);
    }
  }
`;
export default ReviewCreate;
