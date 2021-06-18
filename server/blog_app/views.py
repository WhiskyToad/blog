from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog_app.models import BlogPost
from blog_app.serializers import BlogPostSerializer

class BlogPostListView(ListAPIView):
  queryset = BlogPost.objects.order_by('-date_created')
  serializer_class = BlogPostSerializer
  lookup_field = 'slug'
  permission_classes = (permissions.AllowAny,)

class BlogPostDetailView(RetrieveAPIView):
  queryset = BlogPost.objects.order_by('-date_created')
  serializer_class = BlogPostSerializer
  lookup_field = 'slug'
  permission_classes = (permissions.AllowAny,)

class BlogPostFeaturedView(ListAPIView):
  queryset = BlogPost.objects.all().filter(featured=True)
  serializer_class = BlogPostSerializer
  lookup_field = 'slug'
  permission_classes = (permissions.AllowAny,)

