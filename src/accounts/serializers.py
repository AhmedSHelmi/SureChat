from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "username",
        ]


class userCreateSerializer(serializers.ModelSerializer):
    class Meta:
            model = User
            fields = [
                "id",
                "email",
                "username",
                "password",
                "address"
            ]
            write_only_fields = ('password',)

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=[
            "id",
            "email",
            "username",
        ]


class userListSerializer(serializers.ModelSerializer):

    class Meta:
        model=User
        fields=[
            "id",
            "email",
            "username",
        ]
