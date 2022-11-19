
function Arreglo() {
  const arreglo = [
    {
      id: 0,
      nombre: "Luciano",
    },
    {
      id: 1,
      nombre: "Fulano",
    },
  ];
  
  return (
    <ul>
      {arreglo.map((i) => (
        <li key={i.id}>{i.nombre}</li>
      ))}
    </ul>
  );
}

export default Arreglo;
