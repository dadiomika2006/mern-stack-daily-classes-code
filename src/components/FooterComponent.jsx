const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">© 2026 Alpha Mart. All rights reserved.</p>
        <div>
          <a href="/about" className="text-light mx-2">About</a>
          <a href="/contact" className="text-light mx-2">Contact</a>
          <a href="/privacy" className="text-light mx-2">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent; 