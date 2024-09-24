"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from app.views import BannerListView,SubServiceViewSet,ServiceCategoryViewSet,project_detail,project_list_create,SendEmailView,AboutSectionViewSet,AboutImageViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'service-categories', ServiceCategoryViewSet)
router.register(r'sub-services', SubServiceViewSet)

router.register(r'about', AboutSectionViewSet, basename='about')
router.register(r'about-image', AboutImageViewSet, basename='about-image')





urlpatterns = [
    path('admin/', admin.site.urls),
    path('banners/', BannerListView.as_view(), name='banner-list'),
    path('projects/', project_list_create, name='project-list-create'),
    path('projects/<int:pk>/', project_detail, name='project-detail'),
    path('api/send-email/', SendEmailView.as_view(), name='send_email'),

    path('api/', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
