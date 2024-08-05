import React, { createContext, useState } from "react";
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [modalOpen, setMoodalOpen] = useState(false);
  const [userActive, setUserActive] = useState(true);

  const toggleModal = () => {
    setMoodalOpen(!modalOpen);
  };

  const toggleUserActive = () => {
    setUserActive(!userActive);
  };

  return (
    <MyContext.Provider
      value={{
        modalOpen,
        toggleModal,
        userActive,
        toggleUserActive,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export { MyContext, MyContextProvider };
