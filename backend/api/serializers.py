from rest_framework import serializers
from django.core.files.uploadedfile import InMemoryUploadedFile

from .models import Items, Category, Manufacturers, Description


class CategorySerializer(serializers.ModelSerializer):
    items = serializers.StringRelatedField(many=True)
    class Meta:
        model = Category
        fields = ["name", "items"]

class ItemsSerializer(serializers.ModelSerializer):
    description = serializers.StringRelatedField()
    image_url = serializers.SerializerMethodField('get_image_url')
    class Meta:
        model = Items
        fields = ["name", "description", 'image_url']
    
    def get_image_url(self, obj):
        return "http://localhost:8000"+ obj.image.url


class ManufacturersSerializer(serializers.ModelSerializer):
    items = serializers.StringRelatedField(many=True)
    class Meta:
        model = Manufacturers
        fields = ["name", "items"]

class NewItemSerializer(serializers.Serializer):
    name = serializers.CharField(required=True)
    image = serializers.ImageField(required=False)
    description = serializers.CharField(required=True)
    category = serializers.CharField(required=True)
    manufacturer = serializers.CharField(required=True)

