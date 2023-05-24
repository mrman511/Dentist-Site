from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.
class Profile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
  name = models.CharField(max_length=200, blank=True, null=True)
  email = models.CharField(max_length=200, blank=True, null=True)
  profile_image = models.ImageField(null=True, blank=True, upload_to='profiles/', default="profiles/default.png")
