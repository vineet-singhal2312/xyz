import "./styles.css";

export default function App() {
  function throttle(func, time) {
    let timer = true;
    return function (...params) {
      if (timer) {
        setTimeout(() => {
          func.apply(this, params);
          timer = true;
        }, time);
      }
      timer = false;
    };
  }
  function log(params, param2) {
    console.log("hii i am console", params, param2);
  }

  const throttleLog = throttle(log, 1000);

  return (
    <div className="App">
      <div
        className="notification-card"
        onClick={() => throttleLog("vineet", "singhal")}
      >
        <img
          className="img"
          alt="img"
          src="https://tse4.mm.bing.net/th?id=OIP.TUZxSRMq6m2pqs9UId34LAHaEo&pid=Api&P=0&w=243&h=153"
        />{" "}
        <div className="user-name-div">
          {" "}
          <a className="user-name">
            Vineet <small>likes your posts</small>
          </a>
        </div>
      </div>
    </div>
  );
}

// card , notification facebook ,
