import errorsService from "./Error.service";
import errorStore from './Error.model';

jest.mock('./Error.model');

describe('ErrorService', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('adds a error successfully', async () => {
    const error = "Error";
    await errorsService.setError(error);
    expect(errorStore.setError).toHaveBeenCalledTimes(1);
    expect(errorStore.setError).toHaveBeenCalledWith(error);
  });
});