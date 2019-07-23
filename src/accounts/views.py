from django.contrib import messages
from django.contrib.auth import (authenticate, get_user_model, login,
                                 update_session_auth_hash)
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import PasswordChangeForm
from django.shortcuts import redirect, render
from rest_framework import authentication, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.forms import CustomUserCreationForm
from .serializers import (userCreateSerializer, userListSerializer,
                          UserListSerializer, UserSerializer)

User = get_user_model()


class userList(generics.ListAPIView):
    permission_classes = []
    #authentication_classes = [authentication.SessionAuthentication]

    serializer_class = userListSerializer

    def get_queryset(self, *args, **kwargs):
        return User.objects.all() 


class userCreate(generics.CreateAPIView):
    #permission_classes = [permissions.IsAdminUser]
    #authentication_classes = [authentication.SessionAuthentication]

    serializer_class = userCreateSerializer

    def get_queryset(self, *args, **kwargs):
        return User.objects.all()



class UserInfo(APIView):
    #permission_classes = [permissions.IsAuthenticated]
    #authentication_classes = [authentication.SessionAuthentication]

    def get(self, *args, **kwargs):
        user = self.request.user
        user_obj = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
                    }
        return Response(user_obj)


def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('app', path='')
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})


@login_required
def change_password(request):
    if request.method == 'POST':
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # Important!
            messages.success(
                request, 'Your password was successfully updated!')
            return redirect('change_password')
        else:
            messages.error(request, 'Please correct the error below.')
    else:
        form = PasswordChangeForm(request.user)
    return render(request, 'registration/change_password.html', {
        'form': form
    })
