import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";
import Loader from "../Loader/Loader";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import { Rubro } from "../../types/Rubro";
import { RubroService } from "../../services/RubroService";
import ModalRubro from "../ModalRubro/ModalRubro";


const ABMRubro = () => {

  //Variable que va a contener los datos recibidos por la API
  const [rubros, setRubros] = useState<Rubro[]>([]);

  //Variable que muestra el componente Loader hasta que se reciban los datos de la API
  const [isLoading, setIsLoading] = useState(true);

  //Variable que va actualizar los datos de la tabla luego de cada operacion exitosa
  const [refreshData, setRefreshData] = useState(false);


  //Este hook se va a ejecutar cada vez que se renderice el componente o refreshData cambie de estado
  useEffect(() => {
  
    //Llamamos a la función para obtener todos los productos declarado en el service
    const fetchRubros = async () => {
        const rubros = await RubroService.getAllRubro();
        setRubros(rubros);
        setIsLoading(false);
    };
  
    fetchRubros();
  }, [refreshData]);


  //Test, este log está modificado para que muestre los datos de una manera más legible
  console.log(JSON.stringify(rubros, null, 2));


  //Se inicializa una unidad medida vacia cuando vayamos a crear uno nuevo, para evitar "undefined"
  const initializeNewRubro = (): Rubro => {
    return {
        id: 0,
        nombreRubro:'',
        fechaAltaRubro: '',
        fechaBajaRubro:'',
        fechaModificacionRubro: '',
        
    };
  };


//Producto seleccionado que se va a pasar como prop al Modal
const [rubro, setRubro] = useState<Rubro>(initializeNewRubro);

//Manejo de Modal
const [showModal, setShowModal] = useState(false);
const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
const [nombreRubro, setNombreRubro] = useState("");

//Logica de Modal
const handleClick = (newNombreRubro: string, rub: Rubro, modal: ModalType) => {
  setNombreRubro(newNombreRubro);
  setModalType(modal);
  setRubro(rub);
  setShowModal(true);

};





return (

  <>
  <div className="m-3">

      {/* Botón para que cuando el usuario haga click llame a la función que declaramos */}
          <Button onClick={() => handleClick("Nuevo rubro",
              initializeNewRubro(), ModalType.CREATE)}>
              Nuevo rubro
          </Button>

  {isLoading ? <Loader/>: (
         
      <Table>
          <thead>
              <tr>
                  <th> ID </th>
                  <th> NOMBRE </th>
                  <th> FECHA ALTA </th>
                  <th> FECHA BAJA </th>
                  <th> FECHA MODIFICACION </th>
                  <th> ACCIONES </th>
              </tr>
          </thead>

          <tbody>
          {rubros.map((rubro) => (
            <tr key={rubro.id}>
              <td>{rubro.id}</td>
              <td>{rubro.nombreRubro}</td>
              <td>{rubro.fechaAltaRubro}</td>
              <td>{rubro.fechaBajaRubro}</td>
              <td>{rubro.fechaAltaRubro}</td>
              

              <td> <EditButton onClick={() => handleClick("Editar rubro", rubro, ModalType.UPDATE)}/> </td>
              <td> <DeleteButton onClick={() => handleClick("Borrar rubro", rubro, ModalType.DELETE)} /> </td>

              </tr>
              ))}
          </tbody>

      </Table>

  )}

  {showModal && (
      <ModalRubro
      show = {showModal}
      onHide={() => setShowModal(false)}
      nombreRubro= {nombreRubro}
      modalType={modalType}
      rub={rubro}
      refreshData={setRefreshData}
      />
      
  )}

  
  </div>

  </>
)
}


export default ABMRubro;