# Simple shop list
## Описание: Админ-панель для просмотра товаров и их добавления
### Запуск api
Примечание: для работы приложение необходимо открыть 2 терминала
Для запуска api необходимо выполнить на первом терминале следующие команды 
```
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requiremenets.txt
python manage.py migrate
psql -U postgres -d postgres -f ../sql_trigger.sql
python manage.py runserver
```
После выполнения всех команд выше не закрывайть терминал
### Запуск react приложение
Для запуска react приложения необходимо выполнить на втором терминале следующие команды
```
cd frontend
npm i
npm run dev
```
После выполнения всех команд выше не закрывайть терминал
После всего зайти по ссылке http://localhost:5173/

