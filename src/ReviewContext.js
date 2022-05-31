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
        it.id === action.targetid
          ? {
              ...it,
              content: action.newContent,
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
  const dataId = useRef(0);
  const getData = async () => {
    setTimeout(async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((res) => res.json());

      const initData = res.slice(0, 5).map((it) => {
        return {
          author: it.name,
          content: it.body,
          rating: Math.floor(Math.random() * 10) + 1,
          created_date: new Date().getTime(),
          id: dataId.current++,
        };
      });
      dispatch({ type: "READ", data: initData });
    }, 1000);
  };

  console.log({ data });

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

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({
      type: "EDIT",
      targetId,
      newContent,
    });
  }, []);

  return (
    <div>
      <ReviewStateContext.Provider value={data}>
        <ReviewDispatchContext.Provider value={dispatch}>
          {children}
        </ReviewDispatchContext.Provider>
      </ReviewStateContext.Provider>
    </div>
  );
};
export default ReviewContext;
