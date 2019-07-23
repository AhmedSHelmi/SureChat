from rest_framework import serializers
from rest_framework_bulk import BulkSerializerMixin, BulkListSerializer

from accounts.serializers import UserSerializer

from .models import Message


class MessageGetSerializer(serializers.ModelSerializer):
    sender = UserSerializer()

    class Meta:
        model = Message
        fields = [
            "id",
            "text",
            "timestamp",
            "read",
            "sender",
            "thread"
        ]


class MessagePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = [
            "id",
            "text",
            "timestamp",
            "thread",
        ]


class MessageReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = [
            "id",
            "read"
        ]
