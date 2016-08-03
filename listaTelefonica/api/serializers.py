from .models import Contato, Operadora
from rest_framework import serializers


class OperadoraSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Operadora
        fields = ('__all__')


class ContatoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contato
        fields = ('__all__')
