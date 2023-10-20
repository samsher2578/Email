import './App.css';

function App() {
  return (
    <div className="container">
      <form action="#" method="post">
        <div className="form">
          <div className="contect">
            <h1>Contect Us</h1>
            <hr />
          </div>
          <div className="Fname">
            <label>Full Name</label>
            <input type="text" className="name" />
          </div>

          <div className="mail">
            <label>Email</label>
            <input type="email" className="email" />
          </div>

          <div className="sub">
            <label>Subject</label>
            <input type="text" className="Subject" />
          </div>

          <div className="message">
            <label>Message</label>
            <textarea className="msg" cols="47" rows="10" placeholder='write message...'></textarea>
          </div>  

          <div className="submit">
            <input type="button" value="submit" className='btn-sub'/>
            </div>
        </div>
      </form>
    </div>
  );
}

export default App;