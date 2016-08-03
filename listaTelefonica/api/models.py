from __future__ import unicode_literals

from django.db import models

COR = (
    ('black','black'),
    ('blue','blue'),
    ('yellow','yellow'),
    ('red','red'),
    ('green','green'),
)

class Operadora(models.Model):
    """docstring for Operadora"""
    codigo = models.IntegerField()
    nome = models.CharField(max_length=20)
    categ = models.CharField(max_length=20)
    preco = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nome

class Contato(models.Model):
    """docstring for Operadora"""
    nome = models.CharField(max_length=20)
    tel = models.CharField(max_length=20)
    cor = models.CharField(max_length=4, choices=COR, default='blue')
    serial = models.CharField(max_length=20, default='0000')
    data = models.DateTimeField(auto_now_add=True)
    operadora = models.ForeignKey(Operadora)

    def __str__(self):
        return self.nome
