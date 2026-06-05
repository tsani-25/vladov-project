Този проект съдържа:
- бекенд услуга (Node.js + Express)
- PostgreSQL база данни

Бекенда се свързва към PostgreSQL и връща текущото време.

Структура на проекта:
    backend/
    ├── Dockerfile
    ├── package.json
    └── server.js
    compose.yml

За подкарване на проекта:
```bash
docker compose up --build
