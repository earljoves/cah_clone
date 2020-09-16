function makeId(length) {
  let id = '';
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < length; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }
  return id;
}

module.exports = makeId;
