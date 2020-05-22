import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie';

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push('/login')
  }

  return token
}

export const login = (token) => {
    cookie.set('token', token);
    Router.push('/feed');
}

export const logout = () => {
  cookie.remove('token');
  Router.push('/sign-in');
}