const fs = require("fs");

fs.readFile("data.json", (err, data) => {
    if (err === null) {
        let jsonData = JSON.parse(data);
        const filteredData = jsonData.filter(entry => entry.parent === "BS3_BanksLiab");
        const outputText = filteredData.map(entry => `${entry.txten}:${entry.value}`).join('\n');

        fs.writeFile('output.txt', outputText, (err) => {
            if (err === null) {
                console.log("Дані успішно записані у файл output.txt");
            } else {
                console.error('Помилка запису в файл:', err);
            }
        });
    } else {
        console.error('Помилка читання файлу:', err);
    }
});
