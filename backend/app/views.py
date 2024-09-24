from rest_framework.decorators import api_view
from .models import Banner,Project
from .serializers import BannerSerializer
from rest_framework import generics
from rest_framework import viewsets
from .models import ServiceCategory, SubService,AboutDescription,AboutDescription, AboutImage
from .serializers import ServiceCategorySerializer, SubServiceSerializer,ProjectSerializer,AboutSectionSerializer,AboutImageSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings


class ServiceCategoryViewSet(viewsets.ModelViewSet):
    queryset = ServiceCategory.objects.all()
    serializer_class = ServiceCategorySerializer


class SubServiceViewSet(viewsets.ModelViewSet):
    queryset = SubService.objects.all()
    serializer_class = SubServiceSerializer


class BannerListView(generics.ListAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

@api_view(['GET', 'POST'])
def project_list_create(request):
    if request.method == 'GET':
        category = request.query_params.get('category')
        projects = Project.objects.all()
        if category:
            projects = projects.filter(category=category)
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def project_detail(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ProjectSerializer(project, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        project.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class SendEmailView(APIView):
    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        number = request.data.get('number')
        message = request.data.get('message')

        subject = f'Al Naqsh New contact form submission from {name}'
        email_message = f'Name: {name}\nEmail: {email}\nNumber: {number}\nMessage: {message}'
        
        try:
            send_mail(
                subject,
                email_message,
                settings.EMAIL_HOST_USER,
                ['Info@alnaqshqatar.com'],  # Recipient email
                fail_silently=False,
            )
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class AboutSectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutDescription.objects.all()
    serializer_class = AboutSectionSerializer

class AboutImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutImage.objects.all()
    serializer_class = AboutImageSerializer