import classNames from 'classnames';
import { FC, FormHTMLAttributes } from 'react';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

const Form: FC<FormProps> = props => {
  const { className, ...rest } = props;

  const baseStyle = 'bg-white shadow-lg max-w-sm text-center py-4 px-4 rounded';

  return (
    <form className={classNames(baseStyle, className)} {...rest}>
      {props.children}
    </form>
  );
};

export default Form;
