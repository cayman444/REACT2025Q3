import { ModalControlled, ModalUncontrolled } from './components';
import { toggleModalVisible } from './store/Modals';
import { useAppDispatch } from './hooks';
import { Button } from './components/ui';
import { MODAL_TYPE } from './constants';

function App() {
  const dispatch = useAppDispatch();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex gap-5 items-center">
        <Button
          onClick={() => dispatch(toggleModalVisible(MODAL_TYPE.UNCONTROLLED))}
        >
          Open uncontrolled form
        </Button>
        <Button
          onClick={() => dispatch(toggleModalVisible(MODAL_TYPE.CONTROLLED))}
        >
          Open controlled form
        </Button>
      </div>
      <ModalUncontrolled />
      <ModalControlled />
    </div>
  );
}

export default App;
