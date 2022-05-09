function emailExists(email) {
  fetch(`http://localhost:5000/users/email/check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email }),
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'userExists') {
        return true
      }
      return false
    }
    )
}