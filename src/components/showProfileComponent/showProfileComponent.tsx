import React, { useEffect, useState } from "react";

import { ClienteDTO } from "../../types/ClienteDTO";
import { ClienteService } from "../../services/ClienteService";


const ShowProfileComponent: React.FC = () => {
  const [profileData, setProfileData] = useState<ClienteDTO | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await ClienteService.showProfile();
        setProfileData(data);
        console.log("Datos del DTOCliente:", data);
      } catch (error) {
        console.error("Error al recuperar el perfil");
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div>
      <h2>Perfil del Cliente</h2>
      {profileData ? (
        <>
          <p>Nombre de usuario: {profileData.username}</p>
          <p>Nombre: {profileData.nombre}</p>
          <p>Apellido: {profileData.apellido}</p>
          <p>Teléfono: {profileData.telefono}</p>
          <p>Correo electrónico: {profileData.mail}</p>
          {/* Puedes mostrar más detalles del perfil según tus necesidades */}
        </>
      ) : (
        <p>Cargando datos del perfil...</p>
      )}
    </div>
  );
};

export default ShowProfileComponent;
