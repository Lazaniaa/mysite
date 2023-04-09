from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('main.urls')),
    path('en', include('main.urls')),
    path('main', include('main.urls')),
]
