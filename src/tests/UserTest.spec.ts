import { User } from '../models/User'

test('tudo ok', () => {
  const user = new User()
  user.name = 'latreta'

  expect(user.name).toEqual('latreta')
})
