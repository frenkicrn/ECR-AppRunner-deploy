export const getIndex = (req, res) => res.send({ result: "Hello world!" });

export const postIndex = (req, res) => {
    const { name } = req.body;
    return res.send({ result: `Hello ${name}!` });
};