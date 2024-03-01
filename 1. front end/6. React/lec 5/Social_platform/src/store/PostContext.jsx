import { createContext, useReducer } from "react";

export const PostContext = createContext();

const reduc_func = (state, action) => {
  let newstate;
  if (action.type === "ADD") {
    newstate = [...state, { title: action.payload.title, body: action.payload.body, userId: action.payload.userId, reactions: 0 , tags:action.payload.tags }];
  } else if (action.type === "DEL") {
    newstate = state.filter((item) => item.title !== action.payload.title && item.body !== action.payload.body);
  } else if (action.type === "UP") {
    newstate = state.map((item, index) =>
      index === action.payload.id ? { ...item, reactions: item.reactions + 1 } : item
    );
  } else if (action.type == "IN"){
    newstate = [...action.payload.list.posts]
  }else {
    // Initialize newstate with current state in case of unknown action type
    newstate = state;
  }
  return newstate;
};
export default function PCP(props) {
  const [postlist, dispatch] = useReducer(reduc_func, [ ]);

  const updatelike = (id)=>{
      const upaction = {
        type: "UP",
        payload: {
          id 
        },
      };
      dispatch(upaction) ;     
  }

  const addpost = (title, body, userId, tags) => {
    const addaction = {
      type: "ADD",
      payload: {
        title,
        body,
        userId,
        reactions: 0,
        tags
      }
    };
    dispatch(addaction);
  };

  const intial = (list)=>{
    const inaction = {
      type : "IN" ,
      payload : {
        list 
      }
    }
    dispatch(inaction) ; 
  }

  const delpost = (id , title, body) => {
    const delaction = {
      type: "DEL",
      payload: {
        id , 
        title,
        body,
      },
    };
    dispatch(delaction);
  };

  return (
    <>
      <PostContext.Provider
        value={{
          list: postlist,
          add: addpost,
          del: delpost,
          up: updatelike,
          in : intial ,
        }}
      >
        {props.children}
      </PostContext.Provider>
    </>
  );
}
