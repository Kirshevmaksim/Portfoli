from .models import Task
from django.shortcuts import render, redirect
from .forms import TaskForm
def index(request):
    return render(request, 'main/index.html')
def about(request):
    error=''
    if request.method=='POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = 'wrong'
    form = TaskForm()
    data = {
        'form': form,
        'error': error
    }
    return render(request, 'main/about.html', data)
def shop(request):
    tasks=Task.objects.all()
    return render(request, 'main/shop.html',{'task': tasks})

