from django.http import JsonResponse, HttpResponse
from django.templatetags.static import static
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework_simplejwt import authentication
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .renderers import PNGRenderer
from .serializers import ServiceSerializer, UserSerializer, ProfileSerializer, PageOptionsSerializer
from django.contrib.auth.models import User
from users.models import Profile
from page_options.models import Page_Option
from services.models import Service

@api_view(['GET'])
def getRoutes(request):
  routes = [
    {'GET': '/api/services'},
    {'GET': '/api/service/id'},

    {'POST': '/api/user/token'},
    {'POST': '/api/user/token/refresh'},
  ]
  return Response(routes)

@api_view(['GET'])
def getUserData(request):
  user = request.user
  serializer = UserSerializer(user, many=False)
  return Response(serializer.data)

@api_view(['GET'])
def getServices(request):
  services = Service.objects.all()
  serializer = ServiceSerializer(services, many=True)
  # for data in serializer.data:
  #   data["image"] = static(data['featured_image'])
  return Response(serializer.data)

@api_view(['GET'])
def getService(request, pk):
  service = Service.objects.get(id=pk)
  serializer = ServiceSerializer(service, many=False)
  return Response(serializer.data)

@api_view(['GET'])
# @renderer_classes([JSONRenderer])
def getServiceImage(request, pk):
  renderer_classes=(PNGRenderer)
  serviceImage = Service.objects.get(id=pk).featured_image
  image = static(serviceImage)
  return Response(image, content_type="image/*")


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createService(request):
  data = request.data
  service = Service.objects.create()
  service.title = data['title']
  service.description = data['description']
  service.featured_image = data['image']
  service.save()

  return Response()

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteService(request, pk):
  service = Service.objects.get(id = pk)
  service.delete()

  return Response()

# ////////////
# PROFILE VIEWS
# ////////////

@api_view(['GET'])
def getProfiles(request):
  profiles = Profile.objects.all()
  serializer = ProfileSerializer(profiles, many=True)
  return Response(serializer.data)

# ////////////
# PAGE OPTIONS
# ////////////

@api_view(['GET'])
def getOptions(request):
  page_options = Page_Option.objects.all()
  serializer = PageOptionsSerializer(page_options, many=True)
  return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addImage(request, pk):
  pageOptions = Page_Option.objects.get(pk=id)
  data = request.data
  pageOptions[data.imageType] = data.image
  pageOptions.save()

  return Response()
