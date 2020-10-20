import psycopg2
from django.db.models import Count, Avg
from django.forms import *
from Dashboard.models import DimEstudiantes, FactSaber11
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django import forms





class TestForm(Form):
    categories = ModelChoiceField(queryset=FactSaber11.objects.values('id_tiempo__ano').distinct(), widget=Select(attrs={
        'class': 'form-control'
    }))
    # datos = []
    # conn = psycopg2.connect(database='icfes-1', user='postgres', password='1234', host='localhost', port=5432)
    # cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    # sql = "select distinct(ano) from dim_tiempo"
    # cur.execute(sql)
    # row = cur.fetchall()
    # cur.close()
    # conn.close()
    # datos = row
    #
    # data = [
    #     '2012',
    #     '2013',
    #
    # ]
    #
    # categories = ChoiceField(choices=data, initial="1")


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']