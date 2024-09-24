from rest_framework import serializers
from .models import Banner,Project,ProjectImage
from .models import ServiceCategory, SubService


class ServiceCategorySerializer(serializers.ModelSerializer):
    subservices = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = ServiceCategory
        fields = ['id', 'title', 'description', 'image', 'created_at', 'subservices']


class SubServiceSerializer(serializers.ModelSerializer):
    service_category_title = serializers.CharField(source='service_category.title', read_only=True)

    class Meta:
        model = SubService
        fields = ['id', 'service_category_title','service_category', 'title', 'description', 'image']


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ['id', 'title', 'description']


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image']


class ProjectSerializer(serializers.ModelSerializer):
    additional_images = ProjectImageSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        child=serializers.ImageField(allow_empty_file=False, use_url=False),
        write_only=True, required=False
    )

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'category', 'additional_images', 'uploaded_images']

    def create(self, validated_data):
        uploaded_images = validated_data.pop('uploaded_images', [])
        project = Project.objects.create(**validated_data)
        for image in uploaded_images:
            ProjectImage.objects.create(project=project, image=image)
        return project

    def update(self, instance, validated_data):
        uploaded_images = validated_data.pop('uploaded_images', [])
        instance = super().update(instance, validated_data)
        for image in uploaded_images:
            ProjectImage.objects.create(project=instance, image=image)
        return instance
    



from rest_framework import serializers
from .models import AboutDescription, AboutImage

from rest_framework import serializers


class AboutImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutImage
        fields = ['id', 'image']


class AboutSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutDescription
        fields = ['id', 'description']




    

