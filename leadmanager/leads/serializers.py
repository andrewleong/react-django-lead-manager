from rest_framework import serializers

from .models import Lead

# Serializing Lead model
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'