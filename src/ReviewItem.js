import { memo, useContext, useRef, useState } from "react";
import { ReviewDispatchContext } from "./ReviewContext";
import styled from "styled-components";
import { HiMinus, HiPlus } from "react-icons/hi";
import { MdDelete, MdEdit, MdClose, MdCheck } from "react-icons/md";

const ReviewItem = ({ id, author, content, rating, created_date }) => {
  const { onRemove, onEdit } = useContext(ReviewDispatchContext);

  const [wantEdit, setWantEdit] = useState(false);
  const toggleWantEdit = () => setWantEdit(!wantEdit);

  const clickDelete = () => {
    if (window.confirm("Delete Review rating ?")) {
      onRemove(id);
    }
  };

  const [currentContent, setCurrentContent] = useState(content);
  const currentContentRef = useRef(null);

  const clickEdit = () => {
    if (currentContent.length < 1) {
      currentContentRef.current.focus();
      return;
    }
    if (window.confirm("Edit Review rating ?")) {
      onEdit(id, currentContent, rating);
      toggleWantEdit();
    }
  };

  const clickCancel = () => {
    setCurrentContent(content);
    toggleWantEdit();
  };

  const clickPlus = () => {
    if (rating < 10) {
      onEdit(id, currentContent, rating + 1);
    }
  };

  const clickMius = () => {
    if (rating > 1) {
      onEdit(id, currentContent, rating - 1);
    }
  };

  return (
    id && (
      <ReviewItemStyle>
        <div className="ReviewItem-container">
          <div className="rating">
            <Button onClick={clickPlus}>
              <HiPlus />
            </Button>
            <span>{rating}</span>
            <Button onClick={clickMius}>
              <HiMinus />
            </Button>
          </div>
          <div className="info-wrap">
            <div className="info-btn">
              <div className="info">
                <span className="author">{author}</span>
                <span className="date">
                  {new Date(created_date).toLocaleDateString()}
                </span>
              </div>
              <div className="btn">
                {wantEdit ? (
                  <span className="btn">
                    <ButtonSmall className="edit" onClick={clickEdit}>
                      <MdCheck />
                    </ButtonSmall>
                    <ButtonSmall className="delete" onClick={clickCancel}>
                      <MdClose />
                    </ButtonSmall>
                  </span>
                ) : (
                  <span>
                    <ButtonSmall className="edit" onClick={toggleWantEdit}>
                      <MdEdit />
                    </ButtonSmall>
                    <ButtonSmall className="delete" onClick={clickDelete}>
                      <MdDelete />
                    </ButtonSmall>
                  </span>
                )}
              </div>
            </div>
            <div className="content">
              {wantEdit ? (
                <textarea
                  autoFocus
                  ref={currentContentRef}
                  value={currentContent}
                  onChange={(e) => setCurrentContent(e.target.value)}
                />
              ) : (
                content
              )}
            </div>
          </div>
        </div>
      </ReviewItemStyle>
    )
  );
};

const ReviewItemStyle = styled.div`
  width: 50vw;
  background-color: #fff;
  border-radius: 7px;
  margin-bottom: 20px;
  padding: 30px;
  letter-spacing: 0.02em;
  word-spacing: 0.1em;
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

  .info-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .info-btn {
    display: flex;
    justify-content: space-between;
  }

  .info {
    padding-left: 20px;
  }

  .author {
    color: hsl(212, 24%, 26%);
    font-weight: 700;
  }

  .date {
    padding-left: 20px;
  }

  .content {
    padding-top: 20px;
    padding-left: 20px;
  }

  .edit:hover {
    color: hsl(238, 40%, 52%);
  }

  .delete:hover {
    color: hsl(358, 79%, 66%);
  }

  .btn {
    display: flex;
    justify-content: flex-end;
  }

  .delete {
    padding-right: 0;
    padding-left: 7px;
  }

  .info-wrap {
    display: flex;
  }

  textarea {
    width: 100%;
    height: 5.45em;
    border: none;
    resize: none;
  }
`;

const Button = styled.button`
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 25% 30%;
  background-color: hsl(228, 33%, 97%);
  color: hsl(239, 57%, 85%);
`;

const ButtonSmall = styled.button`
  border: none;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  color: hsl(239, 57%, 85%);
`;

export default memo(ReviewItem);
