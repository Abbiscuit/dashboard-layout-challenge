import classNames from 'classnames';
import { FC } from 'react';

interface IconProps {
  className?: string;
}

export const ChevronRightIcon: FC<IconProps> = props => {
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
};
