import style from './style.module.css'

const DummyTable = () => {
  return (
    <table className={style.table} cellPadding="0">
      <tbody>
        <tr className={style.title}>
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tr className={style.text}>
          <td>Hop</td>
          <td>ut.quam.vel@pharetranibhAliquam.net</td>
        </tr>
        <tr className={style.text}>
          <td>Matthew</td>
          <td>In.scelerisque.scelerisque@Aliquamtinciduntnunc.co.uk</td>
        </tr>
        <tr className={style.text}>
          <td>Travis</td>
          <td>Mauris.magna.Duis@quispedeSuspendisse.org</td>
        </tr>
        <tr className={style.text}>
          <td>Isaiah</td>
          <td>auctor@massalobortisultrices.co.uk</td>
        </tr>
        <tr className={style.text}>
          <td>Yoshio</td>
          <td>Curae.Phasellus@musProinvel.com</td>
        </tr>
        <tr className={style.text}>
          <td>Logan</td>
          <td>auctor.Mauris.vel@Uttinciduntvehicula.edu</td>
        </tr>
        <tr className={style.text}>
          <td>Samson</td>
          <td>sociis@et.edu</td>
        </tr>
        <tr className={style.text}>
          <td>Bruce</td>
          <td>vestibulum@fringillaporttitor.org</td>
        </tr>
        <tr className={style.text}>
          <td>Igor</td>
          <td>Vestibulum@arcueu.ca</td>
        </tr>
        <tr className={style.text}>
          <td>Nicholas</td>
          <td>tincidunt.adipiscing@quamquis.co.uk</td>
        </tr>
        <tr className={style.text}>
          <td>Cedric</td>
          <td>In.ornare.sagittis@vitaerisusDuis.com</td>
        </tr>
        <tr className={style.text}>
          <td>Tanek</td>
          <td>tempus.lorem@milacinia.edu</td>
        </tr>
        <tr className={style.text}>
          <td>Lucas</td>
          <td>dui@libero.ca</td>
        </tr>
        <tr className={style.text}>
          <td>Benedict</td>
          <td>porttitor.eros.nec@mauris.org</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DummyTable
