import apiGatewayService from './ApiGateway.service';

jest.mock('../Config.js', () => {
    return { 
        API_BASE: 'http://localhost:3010'
       }
  });

describe('ApiGateway', () => {

  afterEach(() => {
    jest.clearAllMocks();
    global.fetch.mockRestore();
  });

  beforeEach(() => { 
    const mockResponse = { };
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
       json: () => Promise.resolve(mockResponse),
        ok: true,
      })
     );
  });

 test('should send get request', async () => {
    await apiGatewayService.get("/route");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`http://localhost:3010/route`, {method: 'GET'});
  });

  test('should send post request', async () => {
    const requestBody = {};
    const mockResponse = { };
     jest.spyOn(global, 'fetch').mockImplementation(() =>
       Promise.resolve({
        json: () => Promise.resolve(mockResponse),
         ok: true,
       })
      );
      await apiGatewayService.post("/route", requestBody);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        'http://localhost:3010/route', 
        {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    });

    test('should send put request', async () => {
        const requestBody = {};
          await apiGatewayService.put("/route", requestBody);
          expect(fetch).toHaveBeenCalledTimes(1);
          expect(fetch).toHaveBeenCalledWith(
            'http://localhost:3010/route', 
            {
              method: 'PUT',
              body: JSON.stringify(requestBody),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
        });
  
        test('should send delete request', async () => {
        
            await apiGatewayService.delete("/route");
        
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(
              'http://localhost:3010/route', 
              {
                method: 'DELETE',
              }
            );
    
          });


});