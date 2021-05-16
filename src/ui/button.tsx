import { FC } from 'react';

const Button: FC<{ onClick?: () => void }> = props => {
  return (
    <button
      onClick={props.onClick}
      className="px-3 py-1 text-white bg-yellow-500 rounded-md"
    >
      {props.children}
    </button>
  );
};

export default Button;
