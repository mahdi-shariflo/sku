import Adapters from 'next-auth/adapters'
   // @ts-ignore
   export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
   // @ts-ignore
  constructor(name, email, image, emailVerified) {
    super(name, email, image, emailVerified)
  }
}

export const UserSchema = {
  name: "User",
  target: User,
  columns: {
    // @ts-ignore
    ...Adapters.TypeORM.Models.User.schema.columns,
    // Adds a phoneNumber to the User schema
    phoneNumber: {
      type: "varchar",
      nullable: true,
    },
  },
}