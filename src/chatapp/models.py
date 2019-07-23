from django.db import models
from django.contrib.auth import get_user_model
from django.core.files.storage import FileSystemStorage
from django.conf import settings
User = get_user_model()


class ThreadManager(models.Manager):
    def mine(self, user):
        return self.get_queryset().filter(models.Q(sender=user) | models.Q(receiver=user))

    def user_in_thread(self, user, thread_id):
        qs = self.mine(user)
        if Thread.objects.filter(id=thread_id).exists():
            return Thread.objects.get(id=thread_id) in qs
        return False

    def by_sender_receiver(self, sender, receiver):
        qs = self.get_queryset().filter(sender=sender, receiver=receiver)
        if qs.exists():
            return qs.first()
        else:
            return None



class Thread(models.Model):
    sender = models.ForeignKey(
        User, related_name="sender", on_delete=models.CASCADE)
    receiver = models.ForeignKey(
        User, related_name="receiver", on_delete=models.CASCADE)

    objects = ThreadManager()

    def __str__(self):
        return f"{self.sender.username}_treats_{self.receiver.username}"

    class Meta:
        unique_together = ['sender', 'receiver']