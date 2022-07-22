from django.db import models
class Task(models.Model):
    nameTask=models.CharField('Название задачи',max_length=50)
    dateTask=models.CharField('Booking date', max_length=10)
    def __str__(self):
        return self.nameTask
# Create your models here.
