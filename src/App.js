import hotBg from './assets/soleado.jpg'
import coldBg from './assets/frio.jpg'

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type="text" name='city' placeholder='Enter City...'/>
            <button>°F</button>
          </div>
          <div className='section section__temperature'>
            <div className='icon'>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
