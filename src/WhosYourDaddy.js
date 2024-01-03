import React, { useContext } from "react";
import DaddyContext from "./DaddyContext";

export default function WhosYourDaddy({id,children}){
  const daddyId = useContext(DaddyContext)
  return (
    <DaddyContext.Provider value={id}>
      <code style={{ backgroundColor: "yellow" }}>
        I'm {id}, {daddyId ? `my daddy is ${daddyId}` : "I have no daddy"}
      </code>
      {children}
    </DaddyContext.Provider>
  )
}
