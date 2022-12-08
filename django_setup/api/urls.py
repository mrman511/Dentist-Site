from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
  TokenObtainPairView,
  TokenRefreshView,
)

urlpatterns = [
  path('user/', views.getUserData),
  path('users/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('users/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

  path('', views.getRoutes),
  path('services/', views.getServices),
  path('services/create/', views.createService),
  path('services/<str:pk>/', views.getService),
  # path('users/', views.getUsers),

  path('service/<str:pk>/delete', views.deleteService),
  # path('service/<str:pk>/edit', views.editService),
]