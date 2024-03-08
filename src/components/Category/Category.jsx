import romantico from '../Home/romantico.jpg';
import harry_potter from '../Home/harry_potter.jpg';
import jhon_wick from '../Home/jhon_wick.jpg';
import kung_fu_panda from '../Home/kung_fu_panda.jpg';


export const Category = ({ title, description, img }) => {
  const categorias = ['romance','drama','accion','animacion','comedia'];

const categoriaSeleccionada = categorias.find(categoria => categoria
   === 'romance');

console.log(categoriaSeleccionada);
  return (
    <div>
      <table>
      <tr>
          <td>Categoria: {categoriaSeleccionada}</td>
        </tr>
        <tr>
          <td>Titulo: {title}</td>
        </tr>
        <tr>
          <td>descripcion:{description}</td>
        </tr>
        <tr>
          <td> src={img}</td>
        </tr>
      </table>
    </div>
  );
}
export default Category;