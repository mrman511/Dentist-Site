from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework_simplejwt import authentication
from rest_framework.response import Response
from .serializers import ServiceSerializer, UserSerializer
from django.contrib.auth.models import User
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
  return Response(serializer.data)

@api_view(['GET'])
def getService(request, pk):
  service = Service.objects.get(id=pk)
  serializer = ServiceSerializer(service, many=False)
  return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createService(request):
  data = request.data
  print('CREATE SERVICE: ', data)
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

# @api_view(['GET'])
# def getUsers(request):
#   user = User.objects.all()
#   serializer = UserSerializer(user, many=True)
#   return Response(serializer.data)