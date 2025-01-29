# Используем официальный nginx образ
FROM nginx:alpine

# Копируем index.html в папку с конфигурацией nginx
COPY index.html /usr/share/nginx/html/index.html

# Обнажаем 80 порт
EXPOSE 80