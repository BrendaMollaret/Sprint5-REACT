import { Button, Form, Modal, Table } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { UnidadMedida } from "../../types/UnidadMedida";
import { useEffect } from "react";

type ModalUpdateUnidadMedidaProps = {
    showModal: boolean;
    handleClose: () => void;
    updateUnidadMedida: (id: number, unidadMedida: UnidadMedida) => Promise<void>;
    unidadMedidaToUpdate: UnidadMedida | null;
  };

const ModalUpdateUnidadMedida: React.FC<ModalUpdateUnidadMedidaProps> = ({
  showModal,
  handleClose,
  updateUnidadMedida,
  unidadMedidaToUpdate,
}) => {


  const validationSchema = Yup.object({
    nombreUnidadMedida: Yup.string().required('Este campo es obligatorio'),
    abreviaturaUnidadMedida: Yup.string().required('Este campo es obligatorio'),
    fechaAltaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
    fechaBajaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
    fechaModificacionUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),        
  });

  const formik = useFormik({
    initialValues: {
        id: 0,
      nombreUnidadMedida: '',
      abreviaturaUnidadMedida: '',
      fechaAltaUnidadMedida: '',
      fechaBajaUnidadMedida: '',
      fechaModificacionUnidadMedida: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
        try {
          if (unidadMedidaToUpdate) {
            await updateUnidadMedida(unidadMedidaToUpdate.id, values);
          }
          handleClose();
        } catch (error) {
          console.error("Error al actualizar unidad de medida", error);
        }
      },
      
  });

  function areObjectsEqual(objA: Record<string, any>, objB: Record<string, any>): boolean {
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    for (const key of keysA) {
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
  
    return true;
  }

  
  useEffect(() => {
    if (unidadMedidaToUpdate) {
      const newValues: UnidadMedida = {
        id: unidadMedidaToUpdate.id,
        nombreUnidadMedida: unidadMedidaToUpdate.nombreUnidadMedida,
        abreviaturaUnidadMedida: unidadMedidaToUpdate.abreviaturaUnidadMedida,
        fechaAltaUnidadMedida: unidadMedidaToUpdate.fechaAltaUnidadMedida || '',
        fechaBajaUnidadMedida: unidadMedidaToUpdate.fechaBajaUnidadMedida || '',
        fechaModificacionUnidadMedida: unidadMedidaToUpdate.fechaModificacionUnidadMedida || '',
      };
  
      // Verifica si los valores han cambiado antes de actualizar
      if (!areObjectsEqual(newValues, formik.values)) {
        formik.setValues(newValues);
      }
    }
  }, [unidadMedidaToUpdate, formik]);


  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{unidadMedidaToUpdate ? "Actualizar" : "Agregar"} Unidad de Medida</Modal.Title>
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
          <Button type="submit">{unidadMedidaToUpdate ? "Actualizar" : "Agregar"}</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalUpdateUnidadMedida;
