# users/models.py
from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models


class CustomUserManager(UserManager):
    pass


class User(AbstractUser):
    avatar = models.ImageField(blank=True, null=True)
