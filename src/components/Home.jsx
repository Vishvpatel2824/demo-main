

function Home(props) {
    const {user} = props
    // console.log(user)
  return (
    <div>
      <h1>Home page</h1>
      <h1>{user.name}</h1>
    </div>
  )
}

export default Home
