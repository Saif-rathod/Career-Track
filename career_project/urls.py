from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('career.urls')),  # Add this line to handle the root URL
    path('career/', include('career.urls')),  # Ensure this is correct
]