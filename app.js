function Header() {
  return(
    <div>
      <img src="logo.jpg" alt="profile" className="image" />
      <h3 className="text">Aisosa Matthew</h3>
      <h5 className="text1">Frontend developer</h5>
      <div className="btn">
        <button><i className="fa fa-envelope"></i> <a href="aisosamatthew247@gmail.com">Email</a></button>
        <button className="btn1"><i className="fa fa-linkedin-square"></i> LinkedIn</button>
      </div>
    </div>
  )
}

function Main() {
  return(
    <div className="text-content">
      <h2>About</h2>
      <p>"Am i man of vision and purpose set to elevate my world with tech".Am an inpiring front-end developer.
      </p>
      <h2>Interest</h2>
      <p>I love to code, it my greatest desire.
        I love to watch movies, play games and solve problems.
        There is so much about me.</p>
    </div>
  )
}

function Footer() {
  return(
    <div className="footer">
      <a href="https://twitter.com/OgbeborAisosa3"><img src="twitter.png" alt="social-media" /></a>
      <a href="https://m.facebook.com/aisosa.matthew.180?wtsid=rdr_0b4aWol9ILqL1ggwY"><img src="Facebook.png" alt="social-media" /></a>
      <a href=""><img src="github.png" alt="social-media" /></a>
    </div>
  )
}

function App() {
  return(
    <div>
     <Header />
     <Main />
     <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)
