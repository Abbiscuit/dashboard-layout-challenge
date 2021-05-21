import classNames from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = props => {
  return (
    <button
      onClick={props.onClick}
      className={classNames(
        'px-3',
        'py-1',
        'text-white',
        'bg-yellow-500',
        'rounded-md'
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
