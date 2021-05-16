import Button from './button';
import CardTitle from './cardTitle';

const Card = (props: {
  title?: string;
  onClick: () => void;
  message?: string;
  buttonTitle?: string;
}) => {
  return (
    <div
      style={{ maxWidth: 468 }}
      className="p-4 bg-white border rounded-md shadow-md border-gray-50 hover:bg-gray-50"
    >
      <div className="pb-2 mb-2 border-b">
        <CardTitle>{props.title}</CardTitle>
        <p className="text-sm text-gray-700">Sub Header</p>
      </div>
      <div className="mb-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto optio
          quia dolorum. Quibusdam totam cupiditate harum ad, eveniet sit
          dolorum?
        </p>
      </div>
      <div className="">
        <Button onClick={props.onClick}>{props.buttonTitle}</Button>
      </div>
    </div>
  );
};

export default Card;
