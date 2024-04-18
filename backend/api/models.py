from django.db import models
from django.utils.text import slugify

# Create your models here.

class Items(models.Model):
    name = models.TextField(null=False, blank=False, unique=True, max_length=50, verbose_name="Наименование товара")
    slug = models.SlugField(null=True, blank=True)
    image = models.ImageField(upload_to='', verbose_name="Изоборажение товара")
    description = models.OneToOneField(to='Description', on_delete=models.CASCADE, verbose_name='описание', related_name="descr")
    category = models.ForeignKey(to='Category', on_delete=models.CASCADE, related_name='items')
    manufacturer = models.ForeignKey(to='Manufacturers', on_delete=models.CASCADE, related_name='items')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        return super().save(*args, **kwargs)

class Description(models.Model):
    description = models.TextField(null=False, blank=False, verbose_name="Наименование товара")

    def __str__(self):
        return self.description

class Category(models.Model):
    name = models.TextField(null=False, blank=False, unique=True, max_length=50) 
    count = models.IntegerField(default=0, verbose_name="Количество")

    def __str__(self):
        return self.name 

class Manufacturers(models.Model):
    name = models.TextField(null=False, blank=False, unique=True, max_length=70)
    count = models.IntegerField(default=0, verbose_name="Количество")


    def __str__(self):
        return self.name 
