from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from api.serializers import UserSerializer

from django.http import JsonResponse


# Create your views here.
def loginUser(request):

  if request.method == 'POST':
    email = request.POST['email']
    password = request.POST['password']
    print('Email: ' + email)

    try:
      user = User.objects.get(email=email)
    except:
      print("email does not exist")

    username = user.get_username()

    print('USER: ' + username)

    user = authenticate(request, username=username, password=password)

    if user is not None:
      login(request, user)
      print('AFTER LOGIN')
      return redirect('loggedin')
    else:
      print("Username or Password Incorrect")


  return render(request, 'users/login.html')


def loggedIn(request):
  return render(request, 'users/loggedIn.html')

def logoutUser(request):
  logout(request)
  return redirect('login')