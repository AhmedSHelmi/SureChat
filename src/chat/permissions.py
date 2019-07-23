from rest_framework.permissions import BasePermission
from chat.models import Thread


class inThread(BasePermission):
    message = "User does not belong to this thread"

    def has_permission(self, request, view):
        thread = view.kwargs.get('thread')
        if not thread:
            return False
        return Thread.objects.user_in_thread(request.user, thread)
