import React, { useState } from "react";
import MyContext from "./MyContext";

export default function MyProvider(props) {
  const [state, setstate] = useState({
    loading: false,
  });

  return (
    <MyContext.Provider
      value={{
        loading: state.loading,
        onLoading: (val) => {
          setstate({ ...state, loading: true });
        },
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
