import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { UnidadMedida } from "../../types/UnidadMedida";
import { UnidadMedidaService } from "../../services/UnidadMedidaService";
import ModalUnidadMedida from "../ModalUnidadMedida/ModalUnidadMedida";
import { ModalType } from "../../types/ModalType";
import Loader from "../Loader/Loader";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";


const AdminComponent = () => {

  //Variable que va a contener los datos recibidos por la API
  const [unidadMedidas, setUnidadMedidas] = useState<UnidadMedida[]>([]);

  //Variable que muestra el componente Loader hasta que se reciban los datos de la API
  const [isLoading, setIsLoading] = useState(true);

  //Variable que va actualizar los datos de la tabla luego de cada operacion exitosa
  const [refreshData, setRefreshData] = useState(false);


  //Este hook se va a ejecutar cada vez que se renderice el componente o refreshData cambie de estado
  useEffect(() => {
  
    //Llamamos a la función para obtener todos los productos declarado en el service
    const fetchUnidadMedidas = async () => {
        const unidadMedidas = await UnidadMedidaService.getAllUnidadMedida();
        setUnidadMedidas(unidadMedidas);
        setIsLoading(false);
    };
  
    fetchUnidadMedidas();
  }, [refreshData]);


  //Test, este log está modificado para que muestre los datos de una manera más legible
  console.log(JSON.stringify(unidadMedidas, null, 2));


  //Se inicializa una unidad medida vacia cuando vayamos a crear uno nuevo, para evitar "undefined"
  const initializeNewUnidadMedida = (): UnidadMedida => {
    return {
        id: 0,
        nombreUnidadMedida:'',
        abreviaturaUnidadMedida: '',
        fechaAltaUnidadMedida: '',
        fechaBajaUnidadMedida:'',
        fechaModificacionUnidadMedida: '',
    };
  };


//Producto seleccionado que se va a pasar como prop al Modal
const [unidadMedida, setUnidadMedida] = useState<UnidadMedida>(initializeNewUnidadMedida);

//Manejo de Modal
const [showModal, setShowModal] = useState(false);
const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
const [nombreUnidadMedida, setNombreUnidadMedida] = useState("");

//Logica de Modal
const handleClick = (newNombreUnidadMedida: string, uniMe: UnidadMedida, modal: ModalType) => {
  setNombreUnidadMedida(newNombreUnidadMedida);
  setModalType(modal);
  setUnidadMedida(uniMe);
  setShowModal(true);

};





return (

  <>
  <div className="m-3">

      {/* Botón para que cuando el usuario haga click llame a la función que declaramos */}
          <Button onClick={() => handleClick("Nueva unidad medida",
              initializeNewUnidadMedida(), ModalType.CREATE)}>
              Nuevo Producto
          </Button>

  {isLoading ? <Loader/>: (
         
      <Table>
          <thead>
              <tr>
                  <th> ID </th>
                  <th> NOMBRE </th>
                  <th> ABREVIATURA </th>
                  <th> CATEGORIA </th>
                  <th> FECHA ALTA </th>
                  <th> FECHA BAJA </th>
                  <th> FECHA MODIFICACION </th>
                  <th> ACCIONES </th>
              </tr>
          </thead>

          <tbody>
          {unidadMedidas.map((unidadMedida) => (
            <tr key={unidadMedida.id}>
              <td>{unidadMedida.id}</td>
              <td>{unidadMedida.nombreUnidadMedida}</td>
              <td>{unidadMedida.abreviaturaUnidadMedida}</td>
              <td>{unidadMedida.fechaAltaUnidadMedida}</td>
              <td>{unidadMedida.fechaBajaUnidadMedida}</td>
              <td>{unidadMedida.fechaModificacionUnidadMedida}</td>

              <td> <EditButton onClick={() => handleClick("Editar unidad medida", unidadMedida, ModalType.UPDATE)}/> </td>
              <td> <DeleteButton onClick={() => handleClick("Borrar unidad medida", unidadMedida, ModalType.DELETE)} /> </td>

              </tr>
              ))}
          </tbody>

      </Table>

  )}

  {showModal && (
      <ModalUnidadMedida
      show = {showModal}
      onHide={() => setShowModal(false)}
      nombreUnidadMedida= {nombreUnidadMedida}
      modalType={modalType}
      uniMe={unidadMedida}
      refreshData={setRefreshData}
      />
      
  )}

  
  </div>

  </>
)
}


export default AdminComponent;