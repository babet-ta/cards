
import styles from './App.css';
import rates from './rates.js'
import Rate from './components/Rate'

function App() {
  return (
    <div className={`${styles.App}`}>
      {/* <div className={`${styles.App}`}> */}
      {
        rates.map((rate) =>
          <Rate speed={rate.speed} price={rate.price} color={rate.color} dark={rate.darkerColor}></Rate>)
      }
    </div>
    // </div>
  );
}

export default App;
