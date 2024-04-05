import { test, expect, APIResponse, APIRequestContext } from '@playwright/test';
import { ExchangeRateDetails } from '../types';

test.describe('API test - Exchange rate', () => {
  const apiEndpoint = 'https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD';

  const makeRequest: (request: APIRequestContext) => Promise<{ response: APIResponse, responseBody: ExchangeRateDetails }> = async (request: APIRequestContext) => {
    const response: APIResponse = await request.get(apiEndpoint);
    expect(response.ok()).toBeTruthy(); 
    return { response, responseBody: await response.json() }
  }

  test('It should verify the HTTP status is 200', async ({ request }) => {
    const makeARequest = await makeRequest(request);
    expect(makeARequest.response.status()).toBe(200);
  });

  test('It should verify that the currency "GBP" is shown within the response', async ({ request }) => {
    const makeARequest = await makeRequest(request);
    expect(makeARequest.responseBody).toHaveProperty('conversion_rates');
    expect(makeARequest.responseBody.conversion_rates).toHaveProperty('GBP');
  });

  test('It should count the total number of currencies returned within the response', async ({ request }) => {
    const makeARequest = await makeRequest(request);
    console.log('The total number of currencies returned within the response is: ', Object.keys(makeARequest.responseBody.conversion_rates).length);
    expect(Object.keys(makeARequest.responseBody.conversion_rates).length).toBe(162);
  });
})
