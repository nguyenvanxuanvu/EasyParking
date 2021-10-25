from enum import Enum
from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.fields import IntegerField

# Create your models here.
class Park(models.Model):
    name = models.CharField(max_length=50, unique=True)
    street = models.CharField(max_length=100)
    province = models.CharField(max_length=30)
    district = models.CharField(max_length=30)
    ward = models.CharField(max_length=30)
    description = models.TextField(max_length=1000, null=True)

class ParkImage(models.Model):
    park = models.ForeignKey(Park, on_delete=CASCADE)
    image = models.ImageField()

class TypeVehicle(models.TextChoices):
    MOTO = ('moto', 'Xe máy')
    CAR_4_7_SEATS = ('car_4_7_seats', 'Xe 4-7 chỗ')
    CAR_9_16_SEATS = ('car_9_16_seats', 'Xe 9-16 chỗ')
    CONTAINER_TRUCK = ('container_truck', 'Xe container')

class ParkVehicle(models.Model):
    park = models.ForeignKey(Park, on_delete=CASCADE)
    vehicle = models.CharField(max_length=100, choices=TypeVehicle.choices, default=None)
    quantity = IntegerField(default=0)
    daytimePrice = IntegerField(default=0)
    overnightPrice = IntegerField(default=0)



