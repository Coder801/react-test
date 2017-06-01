import style from './style.module.css' 

const DummyList = () => {

  let list = [];
  for(let i = 0; i <=49; ++i) {
    list.push(<li key={i}>Some wonderful list item {i}</li>)
  } // Just for example

  return (
    <ul className={style.list}>
      { list }
    </ul>
  )
}

export default DummyList
