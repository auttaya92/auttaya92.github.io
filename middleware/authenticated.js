export default function ({ app, redirect }) {
  // If the user is not authenticated

  const cookieRes = app.$cookies.get('uid')
  if (!cookieRes) {
    return redirect('/login')
  }
}
