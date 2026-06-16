"""
URL configuration for setup project.
"""
from django.contrib import admin
from django.urls import path

from to_do.views import Todo_ListView, Todo_CreateView, Todo_BaseView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", Todo_BaseView.as_view()),
    path("list", Todo_ListView.as_view()),
    path("create", Todo_CreateView.as_view()),
]
