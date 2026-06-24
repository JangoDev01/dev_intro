from django.db import models
from datetime import date

class To_do(models.Model):
    title = models.CharField(verbose_name="Titulo", max_length=200, null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, null=False, blank=False)
    deadline = models.DateField(verbose_name="Data de Entrega", null=False, blank=False)
    finished_at = models.DateField(null=True)

    class Meta:
        ordering = ["deadline"]

    """
        regras de negocios devem ser tratadas na camada de models...
        as views devem ser o mais simples possiveis...
    """
    def mark_has_complete(self):
        if not self.finished_at:
            self.finished_at = date.today()
            self.save()