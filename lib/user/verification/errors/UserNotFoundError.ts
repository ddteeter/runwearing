export default class UserNotFoundError extends Error {
  constructor(public readonly userId: string) {
    super('User not found')
  }
};
