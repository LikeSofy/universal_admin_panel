export interface JwtData{
  sub: string
  roles: string[]
  name: string
  iat: number
  exp: string
}

export interface Login{
  usernameOrEmail: string,
  password: string
}
