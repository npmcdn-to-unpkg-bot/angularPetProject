# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-08-03 19:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contato',
            name='data',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
