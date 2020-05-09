import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"./banner.jpg"} className="" alt="logo" />
        <p className="name">
          ARABUL OPTİK
        </p>
        <div className="content">
          Yeni hayatın normallerini oluşturduğumuz bu dönemde çok yakında yeni arayüzümüz ile web sitemiz yayında olacak...
        </div>
        <div className="address">
          <p>Şehremini Mah. Mimar Kasım Cad. 61/A <br/>Fatih/İSTANBUL</p>
          <p className="tel">0212 529 85 72</p>
        </div>
      </header>
    </div>
  );
}

export default App;
