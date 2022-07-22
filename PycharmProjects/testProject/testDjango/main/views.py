from django.shortcuts import render
from .models import Review
from .forms import ReviewForm
def index(request):
    reviews=Review.objects.all()
    error = ''
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = 'wrong'
    form = ReviewForm()
    data = {
        'form': form,
        'error': error,
        'review': reviews
    }
    return render(request,'main/index.html',data)

