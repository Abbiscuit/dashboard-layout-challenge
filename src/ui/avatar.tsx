import classNames from 'classnames';
import { FC, ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  variant?: Variant;
  src?: string;
}

type Variant = 'rounded' | 'square';

const Avatar: FC<AvatarProps> = props => {
  const { className, variant, src } = props;

  const mapVariant = (variant: Variant) => {
    switch (variant) {
      case 'rounded':
        return classNames('rounded-full');
      case 'square':
        return classNames('rounded-none');
    }
  };

  return (
    <img
      src={src}
      className={classNames(
        mapVariant(variant),
        'object-cover w-full h-full',
        className
      )}
    />
  );
};

Avatar.defaultProps = {
  variant: 'rounded',
};

export default Avatar;
