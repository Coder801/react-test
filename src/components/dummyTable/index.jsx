import style from './table.module.css'

const DummyTable = () => {
  return (
    <div>
      <table className={style.table}>
        <tr>
          <td>Dummy</td>
          <td>Table</td>
        </tr>
      </table>
    </div>
  )
}

export default DummyTable
