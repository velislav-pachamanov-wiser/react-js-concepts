import type { Todo } from '../../types'
import { API_URL } from '@consts/consts'

export type CreateTodoPayload = Omit<Todo, 'id'>

export async function createTodo(todo: CreateTodoPayload): Promise<Todo> {
    const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    });

    if (!response.ok) throw new Error('Failed to create todo');

    return response.json() as Promise<Todo>;
}

export async function fetchTodos(): Promise<Todo[]> {
    const response = await fetch(`${API_URL}/todos`);
    if (!response.ok) throw new Error('Failed to fetch todos');
    const data = await response.json();
    return data as Todo[];
}

export async function fetchTodoById(_id: string | number): Promise<Todo> {
    if (!_id) throw new Error('Todo ID is required')

    const response = await fetch(`${API_URL}/todos/${_id}`);
    if (!response.ok) throw new Error('Failed to fetch todo');

    const data = await response.json();
    return data as Todo;
}

export async function updateTodo(todo: Todo): Promise<Todo> {
    const response = await fetch(`${API_URL}/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error('Failed to update todo');
    return response.json() as Promise<Todo>;
}

export async function deleteTodo(_id: string | number): Promise<void> {
    const response = await fetch(`${API_URL}/todos/${_id}`, {
        method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete todo');
    return response.json() as Promise<void>;
}
