from django.db import models


# Create your models here.
class Counting(models.Model):
    like = models.PositiveBigIntegerField(default=0)
    dislike = models.PositiveBigIntegerField(default=0)
