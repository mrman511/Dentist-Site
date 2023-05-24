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
  path('service/<str:pk>/', views.getService),
  path('service/<str:pk>/image/', views.getServiceImage),
  path('service/<str:pk>/delete/', views.deleteService),
  # path('users/', views.getUsers),

  path('profiles/', views.getProfiles),

  path('pageOptions/', views.getOptions),
  path('pageOptions/<str:pk>/addImage', views.addImage),

  # path('service/<str:pk>/edit', views.editService),
]