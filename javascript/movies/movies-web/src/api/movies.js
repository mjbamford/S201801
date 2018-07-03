export function list ({ token }) {
    return fetch(`${process.env.REACT_APP_API_URL}/movies`, {
        headers: { "Authorization": `Bearer ${token}` }
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error("error!")
        } else {
            return resp
        }
    })
    .then(resp => resp.json())
}

export function create ({ token, movie }) {
    return fetch(`${process.env.REACT_APP_API_URL}/movies`, {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
}

export function update ({ token, movie }) {
    return Promise.resolve({})
}