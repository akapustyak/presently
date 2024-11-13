from .models import User, Wish
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers

UserModel = get_user_model()

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'username', 'password')
        
class СustomUserSerializer(serializers.ModelSerializer):
    followers = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all(), required=False)
    followings = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all(), required=False)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'followers', 'followings']
        
class WishSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Wish
        fields = ['id', 'name', 'description', 'link', 'owner', 'image', 'status']
        read_only_fields = ['id', 'owner']