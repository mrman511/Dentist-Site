from django.forms import ModelForm
from .models import Service

class ServiceForm(ModelForm):
  class Meta:
    model = Service
    fields = ['title', 'description', 'featured_image']