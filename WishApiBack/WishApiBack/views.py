from rest_framework import viewsets, status, permissions, generics, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .permissions import IsOwnerOrReadOnly
from .models import User, Wish
from .serializer import WishSerializer, СustomUserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = СustomUserSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['username']

    @action(detail=True, methods=['post'])
    def follow(self, request, pk=None):
        user_to_follow = self.get_object()
        request.user.followings.add(user_to_follow)
        user_to_follow.followers.add(request.user)
        
        return Response({'status': 'user followed'}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['post'])
    def unfollow(self, request, pk=None):
        user_to_unfollow = self.get_object()
        request.user.followings.remove(user_to_unfollow)
        user_to_unfollow.followers.remove(request.user)
        
        return Response({'status': 'user unfollowed'}, status=status.HTTP_200_OK)


class WishListView(generics.ListCreateAPIView):
    serializer_class = WishSerializer
    permission_classes = (IsOwnerOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return Wish.objects.all()