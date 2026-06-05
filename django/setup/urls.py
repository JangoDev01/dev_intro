"""
URL configuration for setup project.
"""
from django.contrib import admin
from django.urls import path

from to_do.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home),
]
