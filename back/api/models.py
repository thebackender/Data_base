from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255, unique=True)
    text = models.TextField()
    url = models.CharField(max_length=255)
class Feedback(models.Model):
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='feedbacks')
class Comment(models.Model):
    text = models.TextField()
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')