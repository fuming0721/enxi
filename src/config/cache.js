export default {
  get (name) {
    return localStorage.getItem(name) || ''
  },

  set (name, value) {
    localStorage.setItem(name, value)
  },

  remove (name) {
    localStorage.removeItem(name)
  }
}
