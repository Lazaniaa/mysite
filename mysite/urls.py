from django.contrib import admin
from django.urls import include, path
admin.site.site_url = ''  # Removes the 'View Site' link
admin.site.site_header = 'My Site'

urlpatterns = [
    path('', include('main.urls')),
    path('en', include('main.urls')),
    path('main', include('main.urls')),
]
