import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status)
    return (
      <AiFillHeart
        color="#ff6b81"
        size={60}
        onClick={toggle}
        cursor="pointer"
      />
    );
  return <AiOutlineHeart size={60} onClick={toggle} cursor="pointer" />;
};

export default Like;
