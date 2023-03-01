import {
    getIndex,
    postIndex
} from "./controller.js";

export const getIndexSchema = {
    schema: {
        tags: ["INDEX"],
        response: {
            200: {
                type: "object",
                required: ["result"],
                properties: {
                    result: { type: "string" }
                }
            }
        }
    },
    handler: getIndex
};

export const postIndexSchema = {
    schema: {
        tags: ["INDEX"],
        body: {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" }
            },
            additionalProperties: false
        },
        response: {
            200: {
                type: "object",
                required: ["result"],
                properties: {
                    result: { type: "string" }
                }
            }
        }
    },
    handler: postIndex
};