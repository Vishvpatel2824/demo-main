

function About(props) {
    const {getData} = props
    getData([{name : "Hello"}, {name : 'Hii'}])
    
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}

export default About
