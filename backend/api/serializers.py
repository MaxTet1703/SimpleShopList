from rest_framework import serializers

from .models import Items, Category, Manufacturers


class CategorySerializer(serializers.ModelSerializer):
    items = serializers.StringRelatedField(many=True)
    class Meta:
        model = Category
        fields = ["name", "items"]

class ItemsSerializer(serializers.ModelSerializer):
    description = serializers.StringRelatedField()
    class Meta:
        model = Items
        fields = ["name", "image", "description"]

class ManufacturersSerializer(serializers.ModelSerializer):
    items = serializers.StringRelatedField(many=True)
    class Meta:
        model = Manufacturers
        fields = ["name", "items"]