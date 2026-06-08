"""
URL configuration for setup project.
"""
from django.contrib import admin
from django.urls import path

from to_do.views import todo_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", todo_list),
]
