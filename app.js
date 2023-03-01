import Fastify from "fastify";
import fastifySwaggerPlugin from './libs/swaggerPlugin.js';
import fastifySwagger from "@fastify/swagger";
import { indexPlugin } from "./routes/index/plugin.js";
import { calculatorPlugin } from "./routes/calculator/plugin.js";
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from "ajv-formats";

const ajv = new Ajv2020({
    coerceTypes: true,
    useDefaults: true,
    removeAdditional: false,
    allErrors: false
});

addFormats(ajv);

const app = Fastify();

app.register(fastifySwagger, {
    openapi: {
        info: { title: "fastify-api", version: "1.0.0" },
        tags: [
            { name: "CALCULATOR", description: "Calculator API" },
            { name: "INDEX", description: "Index API" },
            { name: "PROVA", description: "Prova API" },
        ],
        openapi: "3.1.0"
    }
});
app.register(fastifySwaggerPlugin, {
    exposeRoute: true,
    routePrefix: '/docs'
});

app.register(indexPlugin, { prefix: "/index" });

app.register(calculatorPlugin, { prefix: "/calculator" });


export default app;