from django.contrib import admin

# Register your models here.
from .models import Skill, Course, StudentProfile, JobListing, Feedback

admin.site.register(Skill)
admin.site.register(Course)
admin.site.register(StudentProfile)
admin.site.register(JobListing)
admin.site.register(Feedback)