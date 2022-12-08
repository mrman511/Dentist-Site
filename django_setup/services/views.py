from django.shortcuts import render, redirect
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from .models import Service
from .forms import ServiceForm

# Create your views here.
def services(request):
  services = Service.objects.all()
  msg = "This is the Services page"
  context = { 'message': msg, 'services': services }
  return render(request, 'services.html', context)
  # return JsonResponse(serializers.serialize('json', services), safe=False)

def service(request, pk):
  return render(request, 'service.html', {'pk': pk})

def createService(request):
  if request.method == 'POST':
    form = ServiceForm(request.POST, request.FILES)
    # print("::::POST:::::" + request.POST + ":::::FILES::::::" + request.FILES)
    if form.is_valid():
      form.save()
      return redirect('services')

  else:
    print("::::GET::::")
    form = ServiceForm()
    context = { 'form': form }
    return render(request, 'serviceForm.html', context)
