const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export const fetchData = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }
  return response.json()
}
