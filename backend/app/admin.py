from django.contrib import admin
from .models import ServiceCategory,SubService,Banner,Project,ProjectImage,AboutDescription,AboutImage



admin.site.register(ServiceCategory)
admin.site.register(SubService)
admin.site.register(Banner)

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1  

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]

admin.site.register(Project, ProjectAdmin)
admin.site.register(AboutImage)
admin.site.register(AboutDescription)





