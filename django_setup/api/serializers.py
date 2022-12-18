from rest_framework import serializers
from services.models import Service
from users.models import Profile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'first_name', 'last_name', 'email', 'username']

class ServiceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Service
    fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = Profile
    fields = '__all__'