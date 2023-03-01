import fs from 'fs';
import readline from 'readline';


export const plusCalculator = (req, res) => {
    const { a, b } = req.body;
    const plus = a + b;
    return res.send({ result: plus });
};

export const minusCalculator = (req, res) => {
    const { a, b } = req.body;
    const minus = a - b;
    return res.send({ result: minus });
};

export const keep = async (req, res) => {
    const { note } = req.body;
    global.lc = 0
    const list = async () => {
        const rl = readline.createInterface({
            input: fs.createReadStream('test.txt'),
            crlfDelay: Infinity,
        });
        var n = 0
        let s = ""
        for await (const line of rl) {
            s = s + (` ${n} ${line}`);
            n++
        }
        return s
    }      

    const add = async (text) => {
        var new_line = `\n${text}`
        console.log("ciao")
        await fs.appendFile('test.txt', new_line, function (err) {
            if (err) {
                console.error(err);
                return
            }
        })
        return list()
    }
    const final = await add(note)
    return res.send({ result: final })
}

export const list = async (req, res) => {
    const rl = readline.createInterface({
        input: fs.createReadStream('test.txt'),
        crlfDelay: Infinity,
    });
    var n = 0
    let s = ""
    for await (const line of rl) {
        s = s + (` ${n} ${line}`);
        n++
    }
    return res.send({ result: s })
}

export const removecalculator = async (req, res) => {
    const file = fs.readFileSync('test.txt', 'utf-8').split('\n')
    const { note: ciao } = req.params;
    console.log(ciao)
    file.splice(ciao,1)
    const newdata = file.join('\n')
    fs.writeFileSync('test.txt', newdata, {encoding: 'utf-8'})
    const list = async () => {
        const rl = readline.createInterface({
            input: fs.createReadStream('test.txt'),
            crlfDelay: Infinity,
        });
        var n = 0
        let s = ""
        for await (const line of rl) {
            s = s + (` ${n} ${line}`);
            n++
        }
        return s
    }
    const final = await list()
    return {result: final}      
}
