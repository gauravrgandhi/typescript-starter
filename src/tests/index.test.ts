import request from "supertest";
import app from "../app";

describe("GET /", () =>
{    
    it("should return response => Express + TypeScript Server", async () => {
        const res = await request(app).get("/");
        expect(res.text.length).toBeGreaterThan(0);
    });
});