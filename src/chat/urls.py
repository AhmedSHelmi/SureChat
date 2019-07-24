from django.urls import path

from . import views

urlpatterns = [
    path("messages/<int:thread>/", views.MessagesInThread.as_view(),
         name="messages_in_thread"),
    path("messages/<int:thread>/read/",
         views.MarkThreadRead.as_view(), name="mark_thread_read"),
    path("messages/<int:thread>/unread/",
         views.UnReadThreadCount.as_view(), name="unread_count"),

    path("messages/create/", views.MessageCreateView.as_view(), name="new_message"),
    path("messages/dump/",views.export,name="test")
]
