# Generated by Django 4.2.3 on 2023-08-01 09:38

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('marte_api', '0008_produto_alter_tarefa_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tarefa',
            name='user',
            field=models.ForeignKey(default=uuid.UUID('7cad8ebe-4f8b-4b26-a71b-183bab1cf955'), on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]