from rest_framework import serializers

from .models import Items, Category, Manufacturers


class CategorySerializer(serializers.ModelSerializer):
    cat = serializers.StringRelatedField(many=True)
    class Meta:
        model = Category
        fields = ["name", "cat"]

class ItemsSerializer(serializers.ModelSerializer):
    description = serializers.StringRelatedField()
    class Meta:
        model = Items
        fields = ["name", "image", "description"]

class ManufacturersSerializer(serializers.ModelSerializer):
    owner = serializers.StringRelatedField(many=True)
    class Meta:
        model = Manufacturers
        fields = ["name", "owner"]