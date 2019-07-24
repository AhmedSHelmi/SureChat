from django.contrib.auth import get_user_model
from import_export import resources
from .models import Message


class UserResource(resources.ModelResource):
    class Meta:
        model = get_user_model()

class MessageResource(resources.ModelResource):
    class Meta:
        model = Message