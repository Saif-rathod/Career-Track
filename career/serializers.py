from rest_framework import serializers
from .models import StudentProfile, JobListing, Feedback

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = '__all__'

class JobListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobListing
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'
