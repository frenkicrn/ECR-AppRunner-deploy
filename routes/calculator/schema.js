import {
    plusCalculator,
    minusCalculator,
    keep,
    list,
    removecalculator
} from "./controller.js";

export const Calculator = {
    tags: ["CALCULATOR"],
    body: {
        type: "object",
        required: ["a", "b"],
        properties: {
            a: { type: "number" },
            b: { type: "number" }
        },
        additionalProperties: false
    },
    response: {
        200: {
            type: "object",
            required: ["result"],
            properties: {
                result: { type: "number" },
            },
            additionalProperties: false
        }
    }
};

export const prova = {
    tags: ["PROVA"],
    body: {
        type: "object",
        required: ["note"],
        properties:{
            note: { type: "string" }
        },
        additionalProperties: false
    },
    response: {
        200: {
            type: "object",
            required: ["result"],
            properties: {
                result: { type: "string" },
            },
        }
    }
};

export const Get = {
    tags: ["PROVA"],
    response: {
        200: {
            type: "object",
            required: ["result"],
            properties: {
                result: { type: "string" },
            },
        }
    }
};

export const remove = {
    tags: ["PROVA"],
    body: {
        type: "object",
        required: ["note"],
        properties:{
            note: { type: "number" }
        },
        additionalProperties: false
    },
    response: {
        200: {
            type: "object",
            required: ["result"],
            properties: {
                result: { type: "string" },
            },
        }
    }
};

export const plusCalculatorSchema = {
    schema: Calculator,
    handler: plusCalculator
};

export const minusCalculatorSchema = {
    schema: Calculator,
    handler: minusCalculator
};

export const ProvaSchema = {
    schema: prova,
    handler: keep
};

export const GetSchema = {
    schema: Get,
    handler: list
}

export const RemoveSchema = {
    schema: prova,
    handler: removecalculator
}