from django.urls import path
from . import views


urlpatterns = [
  path('services/', views.services, name='services'),
  path('services/create/', views.createService, name='createService'),
  path('service/<str:pk>/', views.service, name='service'),
  # path('service/<str:pk>/delete', views.deleteService, name='deleteService'),
  # path('service/<str:pk>/edit', views.editService, name='editService'),
]