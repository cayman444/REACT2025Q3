import { useState } from 'react';
import { ModalControlled, ModalUncontrolled } from './components';
import { Button } from './components/ui';

function App() {
  const [isOpenControlledModal, setIsOpenControlledModal] = useState(false);
  const [isOpenUnControlledModal, setIsOpenUnControlledModal] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-5 items-center">
        <Button onClick={() => setIsOpenUnControlledModal(true)}>
          Open uncontrolled form
        </Button>
        <Button onClick={() => setIsOpenControlledModal(true)}>
          Open controlled form
        </Button>
      </div>
      <ModalUncontrolled
        isOpen={isOpenUnControlledModal}
        onCloseModal={() => setIsOpenUnControlledModal(false)}
      />
      <ModalControlled
        isOpen={isOpenControlledModal}
        onCloseModal={() => setIsOpenControlledModal(false)}
      />
    </div>
  );
}

export default App;
