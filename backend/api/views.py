from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Items, Category, Manufacturers, Description
from .serializers import (ItemsSerializer, CategorySerializer,
                        ManufacturersSerializer, NewItemSerializer)
from core.settings import MEDIA_ROOT

# Create your views here.
sql_queries = (
    '''SELECT * FROM api_items WHERE slug='%s';''',
)

@api_view(['GET'])
def get_category_list(request):
    """

    Получение категорий товаров с позициями товаров

    """
    queryset = Category.objects.prefetch_related('items')
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_manufacturer_list(request):
    """

    Получение производителей товаров с позициями товаров

    """
    queryset = Manufacturers.objects.prefetch_related("items")
    serializer = ManufacturersSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_item(request, slug_item):
    
    queryset = Items.objects.raw(sql_queries[0] % slug_item)
    serializer = ItemsSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def create_item(request):
    if request.method == 'POST':
        serializer = NewItemSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            Items.objects.create(
                name = request.data["name"],
                description = Description.objects.create(description=request.data["description"]),
                image = request.data["image"],
                category = Category.objects.get(name=request.data["category"]),
                manufacturer = Manufacturers.objects.get(name=request.data["manufacturer"])
            )
            return Response({"mes": "Готово"})
        print(serializer.errors)
        return Response({"error": "data not valid"})

    return Response({'mes': 'ok'})


