import { Button, Form, Modal, Table } from "react-bootstrap";

//Dependencias para validar los formularios
import * as Yup from "yup";
import { useFormik } from "formik";


//Notificaciones al usuario
import { toast } from 'react-toastify';

import { UnidadMedida } from "../../types/UnidadMedida";
import { ModalType } from "../../types/ModalType";
import { UnidadMedidaService } from "../../services/UnidadMedidaService";


//Recibe parametros como props para que se renderice, su titulo y según qué operación queremos realizar.
type UnidadMedidaModalProps = {
    show: boolean;
    onHide: () => void;
    nombreUnidadMedida: string;
    modalType: ModalType;
    uniMe: UnidadMedida;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
  };


const ModalUnidadMedida = ({show,onHide,nombreUnidadMedida, uniMe,modalType,refreshData}:UnidadMedidaModalProps) => {

  //CREATE-UPDATE función handleSaveUpdate 

  const handleSaveUpdate = async (uniMe : UnidadMedida) => {
    try {
      const isNew = uniMe.id === 0;
      if (isNew) {
        await UnidadMedidaService.createUnidadMedida(uniMe);
      } else {
        await UnidadMedidaService.updateUnidadMedida(uniMe.id, uniMe);
      }

      toast.success(isNew ? "Unidad medida creada" : "Unidad medida actualizada", {
        position: "top-center"
      });
      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error(error);
      toast.error('Ha ocurrido un error');
      
    }

  };



//Función handleDelete (DELETE)
const handleDelete = async () => {
  try {
      await UnidadMedidaService.deleteUnidadMedida(uniMe.id);
      toast.success("Unidad medida borrada", {
          position: "top-center",
      });
      onHide();
      refreshData(prevState => !prevState);
  } catch (error) {
      console.error(error);
      toast.error("Ha ocurrido un error");
      
  }
  
}


   //YUP - Esquema de validación
         const validationSchema = () => {
          return Yup.object().shape({
            id: Yup.number().required('Este campo es obligatorio'),
            nombreUnidadMedida: Yup.string().required('Este campo es obligatorio'),
            abreviaturaUnidadMedida: Yup.string().required('Este campo es obligatorio'),
            fechaAltaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
            fechaBajaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
            fechaModificacionUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),        
          });
      };

    const formik = useFormik({
      initialValues: uniMe,
      validationSchema: validationSchema(),
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (obj: UnidadMedida) => handleSaveUpdate(obj),
    });


  return (
  <>
  
  { modalType === ModalType.DELETE ? (
    <>

      <Modal show={show} onHide={onHide} centered backdrop="static">

      <Modal.Header closeButton>
        <Modal.Title>{nombreUnidadMedida}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p> ¿Está seguro que desea eliminar el producto  
            <br /> <strong> {uniMe.nombreUnidadMedida} </strong> ?
        </p>
      </Modal.Body>

      <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
              Cancelar
          </Button>

          <Button variant="danger" onClick={handleDelete}>
              Borrar
          </Button>
      </Modal.Footer>

      </Modal>

    </>
            ) : ( 

              <>
              
              
              <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{nombreUnidadMedida}</Modal.Title>
      </Modal.Header>


      <Modal.Body>

        <Form onSubmit={formik.handleSubmit}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Abreviatura</th>
                <th>Fecha Alta</th>
                <th>Fecha Baja</th>
                <th>Fecha Modificación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Control
                    type="text"
                    name="nombreUnidadMedida"
                    value={formik.values.nombreUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.nombreUnidadMedida && !!formik.errors.nombreUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.nombreUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="abreviaturaUnidadMedida"
                    value={formik.values.abreviaturaUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.abreviaturaUnidadMedida && !!formik.errors.abreviaturaUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.abreviaturaUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaAltaUnidadMedida"
                    value={formik.values.fechaAltaUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaAltaUnidadMedida && !!formik.errors.fechaAltaUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaAltaUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaBajaUnidadMedida"
                    value={formik.values.fechaBajaUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaBajaUnidadMedida && !!formik.errors.fechaBajaUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaBajaUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaModificacionUnidadMedida"
                    value={formik.values.fechaModificacionUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.fechaModificacionUnidadMedida && !!formik.errors.fechaModificacionUnidadMedida
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.fechaModificacionUnidadMedida}
                  </Form.Control.Feedback>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button type="submit">Agregar</Button>
        </Form>
      </Modal.Body>
              
              </Modal>
              </>


  )}

</>
  
  )



}

export default ModalUnidadMedida;
