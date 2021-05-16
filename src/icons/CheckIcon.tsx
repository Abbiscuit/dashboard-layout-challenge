import classNames from 'classnames';
import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const CheckIcon: FC<IconProps> = props => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(className, 'w-4 h-4')}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};
