from django.urls import path

from rest_framework_jwt.views import obtain_jwt_token
from api.views import *

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('posts/', PostListAPIView.as_view()),
    path('posts/<int:pk>/', PostDetailAPIView.as_view()),
    # path('posts/<int:pk>/comments/', company_vacancy_list),
    path('comments/', CommentListAPIView.as_view()),
    path('feedbacks/', FeedbackListAPIView.as_view()),
]