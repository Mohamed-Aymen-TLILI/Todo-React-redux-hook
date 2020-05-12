import * as axios from 'axios';

const apiFirebase = axios.create({
  baseURL: 'https://todo-36c4c.firebaseio.com/'
});

export function saveTodos(todos) {
  return apiFirebase.put("todos.json", todos);
}

export default apiFirebase;