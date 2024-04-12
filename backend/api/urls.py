from django.urls import path 
from rest_framework.urlpatterns import format_suffix_patterns

from .views import (get_category_list, get_manufacturer_list,
                    get_item)


urlpatterns = format_suffix_patterns([
    path('c_list/', get_category_list, name="c_list"),
    path('m_list/', get_manufacturer_list, name="m_list"),
    path('<slug:name>/', get_item, name="g_item")
])