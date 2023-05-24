from django.urls import path
from . import views
urlpatterns = [
  path('login/', views.loginUser, name='login'),
  path('loggedIn/', views.loggedIn, name='loggedin'),
  path('logout/', views.logoutUser, name="logout")
]