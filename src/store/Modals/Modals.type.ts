export interface formDataModal {
  isVisible: boolean;
  data: unknown[];
}

export interface ModalsState {
  uncontrolledModal: formDataModal;
  controlledModal: formDataModal;
}
