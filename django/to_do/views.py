from datetime import date
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, View # Importa as classes de views genéricas do Django.
from django.urls import reverse_lazy # reverse_lazy é uma função que retorna a URL de uma view com base no nome da view e nos argumentos fornecidos.
from django.shortcuts import get_object_or_404, redirect # a função get_object_or_404 que tenta encontrar um objecto no banco de dados e caso nao encontrar, retorna um 404

from .models import To_do

"""
  A view todo_list é uma view baseada em função (function-based view)
    que recebe uma solicitação HTTP (request) e retorna uma resposta HTTP.
  Ela é responsável por recuperar os objetos do modelo To_do do banco de dados e renderizar um template HTML (to_do/todo_list.html)
    com os dados recuperados. O contexto passado para o template inclui a lista de tarefas (to_do) e o nome do autor (autor).

  .objects:
  - é uma interface de consulta que permite interagir com o banco de dados para realizar operações como
    criar, ler, atualizar e excluir objetos do modelo.
      .all() - Retorna todos os objetos do modelo.
      .filter() - Retorna objetos que correspondem a uma condição específica.
      .get() - Retorna um único objeto que corresponde a uma condição específica (lança uma exceção se não encontrar ou encontrar mais de um).
      .exclude() - Retorna objetos que não correspondem a uma condição específica.
      .order_by() - Ordena os objetos com base em um ou mais campos.
"""
# def todo_list(request):
    # autor = "Miguel Gabriel"

    # to_do = To_do.objects.all()
    # return render(request, "to_do/todo_list.html", {"todo": to_do, "autor": autor})

"""
  A classe Todo_BaseView é uma view baseada em classe (class-based view) que herda de ListView.
  Ela é responsável por carregar a lista de tarefas do modelo To_do e renderizar o template base.html.
  Alem de servir como a view inicial do projeto, onde todas as demais views são carregadas.
"""
class Todo_BaseView(ListView):
    model = To_do
    template_name = "base.html"
    context_object_name = "todo"


"""
  A classe Todo_ListView é uma view baseada em classe (class-based view) que herda de ListView.
  Ela é responsável por exibir uma lista de objetos do modelo To_do. A classe define os seguintes atributos:
    - model: Especifica o modelo que a view irá usar (To_do).
    - template_name: Especifica o template que a view irá usar.
    - context_object_name: Especifica o nome do objeto no contexto do template.
"""
class Todo_ListView(ListView):
    model = To_do
    template_name = "to_do/todo_list.html"
    context_object_name = "todo"

    
"""
  A classe Todo_CreateView é uma view baseada em classe (class-based view) que herda de CreateView.
"""
class Todo_CreateView(CreateView):
  model = To_do
  template_name = "to_do/todo_form.html"
  fields = ["title", "deadline"]
  success_url = reverse_lazy("todo_list")


"""
  A classe Todo_UpdateView é uma view baseada em classe (class-based view) que herda de UpdateView.
  Ela é responsável por exibir um formulário para atualizar um objeto existente do modelo To_do.
  Por padrão, a view irá buscar o objeto a ser atualizado com base no parâmetro "pk" (primary key) passado na URL.
  A classe define os seguintes atributos:
    - model: Especifica o modelo que a view irá usar (To_do).
    - template_name: Especifica o template que a view irá usar.
    - fields: Especifica os campos do modelo que serão exibidos no formulário.
    - success_url: Especifica a URL para redirecionar após a atualização bem-sucedida do objeto.
"""
class Todo_UpdateView(UpdateView):
  model = To_do
  template_name = "to_do/acoes/todo_update.html"
  fields = ["title", "deadline"]
  success_url = reverse_lazy("todo_list")


"""
  A classe Todo_DeleteView é uma view baseada em classe (class-based view) que herda de DeleteView.
  Ela é responsável por exibir um formulário para deletar um objeto existente do modelo To_do.
  Por padrão, a view irá buscar o objeto a ser deletado com base no parâmetro "pk" (primary key) passado na URL.
  A classe define os seguintes atributos:
    - model: Especifica o modelo que a view irá usar (To_do).
    - template_name: Especifica o template que a view irá usar.
    - success_url: Especifica a URL para redirecionar após a exclusão bem-sucedida do objeto.
"""
class Todo_DeleteView(DeleteView):
  model = To_do
  template_name = "to_do/acoes/todo_delete.html"
  success_url = reverse_lazy("todo_list")


"""
"""
class Todo_CompleteView(View):
  def get(self, request, pk):
     todo = get_object_or_404(To_do, pk=pk)
     todo.finished_at = date.today()
     todo.save()

     return redirect("todo_list")