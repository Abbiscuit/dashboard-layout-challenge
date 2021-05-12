import { useRef, useState } from 'react';
import { Button } from '../../ui/Button';

export const TutorialButton = (): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    ref.current?.focus();
  };

  return (
    <>
      {typeof window !== 'undefined' && (
        <Tutorial show={isOpen} onHide={handleClose} />
      )}

      <Button
        variant="secondary"
        // variant="skeleton"
        // size="md"
        // shape="rounded"
        ref={ref}
        onClick={handleOpen}
      >
        Tutorial!
      </Button>
    </>
  );
};

function Tutorial({ show, onHide }) {
  return (
    show && (
      <div>
        <h1>Tutorial</h1>
        <Button onClick={onHide}>Close</Button>
      </div>
    )
  );
}
