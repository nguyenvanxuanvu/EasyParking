build database:
python3 manage.py makemigrations >>
python3 manage.py migrate
(if have not installed 'python3', you should run with 'python')

run server (back-end):
python manage.py runserver

run client (front-end):
npm run dev
