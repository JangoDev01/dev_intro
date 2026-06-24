"""
URL configuration for setup project.
"""
from django.contrib import admin
from django.urls import path

from to_do.views import Todo_ListView, Todo_CreateView, Todo_BaseView, Todo_UpdateView, Todo_DeleteView

urlpatterns = [
    path('admin/', admin.site.urls),

    # URL PARA A APLICAÇÃO DE TAREFAS (to_do)
    path("", Todo_BaseView.as_view(), name="todo_base"),
    path("list", Todo_ListView.as_view(), name="todo_list"),
    path("create", Todo_CreateView.as_view(), name="todo_create"),
    path("update/<int:pk>", Todo_UpdateView.as_view(), name="todo_update"),
    path("delete/<int:pk>", Todo_DeleteView.as_view(), name="todo_delete"),

    # OUTRAS URLS PODEM SER ADICIONADAS AQUI, CASO NECESSÁRIO
]