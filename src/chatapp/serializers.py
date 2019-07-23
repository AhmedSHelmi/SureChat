from rest_framework import serializers
from .models import  Thread
from accounts.serializers import UserSerializer




class ThreadGetSerializer(serializers.ModelSerializer):
    receiver = UserSerializer()
    sender = UserSerializer()
    class Meta:
        model = Thread
        fields = [
            "id",
            "sender",
            "receiver"
        ]


class ThreadPostSerializer(serializers.ModelSerializer):
    
    class Meta:
        
        model = Thread
        fields = [
            "id",
            "sender",
            "receiver"
        ]

