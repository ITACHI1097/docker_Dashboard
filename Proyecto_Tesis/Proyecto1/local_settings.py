import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'icfes-1',
        'USER': 'postgres',
        'PASSWORD': '1234',
        'HOST':'localhost',
        'DATABASE_PORT':'5432',
    }
}

DEBUG = True