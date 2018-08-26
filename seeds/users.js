exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 99901, name: 'Ambitious Aardvark', email: 'aardvark@example.org', location: 'Moscow'},
        {id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', location: 'Moscow'},
      ])
    })
}
