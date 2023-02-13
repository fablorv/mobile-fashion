
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <button><div className="spanone"/> <div className="spantwo"/></button>
        <p className="logo">logo here</p>
      </div>
      <div className="middle">
        <div className="item">
          <button>left</button>
          <p>img of item</p>
          <button>right</button>
        </div>
        <div className="itemswap">
          <button>dots </button>
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
          <p> heart pic </p>
        </div>
      </div>
      
        
    </div>
  );
}

export default App;
