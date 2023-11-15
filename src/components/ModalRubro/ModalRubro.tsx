import { Button, Form, Modal, Table } from "react-bootstrap";

//Dependencias para validar los formularios
import * as Yup from "yup";
import { useFormik } from "formik";


//Notificaciones al usuario
import { toast } from 'react-toastify';

import { ModalType } from "../../types/ModalType";

import { Rubro } from "../../types/Rubro";
import { RubroService } from "../../services/RubroService";


//Recibe parametros como props para que se renderice, su titulo y según qué operación queremos realizar.
type ModalRubroProps = {
    show: boolean;
    onHide: () => void;
    nombreRubro: string;
    modalType: ModalType;
    rub: Rubro;
    refreshData: React.Dispatch<React.SetStateAction<boolean>>;
  };


const ModalRubro = ({show,onHide,nombreRubro, rub,modalType,refreshData}:ModalRubroProps) => {

  //CREATE-UPDATE función handleSaveUpdate 

  const handleSaveUpdate = async (rub : Rubro) => {
    try {
      const isNew = rub.id === 0;
      if (isNew) {
        
        await RubroService.createRubro(rub);
      } else {
       
        await RubroService.updateRubro(rub.id, rub);
      }

      toast.success(isNew ? "Rubro creado" : "Rubro actualizado", {
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
      
      await RubroService.deleteRubro(rub.id);
      toast.success("Rubro borrado", {
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
            nombreRubro: Yup.string().required('Este campo es obligatorio'),
           
            fechaAltaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
            fechaBajaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
            fechaModificacionUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),        
          });
      };

    const formik = useFormik({
      initialValues: rub,
      validationSchema: validationSchema(),
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: (obj: Rubro) => handleSaveUpdate(obj),
    });


  return (
  <>
  
  { modalType === ModalType.DELETE ? (
    <>

      <Modal show={show} onHide={onHide} centered backdrop="static">

      <Modal.Header closeButton>
        <Modal.Title>{nombreRubro}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p> ¿Está seguro que desea eliminar el producto  
            <br /> <strong> {rub.nombreRubro} </strong> ?
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
        <Modal.Title>{nombreRubro}</Modal.Title>
      </Modal.Header>


      <Modal.Body>

        <Form onSubmit={formik.handleSubmit}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                
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
                    name="nombreRubro"
                    value={formik.values.nombreRubro}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.nombreRubro && !!formik.errors.nombreRubro}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.nombreRubro}</Form.Control.Feedback>
                </td>
                
                <td>
                  <Form.Control
                    type="text"
                    name="fechaAltaRubro"
                    value={formik.values.fechaAltaRubro}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaAltaRubro && !!formik.errors.fechaAltaRubro}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaAltaRubro}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaBajaRubro"
                    value={formik.values.fechaBajaRubro}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaBajaRubro && !!formik.errors.fechaBajaRubro}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaBajaRubro}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaModificacionRubro"
                    value={formik.values.fechaModificacionRubro}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.fechaModificacionRubro && !!formik.errors.fechaModificacionRubro
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.fechaModificacionRubro}
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

export default ModalRubro;
