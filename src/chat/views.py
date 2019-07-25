from rest_framework import authentication, generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_bulk import BulkUpdateAPIView
import sys,os
from django.http import Http404
from django.urls import path
from django.core.management import call_command
from django.http import HttpResponse
from django.utils.encoding import smart_str
from Crypto.Cipher import AES


from chat.models import Thread

from .models import Message
from .permissions import inThread
from .serializers import (MessageGetSerializer, MessagePostSerializer,
                          MessageReadSerializer)


class MessagesInThread(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, inThread]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = MessageGetSerializer

    def get_queryset(self, *args, **kwargs):
        thread = self.kwargs.get('thread')
        return Message.objects.by_thread(thread)


class MessageCreateView(generics.CreateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = MessagePostSerializer

    def get_queryset(self, *args, **kwargs):
        thread = self.kwargs.get('thread')
        return Message.objects.by_thread(thread)

    def post(self, *args, **kwargs):
        thread = self.request.data.get('thread')
        if not Thread.objects.user_in_thread(self.request.user, thread):
            return Response({'detail': 'User does not belong to this thread'}, status=status.HTTP_403_FORBIDDEN)
        serializer = self.serializer_class(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(sender=self.request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class MarkThreadRead(APIView):
    permission_classes = [permissions.IsAuthenticated, inThread]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = MessageReadSerializer

    def get_queryset(self, *args, **kwargs):
        queryset = Message.objects.not_mine_in_thread(
            self.request.user, self.kwargs.get('thread'))
        return queryset

    def put(self, *args, **kwargs):
        qs = self.get_queryset(self, *args, **kwargs).update(read=True)
        return Response(qs, status=status.HTTP_202_ACCEPTED)


class UnReadThreadCount(APIView):
    permission_classes = [permissions.IsAuthenticated, inThread]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = MessageReadSerializer

    def get_queryset(self, *args, **kwargs):
        queryset = Message.objects.unread_count_by_thread(
            self.request.user, self.kwargs.get('thread'))
        return queryset

    def get(self, *args, **kwargs):
        return Response({"count": self.get_queryset(self, *args, **kwargs)}, status=status.HTTP_200_OK)

def export(request):
    crypto_obj = AES.new('likeapieceofcake', AES.MODE_CFB, 16 * '\x00')
    sysout = sys.stdout
    sys.stdout = open('dump.json', 'w')
    call_command('dumpdata','--format','json','--indent','3')
    sys.stdout = sysout
    filename = 'dump.json'
    #file_path = os.path.dirname("")
    with open(filename, 'r') as f:
        stream=f.read()
       
        ciphertext = crypto_obj.encrypt(stream)
        #in case of decrypttion uncomment the following line and use plaintext as response
        #plaintext=crypto_obj.decrypt(ciphertext)
        
        
        response = HttpResponse(ciphertext, content_type='application/force-download')
        response['Content-Disposition'] = 'attachment; filename=' + filename
        response['Content-Type'] = 'application/force-download'
        return response

