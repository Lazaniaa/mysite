from django.shortcuts import render
from django.http import HttpResponse



def indexx(request):
    return render(request, 'main/index-main-en.html')

def index(request):
    return render(request, 'main/index-main.html')