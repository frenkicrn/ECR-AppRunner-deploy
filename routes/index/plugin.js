import {
    getIndexSchema,
    postIndexSchema
} from "./schema.js";

export const indexPlugin = (fastify, options, done) => {
    fastify.get("/", getIndexSchema);
    fastify.post("/", postIndexSchema);

    done();
};