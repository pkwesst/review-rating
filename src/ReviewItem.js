import styled from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi";
import { memo } from "react";

const ReviewItemStyle = styled.div`
  width: 50vw;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 30px;
  letter-spacing: 0.02em;
  word-spacing: 0.1em;
  ord-break: break-word;
  line-height: 1.3;
  color: hsl(211, 10%, 45%); // 본문 폰트

  .ReviewItem-container {
    display: flex;
  }

  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: hsl(228, 33%, 97%);
    min-width: 50px;
    border-radius: 5px;
    color: hsl(238, 40%, 52%);
    font-weight: 700;
  }
  .info {
    margin-left: 17px;
  }
  .author {
    color: hsl(212, 24%, 26%);
    font-weight: 700;
  }

  .content {
    padding-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 40% 30%;
  background-color: hsl(228,33%,97%);
  color: hsl(239, 57%, 85%)
}
`;

const ReviewItem = ({ id, author, content, rating, created_date }) => {
  return (
    <ReviewItemStyle>
      <div className="ReviewItem-container">
        <div className="rating">
          <Button>
            <HiPlus />
          </Button>
          <span>{rating}</span>
          <Button>
            <HiMinus />
          </Button>
        </div>
        <div className="info">
          <span className="author">{author}</span>
          <span className="date">
            {new Date(created_date).toLocaleString()}
          </span>
          <div className="content">{content}</div>
        </div>
      </div>
    </ReviewItemStyle>
  );
};

export default memo(ReviewItem);
