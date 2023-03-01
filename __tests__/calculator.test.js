import app from '../app.js';
import { fake } from "../libs/test/fakeHTTP.js";


import { minusCalculatorSchema, plusCalculatorSchema } from '../routes/calculator/schema.js';

const HTTP = fake(app);

beforeAll(() => {});

afterAll( async () => {
    await app.close();
});

test('POST /calculator/plus', async () => {
    const body = {
        a: 1,
        b: 2
    };
    const response = await HTTP.POST('/calculator/plus', { body });
    await matchSchema(response, plusCalculatorSchema, 200);
    expect(response.json().result).toEqual(3);
});

test('POST /calculator/minus', async () => {
    const body = {
        a: 1,
        b: 2
    };
    const response = await HTTP.POST('/calculator/minus', { body });
    await matchSchema(response, minusCalculatorSchema, 200);
    expect(response.json().result).toEqual(-1);
});