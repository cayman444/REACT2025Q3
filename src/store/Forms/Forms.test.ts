import formsReducer, {
  setControlledFormData,
  setUncontrolledFormData,
} from './Forms.slice';

describe('Forms.slice', () => {
  const mockData = {
    username: 'test',
    age: '20',
    country: 'Spain',
    email: 'test@test.com',
    file: '',
    password: 'Aa2@',
    confirmPassword: 'Aa2@',
    gender: 'male',
    insurance: 'on',
  };

  it('should add form data', () => {
    expect(
      formsReducer(
        { controlledFormData: [], uncontrolledFormData: [], countries: [] },
        setControlledFormData(mockData)
      )
    ).toEqual({
      controlledFormData: [mockData],
      uncontrolledFormData: [],
      countries: [],
    });

    expect(
      formsReducer(
        { controlledFormData: [], uncontrolledFormData: [], countries: [] },
        setUncontrolledFormData(mockData)
      )
    ).toEqual({
      controlledFormData: [],
      uncontrolledFormData: [mockData],
      countries: [],
    });
  });
});
