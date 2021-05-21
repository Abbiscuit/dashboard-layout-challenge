import classNames from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: FC<InputProps> = props => {
  const { className, ...rest } = props;

  const baseStyle =
    'bg-gray-50 border border-gray-300 rounded outline-none w-full';
  const hoveredStyle =
    'hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 ring-blue-800';

  return (
    <input
      className={classNames(baseStyle, hoveredStyle, className)}
      {...rest}
    />
  );
};

export default Input;
