from django.contrib import admin

from .models import (Items, Description, Category, Manufacturers)

# Register your models here.


admin.site.register(Items)
admin.site.register(Description)
admin.site.register(Category)
admin.site.register(Manufacturers)
