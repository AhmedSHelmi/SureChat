from django.urls import path
from . import views

urlpatterns = [
    path('list/', views.userList.as_view(), name="user_list"),
    path('create/', views.userCreate.as_view(), name="user_create"),
    path('me/', views.UserInfo.as_view(), name="user_info")
]
