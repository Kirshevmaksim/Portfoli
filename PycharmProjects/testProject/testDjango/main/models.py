from django.db import models

class Review(models.Model):
    name=models.CharField('Имя пользователя',max_length=15)
    reviewText= models.TextField('Отзыв')
    phone=models.CharField('Telephone',max_length=12)
    email=models.CharField('email',max_length=100)
    def __str__(self):
        return self.name
