from django.db import models
import uuid

# Create your models here.
class Service(models.Model):
  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
  title = models.CharField(max_length=200)
  description = models.TextField(null=True, blank=True)
  featured_image = models.ImageField(null=True, blank=True, default="default.png")
  image_path = models.CharField(max_length=200)

  def __str__(self):
    return self.title