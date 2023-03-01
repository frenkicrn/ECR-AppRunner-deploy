import app from '../app.js';
import { fake } from '../libs/test/fakeHTTP.js';

import { getIndexSchema, postIndexSchema } from '../routes/index/schema.js';

const HTTP = fake(app);

beforeAll(() => {});

afterAll( async () => {
    await app.close();
});

test('GET /index', async () => {
    const response = await HTTP.GET('/index', {});
    await matchSchema(response, getIndexSchema, 200);
});

test('POST /index', async () => {
    const body = {
        name: "Alberto"
    };
    const response = await HTTP.POST('/index', { body });
    await matchSchema(response, postIndexSchema, 200);
});