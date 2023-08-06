from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Tarefa, Produto


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups', 'password']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class TarefaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tarefa
        fields = '__all__'


class ProdutoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'
