export function logIn ({ token, email, password }) {
    return fetch(`${process.env.REACT_APP_API_URL}/auth`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(resp => resp.json())
    .then(({ token }) => token)
}