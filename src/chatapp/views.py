from django.db.utils import IntegrityError
import os
from mimetypes import guess_type
from django.conf import settings
from django.contrib.auth import get_user_model
from django.core.files import File
from django.http import Http404, HttpResponse
from django.shortcuts import get_object_or_404
from django.views.generic import DetailView
from .models import  Thread
from rest_framework import authentication, generics, permissions
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from chat.permissions import inThread
from .serializers import *
from rest_framework.views import APIView
from django.utils.dateparse import parse_date, parse_time

User = get_user_model()




class ThreadList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = ThreadGetSerializer

    def get_queryset(self, *args, **kwargs):
        return Thread.objects.mine(self.request.user)

class ThreadCreate(generics.CreateAPIView):
    
    permsission_classed=[permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = ThreadPostSerializer
    
    def perform_create(self, serializer):
        serializer.save(sender=self.request.user)