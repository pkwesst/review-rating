import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

export const ReviewStateContext = createContext();
export const ReviewDispatchContext = createContext();

const reducer = (state, action) => {
  let newData = [
    {
      name: "책 이름2",
      content: "리뷰 내용",
      rating: 8,
      created_date: new Date().getTime(),
      id: 1,
    },
  ];
  switch (action.type) {
    case "CREATE": {
      const created_date = new Date().getTime();
      newData = [{ ...action.data, created_date }, ...state];
      break;
    }
    case "READ": {
      newData = [...action.data, ...state];
      break;
    }
    case "EDIT": {
      newData = state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              content: action.newContent,
              rating: action.newRating,
            }
          : it
      );
      break;
    }
    case "REMOVE": {
      newData = state.filter((it) => it.id !== action.targetId);
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("review", JSON.stringify(newData));
  return newData;
};

// API 호출할 경우
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "CREATE": {
//       const created_date = new Date().getTime();

//       const newData = {
//         ...action.data,
//         created_date,
//       };
//       return [newData, ...state];
//     }
//     case "READ": {
//       return action.data;
//     }
//     case "EDIT": {
//       return state.map((it) =>
//         it.id === action.targetId
//           ? {
//               ...it,
//               content: action.newContent,
//               rating: action.newRating,
//             }
//           : it
//       );
//     }
//     case "REMOVE": {
//       return state.filter((it) => it.id !== action.targetId);
//     }
//     default:
//       return state;
//   }
// };

const ReviewContext = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(1);

  // API 호출
  // const getData = async () => {
  //   setTimeout(async () => {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     ).then((res) => res.json());
  //     const initData = res.slice(0, 5).map((it) => {
  //       return {
  //         name: it.name.substr(0, 15),
  //         content: it.body,
  //         rating: Math.floor(Math.random() * 10) + 1,
  //         created_date: new Date().getTime(),
  //         id: dataId.current++,
  //       };
  //     });
  //     dispatch({ type: "READ", data: initData });
  //   }, 1000);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    const localData = localStorage.getItem("review");
    if (localData) {
      const reviewList = JSON.parse(localData);
      dataId.current = parseInt(reviewList[0].id) + 1;
      dispatch({ type: "READ", data: reviewList });
    }
  }, []);

  const onCreate = useCallback((name, content, rating) => {
    dispatch({
      type: "CREATE",
      data: { name, content, rating, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  });

  const onEdit = useCallback((targetId, newContent, newRating) => {
    dispatch({
      type: "EDIT",
      targetId,
      newContent,
      newRating,
    });
  }, []);

  const momoizedDispatch = useMemo(() => {
    return { onCreate, onRemove, onEdit };
  });

  return (
    <div>
      <ReviewStateContext.Provider value={data}>
        <ReviewDispatchContext.Provider value={momoizedDispatch}>
          {children}
        </ReviewDispatchContext.Provider>
      </ReviewStateContext.Provider>
    </div>
  );
};
export default ReviewContext;
