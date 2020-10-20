from django.http import HttpResponse

def saludo(request): #primera vista 
    return HttpResponse("Hola daniel y daniela ")

