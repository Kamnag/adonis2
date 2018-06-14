'use strict'

const Model = use('Model')

class User extends Model {

    profiles () {
        return this.hasOne('App/Models/Profile',id,pid)
    }
}

module.exports = User
