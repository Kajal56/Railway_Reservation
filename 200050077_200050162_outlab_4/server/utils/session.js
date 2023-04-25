class Session {
  constructor(username, expiresAt) {
      this.username = username
      this.expiresAt = expiresAt
  }

  // we'll use this method later to determine if the session has expired
  isExpired() {
      this.expiresAt < (new Date())
  }
}

// this object stores the users sessions. For larger scale applications, you can use a database or cache for this purpose

module.exports = Session;