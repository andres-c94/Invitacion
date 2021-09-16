function modal(){
  
    Swal.fire({

        title: "Marcela! Te amo mas de lo que imaginas!!",
        html: `
        
        <h5>Por favor concertar día y hora con el anfitrión</h5><hr>
        <p align="left"><b>Lugar:</b> Apartamento de chapinero</p>
        <p align="left"><b>Evento:</b> Cena romántica</p>
        <p align="left"><b>Ocasión:</b> Dia del amor y amistad</p>
        <p align="left"><b>No de entrada:</b> 6522</p>
        <p align="left"><b>Alojamiento:</b> posible </p>
        <hr>
        <p>No es neceario traer nada, solo venir y dejarse concentir</p>

        
        
        `,
        confirmButtonText:"Cerrar",
        showConfirmButton: true,
        confirmButtonColor:'#a52a2a',
        imageWidth:'100px',
        imageUrl:'cora.png'
    
        
    });


}

