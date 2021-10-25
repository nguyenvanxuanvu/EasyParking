from django.db import models
from django.db.models import fields
from rest_framework import serializers

from easyParking.models import Park

class ParkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Park
        fields = ('id', 'name', 'street', 'province', 'district', 'ward', 'description')