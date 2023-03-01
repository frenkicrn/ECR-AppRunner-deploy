import {
    plusCalculatorSchema,
    minusCalculatorSchema,
    ProvaSchema,
    GetSchema,
    RemoveSchema
} from "./schema.js";

export const calculatorPlugin = (fastify, options, done) => {
    fastify.post("/plus", plusCalculatorSchema);
    fastify.post("/minus", minusCalculatorSchema);
    fastify.post("/add", ProvaSchema);
    fastify.get("/casca", GetSchema);
    fastify.delete("/remove/:note", RemoveSchema);

    done();
};