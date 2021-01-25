import React, { useState } from "react";

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(!isOpened);
  const open = () => setIsOpened(true);
  const close = () => setIsOpened(false);
  return { toggle, open, close, isOpened };
};

export default useModal;
