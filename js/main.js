const navBar = () => {
  return `<nav class="navbar">
  <div class="left-nav">
     <h1>TEP<em>ELA.</em></h1>
  </div>
  <div class="right-nav">
      <ul class="nav-links">
          <li>
              <a href="/">About</a>
          </li>
          <li>
              <a href="#">skills</a>
          </li>
          <li>
              <a href="#">projects</a>
          </li>
          <li>
              <a href="#">contact</a>
          </li>
      </ul>
  </div>
</nav>`
}
document.querySelector("nav").innerHTML = navBar()
