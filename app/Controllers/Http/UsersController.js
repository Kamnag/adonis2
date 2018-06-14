'use strict'
const User = use('App/Models/User')
const Profile = use('App/Models/Profile')


class UserController {
    async index ({response}) {
        //const user = new User()
        const user = await User.find(1)
        const userProfiles = await user.profiles().fetch()
        console.log(userProfiles)

        //const userProfile = await user.profile().fetch()
        //return User.all()
          
           
    }

    async store({ request, response}){
            //console.log(request.post())
            // await User.create({
            //     username: request.post().username,
            //     password: request.post().password,
            //     email: request.post().email
            // })
            //return User.all()
            await Profile.create({
                post : request.post().post,
                id : request.post().id
            })
            return Profile.all()

    }

    async destroy({ request, response}){
      const user = await User.find(request.params.userId)
      await user.delete()
     
    }

    async update({ request, response}){
        const user = await User.find(request.params.userId)

        user.merge({
            email: "hshsga"
        })

        await user.save()
        //await user.update()
    }


}

module.exports = UserController













       // return response.ok(await User.query().where('id', 3))

        // await User
        //   .query()
        //   .where('username', 'test')
    //       .update({ email: 'admin' })
    //       .delete()

    //     user.username = '1test1723aaa'
    //     user.password = '1tes1t283aaa'
    //     user.email = '1test@te1st83aaa.tes'

    //    console.log(user.email)
    //    await user.save()

    //     return User.all()
    //     return response.ok('good') 