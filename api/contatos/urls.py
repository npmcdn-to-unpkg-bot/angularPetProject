from django.conf.urls import url, include
from rest_framework import routers
import views

router = routers.DefaultRouter()
router.register(r'contatos', views.ContatoViewSet)
router.register(r'operadoras', views.OperadoraViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
