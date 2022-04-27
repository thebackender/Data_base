from rest_framework import serializers

from api.models import *

class PostSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField()
    author = serializers.CharField()
    text = serializers.CharField()
    url = serializers.CharField()
    is_approved = serializers.BooleanField()

    def create(self, validated_data):
        post = Post.objects.create(title=validated_data['title'], author=validated_data['author'], \
                                      text=validated_data['text'], url=validated_data['url'], \
                                      is_approved=validated_data['is_approved'])
        return post

    def update(self, instance, validated_data):
        instance.title = validated_data['title']
        instance.author = validated_data['author']
        instance.text = validated_data['text']
        instance.url = validated_data['url']
        instance.is_approved = validated_data['is_approved']
        instance.save()
        return instance

class CommentSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField()

    def create(self, validated_data):
        comment = Comment.objects.create(text=validated_data['text'])
        return comment

    def update(self, instance, validated_data):
        instance.text = validated_data['text']
        instance.save()
        return instance

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'text')


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('id', 'likes', 'dislikes')


class PostSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    feedbacks = FeedbackSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'author', 'text', 'url', 'is_approved', 'comments', 'feedbacks')


