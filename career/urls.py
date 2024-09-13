from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import StudentProfileViewSet, JobListingViewSet, FeedbackViewSet, home

router = DefaultRouter()
router.register(r'student-profiles', StudentProfileViewSet)
router.register(r'job-listings', JobListingViewSet)
router.register(r'feedback', FeedbackViewSet)

urlpatterns = [
    path('', home, name='root'),  # Root URL
    path('home/', home, name='home'),  # Home URL
    path('career/', include(router.urls)),  # API endpoints
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]