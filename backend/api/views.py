from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Items, Category, Manufacturers
from .serializers import ItemsSerializer, CategorySerializer, ManufacturersSerializer

# Create your views here.
sql_queries = (
    "SELECT * FROM api_category;",
    "SELECT * FROM api_manufacturers;",
    '''SELECT * FROM api_items WHERE name='%s';'''
)

@api_view(['GET'])
def get_category_list(request):
    queryset = Category.objects.raw(sql_queries[0])
    serializer = CategorySerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_manufacturer_list(request):
    queryset = Manufacturers.objects.raw(sql_queries[1])
    serializer = ManufacturersSerializer(queryset, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_item(request, name):
    print(sql_queries[2] % name)
    queryset = Items.objects.raw(sql_queries[2] % name)
    serializer = ItemsSerializer(queryset, many=True)
    return Response(serializer.data)


