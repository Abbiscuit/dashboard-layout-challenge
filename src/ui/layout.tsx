import classNames from 'classnames';
import Header from '../app/Header';
import Footer from './footer';

interface HeaderProps {
  padding?: boolean;
  header?: boolean;
  footer?: boolean;
  bgColor?: boolean;
}

const Layout: React.FC<HeaderProps> = props => {
  const { children, padding, header, footer, bgColor } = props;

  // prettier-ignore
  const rootStyle = classNames(
    'flex',
    'flex-col',
    'min-h-screen',
    {
      ['bg-gray-100']: bgColor
    }
  );

  const mainStyle = classNames({
    ['px-4 py-4']: padding,
  });

  return (
    <div className={rootStyle}>
      {header && <Header />}
      <main className={classNames(mainStyle, 'flex-1')}>{children}</main>
      {footer && <Footer />}
    </div>
  );
};

export default Layout;
