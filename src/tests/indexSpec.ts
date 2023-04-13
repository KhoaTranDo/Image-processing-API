import app from "../../index";
import supertest from 'supertest';

const request = supertest(app);
describe('Test endpoint responses', () => {
    const imageData = {
        filename: "cropland",
        width: 200,
        height: 200,
    };

    it('Test gets the api endpoint with correct data', async () => {
        const response = await request.get(`/images/?filename=${imageData.filename}&width=${imageData.width}&height=${imageData.height}`);
        expect(response.status).toBe(200);
    })
});