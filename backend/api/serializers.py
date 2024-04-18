from rest_framework import serializers
from django.core.files.uploadedfile import InMemoryUploadedFile

from .models import Items, Category, Manufacturers, Description

class NewItemSerializer(serializers.Serializer):
    name = serializers.CharField()
    image = serializers.ImageField(required=False)
    description = serializers.CharField()
    category = serializers.CharField()
    manufacturer = serializers.CharField()

class ItemsSerializer(serializers.ModelSerializer):
    description = serializers.StringRelatedField()
    image_url = serializers.SerializerMethodField('get_image_url')
    class Meta:
        model = Items
        fields = ["name",  "slug", "description", 'image_url']
    
    def get_image_url(self, obj):
        return "http://localhost:8000"+ obj.image.url

class NameAndslugOfItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ["name", "slug"]


class CategorySerializer(serializers.ModelSerializer):
    items = NameAndslugOfItemsSerializer(many=True)
    class Meta:
        model = Category
        fields = ["name", "count", "items"]


class ManufacturersSerializer(serializers.ModelSerializer):
    items = NameAndslugOfItemsSerializer(many=True)
    class Meta:
        model = Manufacturers
        fields = ["name", "count", "items"]

