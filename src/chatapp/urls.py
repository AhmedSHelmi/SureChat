from django.urls import path
from . import views

urlpatterns = [
    path('threads/', views.ThreadList.as_view(), name='receiver_threads'),
    path('threads/create/', views.ThreadCreate.as_view(), name='create_threads'),
]
