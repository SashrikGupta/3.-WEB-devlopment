import React, { createContext, useContext, useState, useEffect } from "react";

export const curr_config = createContext();

export default function Config(props) {
 
   const logged_in_userid = "65f75a45f9dc867aed963277"
   const back_key = "http://localhost:1934"


  return (
    <>
      <curr_config.Provider value={{logged_in_userid , back_key}}>
        {props.children}
      </curr_config.Provider>
    </>
  );
}
