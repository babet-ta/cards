import styles from './rate.module.css';

function Rate(props) {
  return (
    <div className={`${styles.card}`} >
      <p className={`${styles.name}`} style={{ backgroundColor: props.dark }}>Безлимитный {props.price}</p>
      <p className={`${styles.price}`} style={{ backgroundColor: props.color }}>руб <span className={`${styles.numbers}`}>{props.price}</span>/мес</p>
      <p className={`${styles.text}`}>
        <p className={`${styles.speed}`}>до {props.speed}/сек</p>
        <p className={`${styles.value}`}>Объем включенного трафика не ограничен</p>
      </p>
    </div >
  );
}

export default Rate;