from django.db import models
from django.contrib.auth.models import User
import uuid

class Tarefa(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,  default=uuid.uuid4())
    titulo = models.CharField(max_length=100)
    tarefa = models.TextField()

    def __str__(self):
        return self.titulo

class Produto(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()

    def __str__(self):
        return self.name