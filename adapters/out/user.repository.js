// Repository simulado ya que no usamos base de datos real
class UserRepository {
    constructor(database) {
        this.database = database;
    }

    async findByUsername(username) {
        return this.database.find(user => user.username === username);
    }

    async findById(id) {
        return this.database.find(user => user.id === id);
    }
}

module.exports = UserRepository;