from django.shortcuts import render

def todo_list(request):
    return render(request, "to_do/todo_list.html")