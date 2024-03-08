import romantico from '../Home/romantico.jpg';
import harry_potter from '../Home/harry_potter.jpg';
import jhon_wick from '../Home/jhon_wick.jpg';
import kung_fu_panda from '../Home/kung_fu_panda.jpg';

export const ContentDetails = ({ title, description }) => {

  return (
    <div>
      <table>
        <tr>
          <td>Titulo: {title}</td>
        </tr>
        <tr>
          <td>descripcion: {description}</td>
        </tr>
      </table>
    </div>
  );
}
export default ContentDetails;