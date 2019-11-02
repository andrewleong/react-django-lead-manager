from django.shortcuts import render

def index(request):
    # Look in the templates folder
    return render(request, 'frontend/index.html')