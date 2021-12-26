const awaitWrap = (promise) => {
    return promise
      .then(data => [data, null])
      .catch(err => [null, err])
}

export {
    awaitWrap
}