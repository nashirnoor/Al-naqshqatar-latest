from django.db import models

class ServiceCategory(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True,blank=True)
    image = models.ImageField(upload_to='service_categories/',null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class SubService(models.Model):
    service_category = models.ForeignKey(ServiceCategory, related_name='subservices', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True,blank=True)
    image = models.ImageField(upload_to='sub_services/',null=True,blank=True)

    def __str__(self):
        return self.title
    


class Project(models.Model):
    CATEGORY_CHOICES = [
        ('completed', 'Completed'),
        ('ongoing', 'Ongoing'),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='projects/', null=True)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, default='ongoing')

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='additional_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='project_additional_images/')

    def __str__(self):
        return f"Image for {self.project.title}"
    

class Banner(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    # image = models.ImageField(upload_to='banners/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class AboutDescription(models.Model):
    description = models.TextField()

    def __str__(self):
        return self.description


class AboutImage(models.Model):
    image = models.ImageField(upload_to='about_images/')

    def __str__(self):
        return f"Image {self.id}"