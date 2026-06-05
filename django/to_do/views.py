from django.shortcuts import render
from django.http import HttpResponse

"""
    View responsável por exibir a página inicial do aplicativo de tarefas. 
    Atualmente, ela retorna uma mensagem simples de boas-vindas.
"""
def home(request):
    return render(request, 'to_do/home.html')