from django.http import JsonResponse
from django.shortcuts import render

from asssignmentapp.models import Counting


# Create your views here.
def home(request):
    counting = Counting.objects.get(id=1)
    return render(request, 'home.html', {'like': counting.like, 'dislike': counting.dislike})


def change_counting(request):
    button_pressed = request.POST.get('button_pressed')
    counts = Counting.objects.get(id=1)
    like_counting = counts.like
    dislike_counting = counts.dislike
    if button_pressed == "dislike":
        dislike_counting = counts.dislike + 1
        counts.dislike = dislike_counting
        counts.save()
    else:
        like_counting = counts.like + 1
        counts.like = like_counting
        counts.save()
    data = {
        'like': like_counting,
        'dislike': dislike_counting
    }
    return JsonResponse(data=data)
