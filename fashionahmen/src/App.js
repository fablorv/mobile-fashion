
import './App.css';
import hoodie from './imgs/hoodie.png'
import leftb from './imgs/arow.svg'
import logo from './imgs/hanmalogo.svg'
import heart from './imgs/heart.svg'
import circle from './imgs/circle.svg'


function App() {
  return (
    <div className="App">
      <div className="header">
        <button><img src={leftb} alt="goback"/></button>
        <img src={logo} alt="logo" className="logo"/>
      </div>
      <div className="middle">
        <div className="item">
          <button><img src={leftb} alt="leftbtn"/> </button>
          <img src={hoodie} alt="hoodie"/>
          <button><img src={leftb} alt="leftbtn" className="rightb"/></button>
        </div>
        <div className="itemswap">
          <button><img src={circle} alt="circle"/> </button>
        </div>
      </div>
      <div className="nameprice">
        <div className="name">
          <p className='unitname'>BLACK HOODIE</p>
          <p className="strokename"> HANMA store </p>
        </div>
        <div className="price">
          <p>3600 DZD </p>
        </div>
      </div>
      <div className="bottom">
        <div className="colors">  
          <p> color: </p>
          <button className='firstcolor'> white </button>
          <button className="secondcolor"> BLACK </button>
        </div>
        <div className="buyheart">
          <button>BUY NOW </button>
          <img src={heart} alt="heart"/>
        </div>
      </div>
      
        
    </div>
  );
}

export default App;
