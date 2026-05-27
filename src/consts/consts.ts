/** Local dev: `/api` → Vite proxy → json-server (`npm run api`). See README. */
export const API_URL =
  import.meta.env.VITE_API_URL ??
  'https://my-json-server.typicode.com/velislav-pachamanov-wiser/react-js-concepts'
