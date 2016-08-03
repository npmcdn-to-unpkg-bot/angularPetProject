from .models import Operadora, Contato
from rest_framework import viewsets
from .serializers import OperadoraSerializer, ContatoSerializer


class OperadoraViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Operadora.objects.all()
    serializer_class = OperadoraSerializer


class ContatoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer
