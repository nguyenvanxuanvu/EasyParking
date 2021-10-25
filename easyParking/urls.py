from django.urls import path
from .views import ParkView

urlpatterns = [
    path('', ParkView.as_view()),
]