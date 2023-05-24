from django.db import models
from django.core.validators import MinLengthValidator, RegexValidator
import uuid

def validateStringIsNumbers(string):
  for value in split(string):
    if (not isdigit(value)):
      raise ValidationError((value, 'is not a number'), params={'value', value})

# Create your models here.
class Page_Option(models.Model):
  province_choices = [
    ('AB', 'Alberta'),
    ('BC', 'British Columbia'),
    ('MB', 'Manitoba'),
    ('NB', 'New Brunswick'),
    ('NF', 'New Foundland'),
    ('NS', 'Nova Scotia'),
    ('NV', 'Nunavut'),
    ('NW', 'North West Territories'),
    ('ONT', 'Ontario'),
    ('PEI', 'Prince Endward Island'),
    ('QBC', 'Quebec'),
    ('SK', 'Saskatchewan'),
    ('YK', 'Yukon'),
  ]


  id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
  page_logo = models.ImageField(null=True, blank=True, upload_to='page/', default="page/logo.png")
  title_image = models.ImageField(null=True, blank=True, upload_to='page/', default="page/title_image.png")
  banner_image = models.ImageField(null=True, blank=True, upload_to='page/', default="page/banner.jpg")
  team_image = models.ImageField(null=True, blank=True, upload_to='page/', default="page/team.jpg")
  services_image = models.ImageField(null=True, blank=True, upload_to='page/', default="page/services.jpeg")
  address_unit = models.CharField(max_length= 5, null=True, blank=True )
  address_street = models.CharField(max_length=50)
  address_city = models.CharField(max_length=50)
  address_province = models.CharField(max_length=3, choices=province_choices)
  phone_number_area_code = models.CharField(max_length=3, validators=[RegexValidator(regex='^[0-9]*$', message='Only numbers allowed'), MinLengthValidator(3)])
  phone_number_prefix = models.CharField(max_length=3, validators=[RegexValidator(regex='^[0-9]*$', message='Only numbers allowed'), MinLengthValidator(3)])
  phone_number_line = models.CharField(max_length=4, validators=[RegexValidator(regex='^[0-9]*$', message='Only numbers allowed'), MinLengthValidator(4)])
  contact_email = models.EmailField(max_length=254)
  show_team = models.BooleanField(default=False)


    