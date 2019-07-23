from django.contrib.auth import get_user_model
from django.db import models

from chatapp.models import Thread

User = get_user_model()


class MessageManager(models.Manager):
    def by_thread(self, thread):
        return self.get_queryset().filter(thread=thread)

    def not_mine_in_thread(self, user, thread):
        return self.by_thread(thread).exclude(sender=user)

    def unread_count_by_thread(self, user, thread):
        return self.not_mine_in_thread(user, thread).filter(read=False).count()



class Message(models.Model):
    thread = models.ForeignKey(Thread, on_delete=models.CASCADE)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    sender = models.ForeignKey(User, on_delete=models.CASCADE)

    objects = MessageManager()

    class Meta:
        ordering = ['timestamp']
