from django.db import models


# Create your models here.
class Counting(models.Model):
    like = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)
