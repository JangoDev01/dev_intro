from django.shortcuts import render

from .models import To_do

def todo_list(request):
    autor = "Miguel Gabriel"
    
    """
        .objects:
        - é uma interface de consulta que permite interagir com o banco de dados para realizar operações como
          criar, ler, atualizar e excluir objetos do modelo.
            .all() - Retorna todos os objetos do modelo.
            .filter() - Retorna objetos que correspondem a uma condição específica.
            .get() - Retorna um único objeto que corresponde a uma condição específica (lança uma exceção se não encontrar ou encontrar mais de um).
            .exclude() - Retorna objetos que não correspondem a uma condição específica.
            .order_by() - Ordena os objetos com base em um ou mais campos.

    """
    to_do = To_do.objects.all()
    return render(request, "to_do/todo_list.html", {"todo": to_do, "autor": autor})