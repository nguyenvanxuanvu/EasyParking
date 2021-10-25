from django.db.models.query import QuerySet
from django.shortcuts import render
from rest_framework import generics
from backend_api.serializers import ParkSerializer

from easyParking.models import Park

# Create your views here.
class ParkView(generics.CreateAPIView):
    queryset = Park.objects.all()
    serializer_class = ParkSerializer