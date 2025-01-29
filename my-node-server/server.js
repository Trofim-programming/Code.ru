// server.js

const http = require('http');

// Указываем порт, по которому будет работать сервер
const PORT = 3000;

// Создаем сервер
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Устанавливаем код ответа 200 (OK)
    res.setHeader('Content-Type', 'text/plain'); // Устанавливаем заголовок
    res.end('Hello, World!\n'); // Отвечаем текстом
});

// Запускаем сервер
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}/`);
});


