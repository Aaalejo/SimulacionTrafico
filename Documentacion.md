# SimulacionTrafico

  Componente Car
Este componente representa un objeto "car" en la interfaz de usuario. 
Puede ser utilizado para mostrar información sobre un automóvil u otros objetos relacionados con vehículos.

@param {object} props - Las propiedades del componente.
@param {React.Ref} ref - Una referencia opcional para el elemento DOM asociado al componente.
@returns {React.Element} El componente Car.

  Estilos del componente Car
Estos estilos definen la apariencia y el diseño del componente "Car". El componente
representa un objeto "car" en la interfaz de usuario y se utiliza para mostrar información
sobre un automóvil. También  las variables $car-width y $car-height que se utilizan para establecer el ancho y la altura del componente.

  Componente Highway
El componente Highway es una envoltura que contiene elementos o componentes relacionados
con carreteras. Se utiliza para estructurar y estilizar la interfaz de usuario de elementos
relacionados con carreteras, como gráficos de mapas o información de tráfico.

@param {object} props - Las propiedades del componente.
@param {string} axis - La dirección del highway (eje) que puede ser "vertical" o "horizontal".
@returns {React.Element} El componente Highway.

  Estilos del componente Highway
Los estilos definidos aquí son para el componente Highway y sus variantes basadas en el eje
horizontal o vertical). Estos estilos controlan la apariencia y el diseño de elementos relacionados
con las carreteras.

  Componente TrafficLight
El componente TrafficLight representa un semáforo en la interfaz de usuario que muestra
luces rojas, amarillas y verdes que cambian con el tiempo. Este componente controla el
cambio automático de luces y se puede utilizar para simular un semáforo interactivo.

@param {string} light - El estado actual del semáforo ("red", "yellow" o "green").
@param {function} setLight - Una función para cambiar el estado del semáforo.
@returns {React.Element} El componente TrafficLight.

  Estilos del componente TrafficLight
Los estilos definidos aquí son para el componente TrafficLight y sus elementos relacionados.
Estos estilos controlan la apariencia y el diseño de un semáforo con luces rojas, amarillas y verdes.

  Componente App
El componente App es la aplicación principal que controla el semáforo de dos ejes(horizontal y vertical) 
y un automóvil en una carretera simulada.
