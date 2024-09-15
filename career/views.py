from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import StudentProfile, JobListing, Feedback
from .serializers import StudentProfileSerializer, JobListingSerializer, FeedbackSerializer
from django.shortcuts import render

def home(request):
    return render(request,"home.html")

class StudentProfileViewSet(viewsets.ModelViewSet):
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer
    permission_classes = [IsAuthenticated]

class JobListingViewSet(viewsets.ModelViewSet):
    queryset = JobListing.objects.all()
    serializer_class = JobListingSerializer
    permission_classes = [IsAuthenticated]

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [IsAuthenticated]