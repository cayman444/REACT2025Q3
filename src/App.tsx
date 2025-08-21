import { ControlledForm, UncontrolledForm } from './components';
import { Button, Modal } from './components/ui';
import { useState } from 'react';

function App() {
  const [isOpenModalUncontrolled, setIsOpenModalUncontrolled] = useState(false);
  const [isOpenModalControlled, setIsOpenModalControlled] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-5 items-center">
        <Button onClick={() => setIsOpenModalUncontrolled(true)}>
          Open uncontrolled form
        </Button>
        <Button onClick={() => setIsOpenModalControlled(true)}>
          Open controlled form
        </Button>
      </div>
      <Modal
        isVisible={isOpenModalUncontrolled}
        onClose={() => setIsOpenModalUncontrolled(false)}
      >
        <UncontrolledForm />
      </Modal>
      <Modal
        isVisible={isOpenModalControlled}
        onClose={() => setIsOpenModalControlled(false)}
      >
        <ControlledForm />
      </Modal>
    </div>
  );
}

export default App;
