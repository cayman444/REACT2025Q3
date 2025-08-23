import { useState } from 'react';
import { ControlledForm, UncontrolledForm, DataFormList } from './components';
import { Button, Modal } from './components/ui';

function App() {
  const [isOpenModalUncontrolled, setIsOpenModalUncontrolled] = useState(false);
  const [isOpenModalControlled, setIsOpenModalControlled] = useState(false);

  const closeUncontrolledModal = () => setIsOpenModalUncontrolled(false);
  const closeControlledModal = () => setIsOpenModalControlled(false);

  return (
    <div className="flex flex-col gap-5 p-5">
      <div className="grid grid-cols-2 gap-5 items-center">
        <Button onClick={() => setIsOpenModalUncontrolled(true)}>
          Open uncontrolled form
        </Button>
        <Button onClick={() => setIsOpenModalControlled(true)}>
          Open controlled form
        </Button>
      </div>
      <DataFormList />
      <Modal
        isVisible={isOpenModalUncontrolled}
        onClose={closeUncontrolledModal}
      >
        <UncontrolledForm onCloseModal={closeUncontrolledModal} />
      </Modal>
      <Modal isVisible={isOpenModalControlled} onClose={closeControlledModal}>
        <ControlledForm />
      </Modal>
    </div>
  );
}

export default App;
