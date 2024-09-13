from django.db import models
from django.contrib.auth.models import User

class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


    
class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    skills = models.ManyToManyField(Skill)

    def __str__(self):
        return self.title

class StudentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    major = models.CharField(max_length=100)
    graduation_year = models.IntegerField()

    def __str__(self):
        return self.name

class JobListing(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    company = models.CharField(max_length=100)
    posted_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Feedback(models.Model):
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE)
    job_listing = models.ForeignKey(JobListing, on_delete=models.CASCADE)
    feedback_text = models.TextField()

    def __str__(self):
        return f"Feedback from {self.student.name} on {self.job_listing.title}"
