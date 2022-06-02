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
  switch (action.type) {
    case "CREATE": {
      const created_date = new Date().getTime();

      const newData = {
        ...action.data,
        created_date,
      };
      return [newData, ...state];
    }
    case "READ": {
      return action.data;
    }
    case "EDIT": {
      return state.map((it) =>
        it.id === action.targetId
          ? {
              ...it,
              content: action.newContent,
              rating: action.newRating,
            }
          : it
      );
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
};

const ReviewContext = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(1);

  const getData = async () => {
    setTimeout(async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((res) => res.json());

      const initData = res.slice(0, 25).map((it) => {
        return {
          author: it.name.substr(0, 15),
          content: it.body,
          rating: Math.floor(Math.random() * 10) + 1,
          created_date: new Date().getTime(),
          id: dataId.current++,
        };
      });
      dispatch({ type: "READ", data: initData });
    }, 1000);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, rating) => {
    dispatch({
      type: "CREATE",
      data: { author, content, rating, id: dataId.current },
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
