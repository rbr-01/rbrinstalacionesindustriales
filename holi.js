
const clientes = [
    {
      nombre: "SS CALZADOS.",
      servicios: [
        {  
             numero: "1047",
             fecha: "22/05/2024",
             ruc: "792331-7",
             tipo: "Electro Mecánica",
             equipo: "Equipo calentador chico, formador puntera",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación del equipo el mismo no llega la temperatura programada, se encuentra que via de las resistencias se encuentra totalmente quemada y la otra solo funciona 50% aproximadamente se lleva una de las resistencias al cuerpo cambiador<br>2. Provision de 2 resistencias 220V/ 50 HZ/ 300W en diámetro 16mm precio por unidad 850.000 gs. x 2 unidades= 1.700.000<br>3. Mano de obra montaje de resistencias y mantenimiento del equipo 460.000 gs.",
             costo: "2.160.000 Gs.",
         },
        {  
             numero: "1041",
             fecha: "02/05/2024",
             ruc: "792331-7",
             tipo: "Eléctrico",
             equipo: "Equipo cortador de suelas al cuero; equipos blancos con balancín",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación del equipo cocedor grande con balancín el mismo solo se desplaza para uno de los lados, se cambia el final de carrera del mando por uno nuevo<br>2. Se prueba el equipo y se deja en correcto funcionamiento.",
             costo: "360.000 Gs.",
         },
        {  
             numero: "1038",
             fecha: "16/04/2024",
             ruc: "792331-7",
             tipo: "Eléctrico",
             equipo: "Equipo pegador de calzados",
             sucursal: "Asunción",
             detalles: "<br>1. Trabajos de verificación de equipo pegador de zapatos con problemas en el sistema neumatice carua de aire en la cámara, se remplaza por una electroválvula 3/2 vías bobina 220V y un relé de estado salida para su accionamiento en 220V<br>2. También cambio de final de carrera cierre y apertura de puerta<br>3. El equipo queda operando correctamente<br>4. Materiales<br>- 1 unidad de electroválvula 3/2 vias 220V. 405.000<br>- 3 unidades conectores 1/4 PUN10, 3x 27.300= 81.900<br>- 1 unidad de rele estado solido= 105.000<br>- 1 final de carrera= 49.000.",
             costo: "640.000 Gs."
         },
        {  
             numero: "1037",
             fecha: "15/04/2024",
             ruc: "792331-7",
             tipo: "Electro/ Neumático",
             equipo: "Estirador de hilos para zapatos de cuerina",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación de equipo estirador, el mismo no estira el cuero, el relé de salida no acciona, se procede a cambiar de relé para poner en funcionamiento<br>2. También se cambian las manguera del pistón por resecado de los mismos, cambio de conector averiado por uno nuevo<br>3. Reparación de empalmes de los pedales de accionamientos<br>4. Provisión de materiales<br>- 4 mts manguera PUN6 X 7800= 31.200<br>- 2 conectores curvos 2x 27.000= 54.000<br>5. Mano de obra= 360.000.",
             costo: "414.000 Gs."
         },
        {  
             numero: "1036",
             fecha: "15/04/2024",
             ruc: "792331-7",
             tipo: "Neumático",
             equipo: "Trabajos de equipo grande cambiador con pistón neumático",
             sucursal: "Asunción",
             detalles: "<br>1. Trabajos de verificación de equipo cambiador con pistón neumático, los mismo tienen perdidas en las mangueras; las mismas se encuentran infladas y resecas; también se encuentran 4 te manguera a manguera con problemas en el acople<br>2. Se provee los materiales para su posterior cambio; quedando operativo el equipo<br>3. Materiales<br>- 10 metros de manguera 12 mm cuadrados x 12.700x 10=127.000<br>4. Mano de obra= 360.000.",
             costo: " 487.000 Gs."
         },
        {  
             numero: "1029",
             fecha: "08/04/2024",
             ruc: "792331-7",
             tipo: "Eléctrico",
             equipo: "Trabajos en fabrica",
             sucursal: "Asunción",
             detalles: "<br>1. Trabajos de verificación eléctrica en su domicilio, problemas de perdida de energía detectado por las protecciones existentes(Diferenciales)<br>2. Reparación de tablero; cambio de conexionado <br>3. Cambio de artefactos quemados y tomas ampliadas en los sectores de oficina<br>4. Provisión de materiales= 293.000<br>5. Mano de obra= 460.000.",
             costo: " 753.000 Gs."
         },
        {  
             numero: "1026",
             fecha: "06/04/2024",
             ruc: "792331-7",
             tipo: "Mecánica",
             equipo: "Trabajos de drenaje tanque reservorio aire comprimido",
             sucursal: "Asunción",
             detalles: "<br>1. Trabajos de adecuación de cañería de desagote o purga de agua, de condensado, en tanque reservorio de aire comprimido<br>2. Colocación de caneria galvanizada+ válvula de apertura y cierre<br>3. Arreglo de ventiladores de pie de motor grande.",
             costo: "360.000 Gs."
         },
        {  
             numero: "1021",
             fecha: "03/04/2024",
             ruc: "792331-7",
             tipo: "Eléctrico",
             equipo: "Equipo cortador de cuero(Elitron)",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación de quipo, el mismo no funciona, quema los fusibles se verifica la placa principal y se encuentra que la misma esta con daño en las pistas, quemados y averiado, se lleva para reparación al electrónico.<br>2. Se cambian dos reguladores de tensión del equipo GFN Driver de motor paso a paso del tapete; los ventiladores se encuentran trancados<br>3. Se remplazan las porta fusibles existentes por unos nuevos, de mayor capacidad hasta 20A<br>4. Son remplazados los fusibles a 15A cada uno<br>5. Materiales= 300.000<br>6. Mano de otra electrónico= 260.000<br>7. Mano de obra desmontaje+ montaje= 460.000.",
             costo: "1.020.000 Gs."
         },
        {  
             numero: "1020",
             fecha: "17/03/2024",
             ruc: "792331-7",
             tipo: "Eléctrico",
             equipo: "Casa de Omar",
             sucursal: "Asunción",
             detalles: "<br>1. Colocación e instalación de ventiladores de techo; con provisión de materiales 2x 140.000= 280.000<br>2. Cableado de alimentación eléctrica para cámaras inalámbricas, con provisión de materiales eléctricos. 2x 80.000= 160.000<br>3. Cambio de tomas sector lavadero c/ material= 80.000.",
             costo: " 520.000 Gs."
         },
        {  
             numero: "1019",
             fecha: "16/03/2024",
             ruc: "792331-7",
             tipo: "Eléctrico",
             equipo: "Trabajos varios en su fabrica",
             sucursal: "Asunción",
             detalles: "<br>1. Cambio de lámparas quemadas en su salón de ventas 10 lámparas cambiadas, 10 unidades<br>2. Retiro de ventiladores<br>3. Cambio de capacitores en ventiladores de techo<br>4. Materiales<br>- 10 lámparas dicroica 6w x 19.200= 192.000<br>- 2 Capacitores 2.5ml= 16.000<br>5. Mano de obra cambio lampara, 10 x 20.000= 200.000<br>6. Mano de obra reparación ventiladores x2= 120.000.",
             costo: " 528.000 Gs."
         },
        {  
             numero: "1017",
             fecha: "16/03/2024",
             ruc: "792331-7",
             tipo: "Eléctrico Mecánico",
             equipo: "Equipo cambiador con sistema de frio",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación del equipo, el mismo no funciona el compresor realiza varias veces intento de arrancar y no arranca esto produce un recalentamiento en el compresor y en la moto bomba que recircula el agua fría a las bases<br>2. Se realiza una limpieza al equipo con aire a presión, también se desmonta los capacitores para cambiar por nuevas<br>3. El equipo queda operando correctamente<br>4. Materiales<br>- 1 capacitor 100ml= 196.000<br>- 1 capacitor 25ml. 300V= 87.000<br>5. Mano de obra= 460.000.",
             costo: " 743.000 Gs."
         },
        {  
             numero: "1017",
             fecha: "16/03/2024",
             ruc: "792331-7",
             tipo: "Electrico",
             equipo: "Automatismos en deposito P/ alta",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación de puertas las mismas se encuentran con pruebas, las mismas no accionan se procede a cambiar las fuentes de 12V/ 5A a cada una de las puertas, a una de las puertas se le cambia la cerradura magnética porque no funciona<br>2. Materiales<br>- 2 Unidades de fuente 12V/ 5A x 115.000= 230.000<br>- 2 Unidades de caja porta fuente x 43.500= 87.000<br>- 1 Unidad de cerradura magnética= 460.000<br>3. Mano de obra= 360.000.",
             costo: "1.137.000 Gs."
         },
        {  
             numero: "1016",
             fecha: "15/03/2024",
             ruc: "792331-7",
             tipo: "Eléctrico Mecánica",
             equipo: "Compresor Schulle 4015",
             sucursal: "Asunción",
             detalles: "<br>1. Desmontaje de compresor Schullz 4015 desarme y bajar de su lugar de trabajo, se lleva al proveedor para su reparación<br>2. Montaje de compresor Schullz 4015 en su lugar de trabajo<br>3. Se coloca en su lugar, conexión física cañería y conexión eléctrica<br>4. Prueba y puesta en marcha.",
             costo: " 860.000 Gs."
         },
        {  
             numero: "1004",
             fecha: "13/02/2024",
             ruc: "792331-7",
             tipo: "Eléctrico",
             equipo: "Raspador de calzados trifásico",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación de equipo raspador, el mismo no funciona se procede a verificar todas las conexiones físicas del equipo y se encuentra que la llave de corte no funciona, no deja pasar dos fases y se coloca directo para que el cliente pueda utilizar<br>2. Provisión de llave de corte 3x32A= 186.000<br>3. Mano de obra desmontaje y montaje= 360.000.",
             costo: " 546.000 Gs."
         },
        {  
             numero: "0999",
             fecha: "03/02/2024",
             ruc: "792331-7",
             tipo: "Electro Neumático",
             equipo: "Trabajos de reparación de equipo pegador de calzado",
             sucursal: "Asunción",
             detalles: "<br>1. Verificación de equipo el mismo no funciona, no realiza los procesos y tiene perdida en las electroválvulas.<br>2. Se procede a verificar el funcionamiento de PVC; el mismo no responde a las ordenes; se verifican todos los sensores y el final de correas falsea y la señal no es segura<br>3. Se cambian dos electroválvulas del pistón de alzar pistón y de cierre de puerta<br>4. Materiales<br>4.1. 2 electroválvulas 24vcc. 5/2 vías 2x450.000= 900.000<br>4.2. 1 plc 220V salida 24vcc a rele= 620.000<br>4.3. 1 final de carrera marca lovato= 125.000<br>5. Mano de obra= 660.000",
             costo: " 2.305.000 Gs."
         },
             {  
                 numero: "0988",
                 fecha: "03/12/2023",
                 ruc: "792331-7",
                 tipo: "Refrigeración",
                 equipo: "Sanitario planta alta, casa de sus padres",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de sanitario, co colocación de cañería provisoria<br>2. Provisión de cañería nueva + ducha nueva<br>3. Montaje del mismo<br>3. Provisión de materiales<br>- Caño flexible mecánico= 173.500<br>- Ducha portátil cromado= 142.500<br>4. Mano de obra= 160.000.",
                 costo: " 476.000 Gs."
             },
  
            {  
                 numero: "0985",
                 fecha: "03/12/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Reparación equipo cambiador",
                 sucursal: "Asunción",
                 detalles: "<br>Descripción poco visible .",
                 costo: " 608.5000 Gs."
             },
  
            {  
                 numero: "0976",
                 fecha: "04/11/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico/ Mecánico",
                 equipo: "Cortador élitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación eléctrica de equipo cortador elitron, el mismo tiene problemas en uno delos motores de la cuchilla, se verifica que la tensión de la transformaciones llegue a las tensiones de la placa<br>2. También se cambia la goma de sellado de la válvula de vacío, por una adecuada de alta temperatura<br>3. OBS: la anomalía de problema fue solucionada por el cliente Omar Saucedo; en uno de los conectores<br>3. Provisión de 100mm x 100mmx 3mm. goma alta temperatura= 160.000<br>4. Provisión de cable tipo taller 4x1.5mmx15cm= 157.500<br>5. Mano de obra= 360.000.",
                 costo: "677.500 Gs."
             },
  
            {  
                 numero: "0975",
                 fecha: "04/11/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Armador de puntería",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo armador de punta, el mismo tiene problemas con un tornillo recalentado que se rompió y quedo dentro de la pieza, se desmonta la pieza para llevar a reparar<br>2. Se retira la pieza rota y se repasa la rosca, con tornillos inoxidables<br>Se vuelve a montar las partes y se deja funcionando correctamente el equipo.",
                 costo: "460.000 Gs."
             },
  
            {  
                 numero: "0971",
                 fecha: "30/10/2023",
                 ruc: "792331-7",
                 tipo: "Calentador de suelos",
                 equipo: "Calentador de suelos",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de quipo, el mismo no calienta, según el operador a veces tiene que esperar varios minutos para volver a hacer funcionar; se procede a desmontar las partes del equipo para llegar al final de la correa<br>2. Se provee dos finales de correas nuevas y se deja funcionando correctamente el equipo<br>3. Se verifica nuevamente el equipo por problemas de controlador de tiempo, el mismo no funciona correctamente, solo cuenta de ves en cuando, se procede a desmontar y cambiar por uno nuevo provisto por el cliente<br>4. Provisión de 2 unidades finales de correa 2x 49.000= 98.000<br>5. Mano de obra, montaje de final de correa= 360.000<br>6. Mano de obra, montaje de controlador de tiempo= 360.000.",
                 costo: "818.000 Gs."
             },
  
            {  
                 numero: "0969",
                 fecha: "24/10/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Armador de punta",
                 sucursal: "Asunción",
                 detalles: "<br>1. Desmontaje de acumulador hidráulico, para llevar a proveedor para su carga, de nitrógeno en 30 NEXTON<br>2. Se deja en observación por 24 hs por garantía en el equipo, se provee y se vuelve a montar el equipo queda operando correctamente<br>3. Materiales<br>- Aceite hidráulico YPF. BP. 18L= 650.000<br>-Carga de nitrógeno= 450.000<br>4. Mano de obra= 360.000 .",
                 costo: "1.460.000 Gs."
             },
  
          {  
                 numero: "0965",
                 fecha: "18/10/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Raspador grande",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo, el mismo no funciona, se encuentra que los botoneras de parada y de arranque no responden, se procede al cambio de las mismas por nuevas, cambio de pulsador de parada, por un pulsador de parada de emergencia<br>2. También el cambio de pulsador de arranque<br>3. El equipo queda funcionando correctamente<br>3. Provisión de materiales<br>- 1 pulsador parada= 67.000<br>-1 pulsador arranque= 49.500<br>4. Mano de obra= 260.000.",
                 costo: " 376.500 Gs."
             },
  
            {  
                 numero: "0964",
                 fecha: "15/10/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Cortador grande con sistema de soldadura eléctrico",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo cortador eléctrico, el mismo tiene varias falencias en el accionamiento de ingreso y egreso de las plantillas, provoca falso contacto en las placas de aluminio<br>2. Se desmonta todos los accesorios para llegar al problema, se encuentra el resorte roto; en la soldadura existente y destruido los tres rodamientos que tiene la rueda de teflón, con trabajos de tornería para solucionar el alojamiento de los rodamientos<br>3. Provisión de 1 resorte pre-fabricado= 68.000<br>4. Provisión de 3 rodamientos 6006 ZR x 98.500= 295.000<br>5. Mano de obra= 460.000.",
                 costo: " 843.500 Gs."
             },
  
            {  
                 numero: "0961",
                 fecha: "09/10/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Rascador chico",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del equipo raspador el mismo con problemas en la llave de alimentación existentes en el equipo<br>2. Se provee una llave nueva; tipo selectura para tablero 3x25A<br>3. Mano de obra montaje + puesta en marcha= 260.000<br>4. Provisión de material= 125.000.",
                 costo: " 385.000 Gs."
             },
  
            {  
                 numero: "0956",
                 fecha: "03/10/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Mantenimiento correctivo compresor de aire marca Schulz",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo compresor de aire comprimido a tornillo marca Schulz 4015 a tornillo, el mismo se encuentra con el nivel de aceite adecuado pero, sucio se procede a reemplazar los filtro de aceite, filtro separador aire/ aceite, filtro de aire, cambio de aceite, también cambio de correas<br>2. Limpieza de tablero eléctrico con reajuste de los contactos eléctricos<br>3. El equipo queda funcionando correctamente .",
                 costo: " 660.000 Gs."
             },
            {  
                 numero: "0954",
                 fecha: "03/10/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajo  ",
                 sucursal: "Asunción",
                 detalles: "<br>1. Provision de tubos fluorescentes 58W luz neutra 25x8.500= 212.500<br>2. Provision de artefactos completos con tubos led 220V luz blanca 2x115.000= 230.000<br>3. Provision de 3 artefactos porta lampara + 3 unidades de lampara led 18W luz blanca 3x 49.000= 147.000<br>4. Mano de obra= 360.000.",
                 costo: "949.500 Gs."
             },
  
            {  
                 numero: "0951",
                 fecha: "02/10/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Reparación de equipo cortador hidráulico",
                 sucursal: "Asunción",
                 detalles: "<br>1. Provisión de botonera de tres contactos tipo pulsador= 75.000<br>2. Fabricación de pomo inoxidable adaptado para su acoplamiento del mismo equipo= 360.000<br>3. Mano de obra, montaje de pomo e instalación de pulsador al equipo= 360.000<br>4. El equipo corta, pero tiene problemas en la regulación hidráulica, se aguarda respuesta de fabricante.",
                 costo: "695.000 Gs."
             },
  
            {  
                 numero: "0941",
                 fecha: "11/09/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Cambiador grande(con pistones)",
                 sucursal: "Asunción",
                 detalles: "<br>1.Verificaion de equipo cambiador el mismo tiene un problema de que no baja el pistón derecho para realizar el cambiado, se verifican todas las sannales eléctricas, si las mismas cambian correctamente los pulsos eléctricos<br>2. Se verifica el sistema neumático, las electroválvulas y las válvulas activadoras, uno de los actuadores no funciona correctamente, deja pasar defectuosamente el aire comprimido<br>3. Se desmontan todas las partes mecánicas del pistón derecho con problemas, se realiza la reparación del paso de rosca del tornillo, también se desmonta el pistón neumático para verificar y hacer la reparación correspondiente; se lleva al proveedor para probar, terminado la verificación se vuelve a montar dejando en funcionamiento el equipo<br>4. Mano de obra, proveedor: control de fluido por trabajos de pruebas en banco de pruebas, lubricación y armado de 490.000<br>5. Mano de obra, desmontaje+ montaje= 660.000.",
                 costo: "1.150.000 Gs."
             },
  
            {  
                 numero: "0939",
                 fecha: "02/09/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Armador de talón",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo armador de talón, el mismo tiene problemas de los sensores inductivos no detecta correctamente, se procede a desmonatr el mismo para buscar uno nuevo<br>2. Se verifica otro problema de la pima de agarre superior se encuentra que un temporizado tipo rele no acataba ordenes y no, deja que entre a funcionar el proceso<br>3. Materiales provistos<br>- 1 sensor inductivos con cabezal y conectar= 720.000<br>4. Mano de obra= 360.000.",
                 costo: " 1.080.000 Gs."
             },
  
            {  
                 numero: "0938",
                 fecha: "02/09/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Armador de puntera",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo armador de puntera, el mismo persiste en una perdida de aceite hidráulico, en la válvula actuadora, que contiene el presurizador, el mismo tiene perdida en el conector roscado, se desmonta y se provee uno nuevo en (bronce)cobre, con sello tellonado.",
                 costo: " 360.000Gs."
             },
  
              {  
                 numero: "0926",
                 fecha: "08/80/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Estirador/ Armador zapatos de cuerina",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo estirador y armador de puntas de zapatos de cuerina<br>2. Se desmontan todas las partes protectoras para llegar al motor principal; el mismo se encuentra sobre pasado el cinturón no corto el final de carrera se ajustan los accesorios que se encuentran totalmente flojos<br>3. Se cambia de posición el final de carrera para que el mismo corte tranquilamente.",
                 costo: " 360.000 Gs."
             },
   
            {  
                 numero: "0919",
                 fecha: "06/08/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Cortador de punta",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del equipo armado de punta, el mismo tiene una deficiencia en la presión del sistema hidráulico, la presión no se mantiene estable, el acumulador no tiene la carga adecuada<br>2. Se lleva al proveedor para su posterior carga y verificación, el proveedor recomienda solo dejar 10% por debajo de la presión de trabajo, eso da 50bar de presión<br>3. Se monta nuevamente el acumulador, luego de dos días se procede una perdida de aceite en la base del acumulador, se desmonta se lleva la pieza a ser cambiad por una nueva, con unión nueva+ anillos de cobre para el sellado<br>4. El equipo se queda operando correctamente.",
                 costo: " 822.000 Gs."
             },
  
             {  
                 numero: "0918",
                 fecha: "06/08/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico/ Mecánica",
                 equipo: "Cortador elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del equipo cortador de cuero, el mismo tiene problemas en uno de los válvulas, desmontaje y se lleva a montar una nueva<br>2. Se lleva a tornería la base del saca locabo del mismo<br>3. El equipo queda funcionando correctamente.",
                 costo: " Gs."
             },
  
            {  
                 numero: "0917",
                 fecha: "04/08/2023",
                 ruc: "792331-7",
                 tipo: "Refrigeración",
                 equipo: "Reparación de secador de aire",
                 sucursal: "Asunción",
                 detalles: "<br>1. Perforación de equipo secador, el mismo se encontraba totalmente obstruido el evaporador, eso produce que el aire no elimine la humedad del aire<br>2. Se desmonta para realizar la limpieza del evaporador y destrancar la cañería de desagüe<br>3. Se verifica que el purgador automático funcione correctamente<br>4. El equipo queda operando correctamente.",
                 costo: "660.000 Gs."
             },
  
            {  
                 numero: "0915",
                 fecha: "04/08/2023",
                 ruc: "792331-7",
                 tipo: "Refrigeración",
                 equipo: "Cambiador con frio",
                 sucursal: "Asunción",
                 detalles: "<br>1. Mantenimiento correctivo, se procede a la remoción de todas las partes móviles, como ventilador y agua del tanque reservorio. Se retira todo el agua existente<br>2. También se realiza el reajuste partes de cobre; del sistema de frio<br>3. Cambio de manguera averiada por nueva<br>4. Cambio de anticongelante, se utiliza uno proveído por el cliente<br>5. El equipo queda operando correctamente<br>6. Mano de obra= 600.000<br>7. Materiales, manguera= 260.000.",
                 costo: " 860.000 Gs."
             },
  
            {  
                 numero: "0914",
                 fecha: "26/07/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico/ Mecánica",
                 equipo: "Instalación de equipo cortador hidráulico nuevo",
                 sucursal: "Asunción",
                 detalles: "<br>1. Provisión de cable tipo talle 4x4mm cuadrados para alimentación principal<br>2. Cableado a tablero de comando con provisión de llave térmica para protección<br>3. Desmontaje de seguros de guías para liberar el movimiento del equipo<br>4. Verificación de motor del sistema hidráulico, el mismo presenta un ruido de rose, se verifica que el motor se encuentre centrado al manchón y se vuelve a ajustar todo, se pone en marca y persiste el rose, aparentemente es producido por la bomba de aceite.",
                 costo: "1.300.000 Gs."
             },
  
            {  
                 numero: "0912",
                 fecha: "17/07/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Reparación de equipo armador puntera",
                 sucursal: "Asunción",
                 detalles: "<br>1. Trabajos de reparación de equipo armador de puntera, el mismo tiene perdida en el pistón de giro para armado, se procede al desmontaje para verificar y proceder a su reparación<br>2. Se realiza la fabricación de las cubetas, pero no son efectivas, no deja armar por lo duro del material<br>3. Se busca otra alternativa y encontramos que hay uno que si le va, se prueba y queda funcionando correctamente también, se deja a nivel el aceite en el reservorio .",
                 costo: "790.000 Gs."
             },
  
            {  
                 numero: "0903",
                 fecha: "03/07/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Cortador de cuero elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de cuchilla de cortar, cueros el mismo se encuentra engranado, se cambia dos rulemanes del eje principal y uno de la exentrica.2. Se fabrican 4 ejes para cambio de rodamientos y colocación de los mismos, con provisión de rodamientos<br>3. Provisión de materiales<br>- 6 rodamientos NAC605ZZ 6x 78.750= 472.500<br>- 3 Rodamientos KOY698ZZ 3x49.600<br>- 4 ejes exenticos 4x 180.000= 720.000<br>- armado y desarme del mismo(mano de obra)= 360.000 ",
                 costo: " 1.701.300 Gs."
             },
             {  
                 numero: "0896",
                 fecha: "20/06/2023",
                 ruc: "792331-7",
                 tipo: "Electro/ mecánico",
                 equipo: "Trabajos varios en su casa",
                 sucursal: "Asunción",
                 detalles: "<br>1. Cambio de reactores de lámparas 18W 3x31.000= 93.000<br>2. Cambio de lámparas 6w 2x29.000= 58.000<br>3. Provisión de 2 equipos 20W para dormitorio 2x37.000<br>4. Provisión de lampara 105W led para alumbrado, parte posterior de la fabrica= 107.000<br>5. Mano de obra por trabajos eléctricos= 260.000.",
                 costo: " 592.000 Gs."
             },
  
            {  
                 numero: "0894",
                 fecha: "15/06/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Reparación de cortadora de cuero elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del equipo, el mismo tiene problemas el marcador de velocidad entra en estado de error y esto nos permite que el equipo pueda funcionar<br>2. Después de unos minutos el variador da acuse de falla nuevamente, se desmonta el variador para su limpieza y volver a montar para probar, el mismo vuelve a dar los mismos problemas, se retira para llevar a verificar y tratar de dar una solución, se trae nuevamente para probar y funciona correctamente po runas horas y luego nuevamente el problema<br>3. Se espera la llegada del nuevo variador para su montaje y se realiza perforaciones para que salga el calor del variador a fuera del tablero<br>4. El equipo queda apernado correctamente, con el variador nuevo.",
                 costo: " 1.250.000 Gs."
             },
  
            {  
                 numero: "0888",
                 fecha: "08/06/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajos de cambio de acometida, tablero equipo electromecánico de corte",
                 sucursal: "Asunción",
                 detalles: "<br>1. Retiro de cableado existente, para desplazar los en forma provisoria para alimentar el tablero al transformador y dejar operando correctamente.",
                 costo: "460.000 Gs."
             },
            {  
                 numero: "0885",
                 fecha: "28/05/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Trabajos de mecánica en fabrica",
                 sucursal: "Asunción",
                 detalles: "<br>1. Trabajos de reparación de puerta metálica, con refuerzos en la parte posterior, y cerradura nueva= 78.000<br>2. Mano de obra= 160.000<br>3. Trabajos cambio de lámparas en salón de ventas 4x 30.000= 120.000<br>3. Provisión de 4 lámparas 4x 19.2000.",
                 costo: " 434.800 Gs."
             },
            {  
                 numero: "0884",
                 fecha: "26/05/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajos eléctricos en deposito planta alta",
                 sucursal: "Asunción",
                 detalles: "<br>1. Retiro de las conexiones de motores eléctricos de tipo extractores<br>2. Retiro de cableado existente con circuito eléctrico existente, y se retira el ducto y cableado.",
                 costo: " 260.000 Gs."
             },
  
            {  
                 numero: "0883",
                 fecha: "26/05/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajos de adecuación dectrica pasillo ampliación de fabrica",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de iluminación pasillo, las lámparas se encuentran agotadas, se prueba la fotocélula para verificar los mismo y el funcionamiento<br>2. Se deja en funcionamiento<br>3.Mano de obra= 120.000<br>4. Provisión de lampara 2x32.000= 64.000.",
                 costo: "184.000 Gs."
             },
  
            {  
                 numero: "0872",
                 fecha: "16/05/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Motor averiado raspadora",
                 sucursal: "Asunción",
                 detalles: "<br>1. Desmontaje de motor monofásico, el miso se encuentra quemado, la bobina de arranque por motivos de que el capacitor exploto adentro y eso afecto a la misma<br>2. Se lleva a rebobinado para su cambio, se vuelve a armar para su posterior armado<br>3. Rebobinado de motor y cambio de rodamientos y capacitor nuevo= 760.000<br4. Mano de obra= 260.000.",
                 costo: "1.020.000 Gs."
             },
  
            {  
                 numero: "0871",
                 fecha: "17/05/2023",
                 ruc: "792331-7",
                 tipo: "Mecánico",
                 equipo: "Compresor Schultz 4015, mantenimiento correctivo",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de compresor Schulz, a tornillo el mismo presenta anomalías de alta temperatura, en el cabezal, se procede al desmontaje de los filtros de aceite, filtro separador aire/ aceite, filtro de aire y acerita<br>2. Se cambian todos los elementos de compresor<bvr>3. Se desmonta el evaporador recirculador de aceite caliente<br>4. Se realiza la limpieza de todo el compresor<br>5. Se deja operando correctamente<br>6. Materiales<br>-Casa de los compresores= 2.505.000<br>7. Mano de obra= 800.000.",
                 costo: " 3.305.000 Gs."
             },
  
            {  
                 numero: "0869",
                 fecha: "13/05/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Trabajos de reparación cortadora elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Trabajos de reparación de equipo cortador de cuero marca ELITRON, con problemas de que uno de los overoles denominado T2, tiene un movimiento en el mismo eje<br>2. Se procede al desmontaje del eje para llegar al motor, se verifica el motor y se encuentra que uno de los ejes tiene gastado la chaveta, eso proporciona un desgaste considerable<br>3.Se fabrican nuevas chavetas para volver a probar<br>4. Se arma de nuevo todas las partes mecánicas y se deja en excelentes condiciones de funcionamiento, provisión de chavetas 4 x 25.000= 100.000<br>5. Mano de obra= 650.000.",
                 costo: "750.000 Gs."
             },
  
            {  
                 numero: "0868",
                 fecha: "03/05/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Maquina de raspado de cuero",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de motor con embrague; el mismo presenta problemas para su arranque, el rodamiento se encuentra engranado se desmonta para su reparación<br>2. Se monta otro motor similar; se deja en condiciones de funcionamiento, el equipo queda operando correctamente .",
                 costo: " Gs."
             },
  
  
            {  
                 numero: "0866",
                 fecha: "20/04/2023",
                 ruc: "792331-7",
                 tipo: "Mecánico",
                 equipo: "Fabricación de lapicero en latón y aluminio con accesorios en latón",
                 sucursal: "Asunción",
                 detalles: "<br>1. Fabricación de lapicero en latón con accionamiento mecánico, con provisión de materiales= 685.000<br>2. Fabricación de lapicero en aluminio y puntas y accesorios en latón, con acondicionamiento manual= 490.000.",
                 costo: "1.175.000 Gs."
             },
  
            {  
                 numero: "0865",
                 fecha: "20/04/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico/ Mecánico",
                 equipo: "Trabajos varios en fabrica",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo de iluminación en área de maquinas de coser<br>2. Provisión de 2 lámparas E27/ 40W 2x29.000= 58.000<br>3. Provisión de 1 reactor 24W/ 220V= 28.500<br>4. Mano de obra, armado de lámparas= 90.000<br>5. Reparación de dos sellos de bronce 2x60.000= 120.000.",
                 costo: " 296.500 Gs."
             },
  
            {  
                 numero: "0864",
                 fecha: "20/04/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Cortador y formador de cuero",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo formador y cortador de cuero, el mismo presenta varios bulones en estado oxidado y flojo<br>2. Se procede a desmontar todos los bulones en mal estado; se procede a limpiarlos y volver a montar<br>3. Se realiza la verificación de todos los Barnes y reajustar los mismos, se prueba el equipo y queda operando correctamente.",
                 costo: "400.000 Gs."
             },
  
            {  
                 numero: "0861",
                 fecha: "10/04/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Calentador de zapatos con cinta transportadora",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo calentador de zapatos el mismo presenta averias, no funciona se procede a verificar todas las partes eléctricas<br>2. Cada circuito, placas y cable de tomas y demás encontramos que la llave limitadora se encuentra con problema solo deja pasar una fase y dos no<br>3. Se reemplaza la misma por una llave 3x30A trifásica marca STEK<br> 4. Se deja el equipo en correcto funcionamiento<br>5. Materiales<br>- 1 llave TM 3x30Ax260.000<br>6. Mano de obra x 160.000.",
                 costo: " 420.000 Gs."
             },
  
            {  
                 numero: "0860",
                 fecha: "14/04/2023",
                 ruc: "792331-7",
                 tipo: "Electro/ Mecánica",
                 equipo: "Colocación y fabricación de soporte para iluminación, zona de pegado",
                 sucursal: "Asunción",
                 detalles: "<br>1. Trabajos de fabricación de soporte metálico para sujeción de equipos de tubos led de 40W/ 220V<br>2. Fabricación de soportes para colocación luz UV, provisto por el cliente<br>3. Colocación de interruptores para su encendido, independiente de cada linea <br>4. Colocación de cabo de acero 3/6'' de diámetro con abrazaderas galvanizadas<br>5. Materiales<br>- 30m cabo galvanizado(acero)30x60.000= 180.000<br>- 1 abrazaderas 4x12.000= 48.000<br>- 1 interruptor para encendido= 38.000<br>- 4 tubos led + soporte+ zócalos= 116.000<br>6. Mano de obra= 680.000 .",
                 costo: " 1.062.000 Gs."
             },
  
            {  
                 numero: "0859",
                 fecha: "30/03/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Vivienda de Don Silvino/ reparación acometida ",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificacion de acometida vivienda de don Silvino en el mismo, se encuentran las cueatro uniones, totalmente quemada y una de ellas en peores condiiciones las mismas son removidas y remplazadas por prensas dentadas<br>2. Materiales<br>- 4 prensas dentadas 63.000= 252.000<br>3. Mano de obra= 260.000.",
                 costo: " 512.000 Gs."
             },
            {  
                 numero: "0857",
                 fecha: "01/04/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Conexión de tablero de equipos a; trafo nuevo de 150KVA/ 23KV eb media tensión",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de cableado de tablero de equipos, se preparan las conexiones para su posterior cableado al trafo nuevo de 150 KVA, con llave limitadora de 200A, tipo caja precintable, colocación de prensas dentadas nuevas, con aislación vulcanizante<br>2. Se realiza la conexión y control de tensión en el tablero con medición dando valores de 232V/F,N. 410V/LF<br>2. Se deja en excelentes condiciones de funcionamiento.",
                 costo: " Gs."
             },
  
            {  
                 numero: "0855",
                 fecha: "28/03/2023",
                 ruc: "792331-7",
                 tipo: "Mecanico",
                 equipo: "Mesada para sector de pegadores",
                 sucursal: "Asunción",
                 detalles: "<br>1. Fabricación y provision de mesada en acero inoxidable, con patas de acero al carbono y pintura automativa beige con refuerzo en la parte inferior.",
                 costo: " 750.000 Gs."
             },
  
            {  
                 numero: "0854",
                 fecha: "29/03/2023",
                 ruc: "792331-7",
                 tipo: "Mecánico",
                 equipo: "Carritos porta calzados",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de dos carritos porta zapatos, los mismos tienen ruedas rotas<br>2. Se desmontan las 4 ruedas por carritos, con refuerzo en las soldaduras con perfil  C y ruedas de metal con buje metálico<br>3. Materiales<br>- (8) ruedas giratorias con rueda de hierro 8 x 118.000= 944.000<br>- (2)mano de obra, desmontaje + montaje 2x 160.000= 320.000.",
                 costo: "1.264.000 Gs."
             },
            {  
                 numero: "0853",
                 fecha: "21/04/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Armador de talón",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo, el mismo no cumple un paso por culpa de un final de correa<br>2. Se procede a su reemplazo por uno nuevo mecánico, con un accionamiento NC+NO<br>3. Se deja el equipo en funcionamiento<br>4. El cliente provee el repuesto, fabricación de soporte para su fijación en el equipo.",
                 costo: "460.000 Gs."
             },
  
            {  
                 numero: "0852",
                 fecha: "13/03/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajos varios/ Eléctricos",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipos de iluminación<br>2. Cambio de los drivers de alimentación, 3 unidades de 12W/220V 3x 43.000= 129.000<br>3. Mano de obra 3x 30.000= 90.000.",
                 costo: "219.000 Gs."
             },
  
            {  
                 numero: "0851",
                 fecha: "09/03/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Armador de talón",
                 sucursal: "Asunción",
                 detalles: "<br>Armador de talón, el mismo no puede sostener la presión de 60 por motivos de que el presurizador hidráulico se lleno de aceite y ya no cumple su función, se procede al desmontaje para llevar al proveedor y preparación de uno nuevo<br>2. Se retira el presurizador para su posterior montaje<br>3. Se realiza un mantenimiento al reservorio y completar el nivel de aceite<BR>4. Materiales<br>- Presurizador nuevo, con accesorios nuevos y recargada de nitrógeno 30= 4.900.000<br>- Mano de obra, desmontaje y montaje= 460.000.",
                 costo: "5.3600.000 Gs."
             },
  
            {  
                 numero: "0845",
                 fecha: "09/03/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajos eléctricos em obra(fabrica sector nuevo)Planta baja/ planta alta y salones",
                 sucursal: "Asunción",
                 detalles: "<br>1 Picado de pared planta baja, con tomas y circuitos de iluminación, con provisión de materiales<br>2. Colocación de cajas de conexión en loza para iluminación de fachada de salón y entrada de fabrica<br>3. Cableado de instalación eléctrica según plano adjunto<br>4. Provisión de de artefactos de embutir en cielo razo<br>5. Provisión de puntos y tomas eléctricas para planta alta y baja<br>6. Provisión de tablero eléctrico, con barras y llaves iluminadora, adecuadas para TC en sanitario<br>7. Tomas Shukos para sector de cocina<br>8. Materiales incluye placas, cables y artefactos0 2.460.000<br>9. Mano de obra= 2.600.000.",
                 costo: " 5.600.000Gs."
             },
  
            {  
                 numero: "0844",
                 fecha: "01/08/2023",
                 ruc: "792331-7",
                 tipo: "Mecánico",
                 equipo: "Neumático sujetador de zapato para pegado",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del equipo sujetador de zapato para pegado<br>2. Trabajos de fabricación de soporte porta base de metal disennado en el local, con trabajos de soldadura y montaje<br>3. El equipo queda operando correctamente.",
                 costo: "320.000 Gs."
             },
  
            {  
                 numero: "0835",
                 fecha: "16/02/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Cambio de nombre para la ampliación de la fabrica",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del sitio, preparación de documentación para actualizar<br>2. Trifasicacion del mismo sitio 3 x 40A<br>3. Ademas de sitio, cambio de acometida 4x 16mm cuadrado, cable de 4 x 16mm cuadrados, cambio de hoja de llaves<br>4. Con provision de materiales y presentación de documentación para el sitio<br>5. Cable tipo taller 4 x 16mm cuadrados x 15 metros= 555.000<br>6. Cable pre ensamblado 4 x 25mm cuadrados x 13 metros= 286.000<br>7. Caja de llaves, 6 llaves= 172.000<br>8. Llave TM 3x40A= 290.000<br>9. Prensa dentada grande 8 unidades x 27.000= 216.000<br>10. Mano de obra= 1.200.000.",
                 costo: " 2.719.000Gs."
             },
  
            {  
                 numero: "0831",
                 fecha: "15/02/2023",
                 ruc: "792331-7",
                 tipo: "Calentador de suela",
                 equipo: "Calentador de suela",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificaion de equipo calentador de suela, el mismo calienta en la parte superior para después pegar el zapato<br>2. Se verifican las residencias en la parte inferior y superior<br>3. Se realiza la medición de todas las resistencias y reajuste de bornes mecanicos<br>4. El equipo quedo correctamente.",
                 costo: " 460.000 Gs."
             },
  
            {  
                 numero: "0830",
                 fecha: "13/02/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajos varios después de la caída de un rayo",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del tablero de control del equipo grande nuevo para soldadura en cuero, el mismo sufrió una descarga del mismo, la llave TM que se encuentra en el medidor se soldó a los bornes donde descargo el rayo<br>2. Se procede al cambiar la llave por una nueva <br>3. Se reemplaza los cables averiados <br>4. Se cambiaron varios artefactos chico de la maquina de coser; se deja  en funcionamiento los equipos.",
                 costo: " 1.010.000Gs."
             },
  
            {  
                 numero: "0829",
                 fecha: "08/02/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Armador de puntera",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo, el mismo se encuentra en circulación del pistón, porque los conectores tienen fuga y no estira el cuero<br>2. Se procede al desmontaje del mismo, para su posterior remplazo<br>3. Provisión de 4 unidades, conector curvo x 22.500= 90.000<br>4. Mano de obra= 260.000.",
                 costo: "350.000 Gs."
             },
  
            {  
                 numero: "0828",
                 fecha: "02/02/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Cortador de cueros elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo cortador de cuero, marca elitron el mismo presenta problemas o sacabocado<br>2. Se encuentra los tornillos rotos y el tope roto, se procede a rectificador los pasos y cambio de tornillos<br>3. Se deja el equipo funcionando correctamente.",
                 costo: " 360.000Gs."
             },
  
            {  
                 numero: "0822",
                 fecha: "27/01/2023",
                 ruc: "792331-7",
                 tipo: "Electro/ Mecánica",
                 equipo: "Tipo maquinaria de coser automática grande",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de equipo, el mismo se encuentra con problemas en la placa de control de brazo mecánico<br>2. Se realiza la reparación del mismo con componentes de reemplazo de tipo comparativos, el cual no queda funcionando y se procede a desmontar para realizar una adaptación para que funcione correctamente<br>3. Adaptación de contactores y finales de correa para el acondicionamiento<br>4. Fabricación de sensores para controlar el movimiento <br>5. Provisión de materiales<br>- 01 trafo de 24VC. SA<br>Contactores + barnes<br>6. Mano de obra .",
                 costo: "1.350.000 Gs."
             },
  
             {  
                 numero: "0820",
                 fecha: "21/01/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Reparación estantería, planta alta fabrica",
                 sucursal: "Asunción",
                 detalles: "<br>1. Desmontaje de cuadro principal, para modificación de espacio superior y también espacio para lo ancho para que ingrese dos coges a la vez<br>2. Modificación de espacio con refuerzos<br>3. Modificación de columnas de metal para refuerzo vertical<br>4. Mano de obra<br>- 6mts perfil C de 75 x 45x 2mm cuadrados<br>- Soldadura perforación y adecuación de 1 unidad estantería<br>OBSERVACION= <br>- Queda pendiente la realización del segundo estante, a coordinar con el cliente<br>- El presupuesto es x unidad.",
                 costo: "690.000 Gs."
             },
            {  
                 numero: "0819",
                 fecha: "20/01/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Trabajos varios en fabrica",
                 sucursal: "Asunción",
                 detalles: "<br>1. Cambio de conectores averiados en sector de raspado= 160.000<br>2. Desmontaje de placa de porton, con provision de 2 sensores de tipo magnético nivel bajo y alto 2 x 60.000= 120.000<br>3. Cambio de reactor equipo lampara led 24W 220V, sector de la cocina planta alta en su domicilio= 90.000<br>mantenimiento evaporador 18ml btu evaporador= 160.000<br>Instalación eléctrica impresora= 160.000.",
                 costo: " 590.000 Gs."
             },
               {  
                 numero: "0818",
                 fecha: "20/01/2023",
                 ruc: "792331-7",
                 tipo: "Electro/ Mecánica",
                 equipo: "Reparación equipo caldera, con humectación de vapor",
                 sucursal: "Asunción",
                 detalles: "<br>1. Desmontaje de partes móviles para su verificación del equipo y llegar a las partes dañadas y reemplazarlos por nuevos, se cortan las partes afectadas en acero inoxidables y se reponen por nuevas con trabajo de plegados y soldadura y aporte en max 308, desmontaje de pistones neumáticos cada cambio de kit de reparo neumático con cambio de bobina 220V/ 50HZ<br>2. Provisión de turbina inoxidable con base, aislación con lona de vidrio 350 grados para aislación, cambio de resistencias quemadas<br>3. Materiales<br>- Chapa máx. 430.2.5mm cuadrados 1x 1.868.000<br>- Trabajos de plegados + soldadura= 640.000<br>- Provisión de turbina max según muestra= 986.000<br>- Fabricación de base para turbina= 1.250.000<br>- Mano de obra= 1.000.000.",
                 costo: "5.744.000 Gs."
             },
            {  
                 numero: "0812",
                 fecha: "09/01/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Arreglo sector maquina de corte marca elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Provisión de canaleta mecánica 120x 50 tipo galvanizado 4 tiras de 3 metros<br>2. Tablero de control y empalme, con llave limitadora de fuerza y limitadora de mandos de tomas con protección contra rayos<br>3. Mano de obra, montaje y desmontaje de las conexiones existentes<br>4. El equipo queda operando correctamente<br>5. Materiales<br>- 4 Canaleta metálica= 616.000<br>- 4 Uniones p/ canaleta= 68.000<br>- 4 Protectores p/ rayos= 648.000<br>- 1 Llave 3 x 50A= 238.000<br>6. Mano de obra= 460.000.",
                 costo: "2.030.000 Gs."
             },
  
            {  
                 numero: "0811",
                 fecha: "05/01/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico/ Refrigeración",
                 equipo: "Secador de aire",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación de secador de aire, el mismo se encuentra protegido por temperatura, el equipo enfriador no funciona, se encuentra la serpentina totalmente obstruida, eso hacer que el equipo arranque<br>br.2. Se realiza el desmontaje del secador para su posterior limpieza<br>3. El equipo quedo operando correctamente",
                 costo: "360.000 Gs."
             },
  
            {  
                 numero: "0808",
                 fecha: "03/01/2023",
                 ruc: "792331-7",
                 tipo: "Electro/ Mecánica",
                 equipo: "Cambiador grande/ con sistema de frio",
                 sucursal: "Asunción",
                 detalles: "<br>1. Desmontaje de todas las partes móviles para su posterior limpieza, con kerosen las serpentinas y los accesorios<br>2. Se vuelven a limpiar el reservorio, colector de agua fría, con abundante agua fría, con abundante agua<br>3. Se montan los accesorios, se realiza la limpieza de las electroválvulas; con ajuste de los tornillos y de los rakors<br>4. Se completa con glicol diluido en agua destilada al 30% y se deja en funcionamiento por 60 minutos para dejar a nivel el agua preparanda en el reservorio<br>5. El equipo queda operando correctamente.",
                 costo: "560.000 Gs."
             },
            {  
                 numero: "0807",
                 fecha: "04/01/2023",
                 ruc: "792331-7",
                 tipo: "Mecanica",
                 equipo: "Compresor de aire comprimido scullz",
                 sucursal: "Asunción",
                 detalles: "<br>1. Desmontaje de todas las partes mecánicas filtros de aire en la succion y en la aspiracion<br>2. Desmontaje de filtros de aceite y filtro separador aire/ aceite<br>3. Desmontaje de serpentina refrigeradora de aceite<br>4. Desmontaje de electroventilador; desmontaje de correas para su posterior cambio<br>5. Limpieza de serpentina, con desengrasante y con hidro lavadora para remover todas las impuresas aderidas<br>7. Cambio de aceite viejo por nuevo, cambio de filtro de aceite y filtro de aire<br>8. Desmontaje de secador de aire, para su limpieza<br>9. Lavado del mismo con desengrasante y la limpieza con hidro lavadora<br>10. Se deja funcionando correctamente los equipos.",
                 costo: " 896.500Gs."
             },
  
            {  
                 numero: "0806",
                 fecha: "03/01/2023",
                 ruc: "792331-7",
                 tipo: "Mecánica",
                 equipo: "Cortador de cuero/ elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Limpieza de guías, con rompimientos rectos para movimientos laterales de tipo horizontales<br>2. Lubricacion de guias, con grasa enaerosol siliconado, especial para rodamientos rectos<br>3. Fabricación de rejillas con metal expandido y electroventiladores para refrigeración de servo motores y del costado derecho donde se encuentra el verificador grande con rejilla<br>4. Materiales<br>- 2 extractores x 105.000= 210.000<br>- 1 rejilla expandida= 305.000<br>5. Mano de obra= 320.000.",
                 costo: " 835.000 Gs."
             },
  
            {  
                 numero: "0805",
                 fecha: "02/01/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico",
                 equipo: "Cortador de cuero/ elitron",
                 sucursal: "Asunción",
                 detalles: "<br>1. Se procede a desmontar los servo motores GFHO, GFH1, GF20 y GFZ1 para su verificación, los mismos presentan visualmente rasgos de sobrecalentamiento en las placas de control de potencia, se realiza la verificación electrónica de los servicios y limpieza de los diodos rectificadores integrados y reemplazo de la pasta térmica de los disparadores de los 4 servo motores.<br>2. Se realiza la prueba y no se encuentra modificaciones sigue la alarma 001 en el sevo, se procede a reemplazar el cableado del motor x un cable tipo taller 4 x 1.5mm, para reemplazar el existente 4 x 0.5mm, se realiza un empalme el los extremos de los terminales para la llegada del motor y el servo; se realiza las pruebas y efectivamente funciona el equipo se realizan varias pruebas. Satisfactorias el equipo quedo operando correctamente<br>3. Verificación de placa de fuente por técnico tercerizado= 160.000<br>4. Cable tipo taller 4 x 1.5 mm cuadrados x 12m x 6500= 78.000<br>5. Mano de obra= 460.000 .",
                 costo: " 698.000 Gs."
             },
  
           {  
                 numero: "0804",
                 fecha: "02/01/2023",
                 ruc: "792331-7",
                 tipo: "Cortador de cuero/ elitron",
                 detalles: "Eléctrico/ Mecánica",
                 equipo: "<br>1. Verificación de equipo, el mismo se encuentra con un problema de vesel; en el T2, problema de motor, emitido al AL001, en el servo motor/ o driver. Delta A2 ASDA<br>2. Se verifican los motores tanto delantero e trasero en la estación de corte T2; no se encuentra diferencia, sigue dando el mismo problema, se procede a desmontar los ejes donde van alojados los rodamientos del eje H; son reemplazados por nuevas marcas japonesas SKF, en la estación T2; con los cambios de rodamientos, tampoco tenemos mejorías sigue la AL001 en el mismo driver<br>3. Se procede al desmontaje del otro motor de la estación T1; motor de eje H y se reemplaza los rodamientos del mismo eje por nuevos 7200 SKF; japones, terminado el montaje se procede a montar el motor de la estación T1 a la estación de T2 eje H; no se encuentra cambio sigue dando la falla en el sevo motor AL001",
                 sucursal: "Asunción.",
                 costo: "1.720.000 Gs."
             },
            {  
                 numero: "0803",
                 fecha: "02/01/2023",
                 ruc: "792331-7",
                 tipo: "Eléctrico/ Mecánica",
                 equipo: "Raspador Grande (color blanco)",
                 sucursal: "Asunción",
                 detalles: "<br>1. Desmontaje de motor 1, 1/2'' HP. Monofasico<br>2. Desmontaje de eje turbina succionadora de desechos<br>3. Rectificador de eje de turbina; con cambio de 160.000, rodamientos 6206. 2 x 96.000= 192.000<br>4. Cambio de rodamientos 6202 de motor 2 x 96.000= 192.000<br>5. Rectificacion de motor averiado= 170.000<br> 6. Provision de correa V tipo A48= 95.000<br>7. Mano de obra, armado de motor + turbina puesta en marcha= 460.000<br>8. El equipo queda operando correctamente.",
                 costo: "1.269.000 Gs."
             },
                     {  
                         numero: "0802",
                         fecha: "28/12/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Prensa hidraulica",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provision de plancha 600x400x19mm con fundicion de aluminiio= 2.100.000<br>2. Mano de obra por montaje= 360.000<br>3. El equipo queda operando correctamente.",
                         costo: "2.460.000 Gs."
                     },
                     {  
                         numero: "000794",
                         fecha: "15/11/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico/ Mecánico",
                         equipo: "Trabajos Varios en fabrica",
                         sucursal: "Asunción",
                         detalles: "<br>1. Montaje de ventiladores nuevos de pared industrial= 160.000<br>2. Provisión de 6m cable tipo taller 2x2mm cuadrados= 48.000<br>3. Desmontaje + montaje de ventilador de pared industrial)remoción de punteados de soldadura<br>4. Reparación de proyector UV, cambio de bornes y cables de alimentación + interruptor tipo perilla= 140.000<br>5. Arreglo de cables y tomas sector de maquinas de coser= 120.000<br>6. Provisión de mangueras PUN10 (4m) + manguera enrollada PUN10 de (25m), conector de 1/4 a manguera PUN10, de manquera a manguera PUN10, reductor de bronce + conector rápido= 372.000<br>Mano de obra, instalación de mangueras= 160.000.",
                         costo: "1.300.000 Gs."
                     },
         
                    {  
                         numero: "000792",
                         fecha: "14/11/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Slon de ventas y domicilio",
                         sucursal: "Asunción",
                         detalles: "<br>1. Trabajos eléctricos de arreglo de lamparas quemadas cambiadoras por nuevas, 3 lamparas de 18W de adozar color blanco<br>2. Provision de materiales<br>- 2 Artefactos 18W de adozar marca averlute 2x66.000= 132.000<br>- 3 Lamparas 6W 6U10 color blanco 3x 19.500= 58.500<br>3. Mano de obra 5x30.000= 150.000.",
                         costo: "340.000 Gs."
                     },
         
                    {  
                         numero: "000791",
                         fecha: "14/11/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Cortador de cuelo elitron",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo cortador de cuero, marca elitron, el mismo no arranca se encuentra que los contactores de, uno de los protectores no deja que ingresen y no habilita los contactos internos<br>2. Se verifican todos los reguladores de tensión y reguladores; también se repara el GNF con soldadura estañada<br>3. Mantenimiento de contactores del sistema de fuerza eléctrica, el mismo quedo operando correctamente.",
                         costo: " 660.000 Gs."
                     },
                    {  
                         numero: "000784",
                         fecha: "24/10/2022",
                         ruc: "792331-7",
                         tipo: "Electro/ Mecánica",
                         equipo: "Trabajos varios",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de compresores de aire Schulz, 4015 exceso de temperatura, el mismo se encuentra con el filtro totalmente obstruido, se realiza la limpieza, control de nivel de aceite y recirculación del mismo; se deja funcionando a la temperatura entre 80 grados y 94.3 grados centigrados= 160.000<br>2. Verificaion de equipo termo contraíble, sistema de rociador de agua cambiador, con sistema de frio, el mismo se encuentra con problemas de sobre calentamiento, el mismo condensador totalmente ostruido por la suciedad= 160.000 .",
                         costo: " 480.000 Gs."
                     },
         
                    {  
                         numero: "000780",
                         fecha: "19/10/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrica",
                         equipo: "Cortador de cuero elitron",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo, cortador de cuero<br>2. Verificación de circuito eléctrico del sector fuerza, se analiza todas las alarmas y las protecciones y cables de fuerza<br>3. Verificación de las placas de comando de las placas MEIT, MEIO; con cableado de 50 pmes<br>4. Verificación de PC; cambio de fuente de potencia<br>5. Verificación de las fuentes en las tensiones 14 VCA y 49 VCA<br>6. Cambio de puente rectificador 408(4) pines<br>7. Verificación de placa TI006, alimentación eléctrica 24 VCC<br>7. Reparación de bornes de muerter GNF01; motor alimentación tapete.",
                         costo: " 900.000 Gs."
                     },
         
                    {  
                         numero: "000778",
                         fecha: "07/1/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Fabricación de picos inyectores, equipo armador de puntera",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de barulla de acero 1050. 20c, x 110.000= 110.000<br>2. Provisión de varilla de acero máx. 4.5mm x 60CM= 69.000<br>3. Trabajos de tornería, fabricación de perforación y rosca paso 1/2x 1.5mm= 340.000<br>4. Desmontaje + montaje= 360.000.",
                         costo: " 879.000 Gs."
                     },
                     {  
                         numero: "000776",
                         fecha: "27/09/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Equipo elitron (cortador grande)",
                         sucursal: "Asunción",
                         detalles: "<br>1. Cambio de llave termomagnética tipo TM 3x40A, Marca loveto capacidad de rutura 10 KVA<br>2. Desmontaje de llave existente, medición de entrada y salida de tensión 398W/ 397V/ 398V/232<br>El equipo queda operando correctamente<br>Provisión TM 3X40A; 1X169.000= 169.000<br>Mano de obra= 260.000.",
                         costo: "429.000 Gs."
                     },
         
                    {  
                         numero: "000775",
                         fecha: "23/09/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Rapador grande/ equipo cambiador con frio",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo raspador, no arranca se verifica los pulsadores y el pulsador de arranque no funciona, se procede a cambiar por nuevo, el equipo queda operando correctamente<br>2. Verificación de equipo cambiador con frio, el mismo falsea su pulsador y se encuentra desarmado por el uso se reemplaza por uno nuevo; el equipo queda operando, correctamente<br>3. Provisión de mat, 2 pulsadores verde x 49.000= 98.000<br>4. Mano de obra= 260.000.",
                         costo: " 358.000 Gs."
                     },
         
                     {  
                         numero: "000774",
                         fecha: "22/09/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Maquina de coser, grande",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificaion de equipo el mismo deja pasar energía por la carcaza y eso deja perdida la descarga a la persona operadora del equipo, se realiza un sistema de puesta a tierra de tipo malla; con cable verde, amarillo 2.5mm<br>2. También se coloca el sistema de puesta a tierra a la carcaza del equipo y al variador de velocidad<br>3. Quedo operando correctamente el equipo<br>4. Materiales<br>- 2 jabalinas de 1.5m; 1/2 o 2x 47.000= 94.000<bv>5. Mano de obra= 260.000.",
                         costo: "354.000 Gs."
                     },
         
                    {  
                         numero: "000769",
                         fecha: "15/09/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Raspador, fondo",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación equipo, el mismo tiene problema de polea, se encuentra totalmente gastado, la correa patina y no funciona correctamente el raspador<br>2. Se fabrica un porta chaveta y un paso de rosca para asegurar la chavetera<br>3. El cliente provee la polea<br>4. Se desmonta el existente y se coloca el nuevo, el equipo quedo operando correctamente.",
                         costo: "260.000 Gs."
                     },
         
                    {  
                         numero: "000767",
                         fecha: "05/09/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Cortador de cuero elitron",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo cortador de cuero marca elitron el mismo se encuentra con un sobre calentamiento en dos fases del cortador trifasico del motor principal<br>2. Se realiza una limpieza al variador de frecuencia se encuentra totalmente ostruido<br>3. Se cambio el contador trifasico LCD32A/ 24VCA por falso contacto, queda operando correctamente<br>4. Provision de materiales<br>- Contactor LCD32A/24A= 1.003.755<br>5. Mano de obra= 460.000.",
                         costo: "1.463.755 Gs."
                     },
         
                    {  
                         numero: "000766",
                         fecha: "05/09/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Reparación de cuchilla para cortar elitron",
                         sucursal: "Asunción",
                         detalles: "<br>1. Desmontaje de motor de cuchilla, el mismo se encuentra con un desgaste considerable; en el eje se rellena y se vuelve rectificador<br>2. También se cambian las bujes de bronce a la medida del eje<br>3. Armado del mismo.",
                         costo: "630.000 Gs."
                     },
         
                    {  
                         numero: "000765",
                         fecha: "05/09/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Compresor de aire comprimido; marca Schulz 40i5",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de compresor de aire schullz 40i5, se encuentra que el componente antirretorno con separador de aire/ aceite no funciona porque queda abierto, se procede al desmontaje del mismo, para reemplazarlo por uno nuevo<br>2. Se instala el componente separador, se procede a completar el aceite a nivel adecuado, se procede a reajustar los componentes mecánicos<br>3. Limpieza de filtro de aire<br>4. El equipo queda operando correctamente.",
                         costo: "750.000 Gs."
                     },
         
                    {  
                         numero: "000763",
                         fecha: "22/05/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Compresor de aire schulla; 4015",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de compresor de aire schullz; 40i5, el, el mismo se encuentra protegido por temperatura, se verifica que el nivel de aceite y el mismo se encuentra en el nivel minimo<br>2. Se completa para dejar a nivel y se prueba dejando el equipo en funcionamiento<br>3. Se verifica una gran cantidad de aceite en el reservorio de aire de 500l ; se debe realizar la rectificación del compresor<br>4. El equipo quedo en funcionamiento.",
                         costo: "400.000 Gs."
                     },
         
                    {  
                         numero: "000760",
                         fecha: "16/08/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Cortador de cuero elimon",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo, el mismo no enciende el panel de control, se procede a verificar todas las partes electricas<br>2. Se procede a relizar las verificaciones en los reles accionamiento y proteccion<br>3. Se verifican cada uno de los cables y tranformadores de control<br>4. Se pone todas las protecciones puntuadas y tampoco enciende las placa del PLC; le llega la tensión 19VCA + 24VCA + 51VCA.",
                         costo: " 300.000 Gs."
                     },
         
                    {  
                         numero: "000758",
                         fecha: "19/03/2022",
                         ruc: "792331-7",
                         tipo: "Mecánico",
                         equipo: "Cortador de cuero",
                         sucursal: "Asunción",
                         detalles: "<br>1. Trabajos de desmontaje de chapa para instalación de metal expandido, con provisión de materiales con refuerzos de planchuela de 1'' reforzado + tornillos + pintura + colocación<br>2. Provisión de materiales<br>- 2m x 1m; chapa expandida= 406.000<br>- 6m plancheta de 1'' reforzada= 79.000<br>- Tornillos + junta de goma= 60.000<br>3. Mano de obra= 400.000 .",
                         costo: "945.000 Gs."
                     },
         
                    {  
                         numero: "000753",
                         fecha: "02/08/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico/ Mecánica",
                         equipo: "Reparación motor 1 HP monofásico",
                         sucursal: "Asunción",
                         detalles: "<br>1. Reparación de motor de 1HP/220V con problemas de explosión de capacitores<br>2.Provision de materiales=<br>- 1 Capacitor 12202 WIF 220V; 550V= 126.000<br>- 1 Capacitor 30AWIF.220V= 92.000<br>2. Mano de obra, montaje+ puesta en marcha= 260.000.",
                         costo: " 720.000 Gs."
                     },
         
                    {  
                         numero: "000751",
                         fecha: "02/03/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico/ Mecánica",
                         equipo: "Reparación, raspador de cuero mbg",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo el mismo se encuentra con problema, se verifica esta trancada el eje del mismo; se procede al desmontaje para su posterior cambio de rodamiento 6202W dos unidades y reajuste de seguros para los rodamientos<br>2. Se realiza 1 HP 2780 rpm, Marca WEG<br>3. Provisión de materiales= <br>-Llave imitadora 3x32A= 196.000<br>-Rele termino para protección motor 1 a 25A= 1.130.000<br>- Rodamientos 6203 UL 2x47.0000= 94.000<br>- Mano de obra mecánica y eléctrica= 900.000.",
                         costo: "2.535.000 Gs."
                     },
         
                    {  
                         numero: "000750",
                         fecha: "02/03/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrica",
                         equipo: "Trabajos electrónicos en su domicilio",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de dos lámparas de adosar 12W/ 220V; para instalación; loza sector maquina corta cuero 33.000x2= 66.000<br>2. Provisión de artefacto 18W/ 220V en el dormitorio de su hija 47.000x1= 47.000.",
                         costo: "353.000 Gs."
                     },
         
                     {  
                         numero: "000749",
                         fecha: "02/08/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Raspador de calzados",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación equipo raspador<br>2. El mismo se encuentra con problemas en el arranque, trabaja y queda con dos fases; se encuentra que el pulsador de emergencia pasa dos fases. Las mismas son reemplazadas por nuevas<br>3. Provisión de materiales= <br>- 1 Selectora 0-1 de 63A= 299.992<br>- 1 Pulsador de emergencia= 67.000<br>4. Mano de obra= 360.000.",
                         costo: " Gs."
                     },
         
                    {  
                         numero: "000747",
                         fecha: "29/07/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Reparación de carrito",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de carrito porta calzados<br>2. Provisión de 4 ruedas x 32.000= 128.000<br>3. Mano de obra= 120.000.",
                         costo: " 48.000 Gs."
                     },
         
                    {  
                         numero: "000746",
                         fecha: "20/07/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Reparación tanque reservorio 500lts",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de válvula de purga; la misma se encuentra rota y no cierra<br>2. Se provee válvula de cierre en bronce 5/3= 173.000<br>3. Conectores 5/8'' a 1/2'' 2x 27.000= 54.000<br>4. Válvula automática 220V= 754.000<br>5. Mano de obra= 300.000.",
                         costo: " 1.281.00Gs."
                     },
         
                     {  
                         numero: "000742",
                         fecha: "27/07/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Compresor de aire comprimido schullz",
                         sucursal: "Asunción",
                         detalles: "<br>1. Dos conectores 18 cm WM 105. 2x144.441= 255.882<br>2. Un cortador 09CWM 103. 1x124.637= 124.637<br>3. Guarda motor RW270. 1x267.370= 267.370<br>4. Un rele falta de fase a/ secuena metro= 327.052<br>5. Mano de obra; desmontaje+ montaje, conectores+ protecciones= 800.000.",
                         costo: " 1.807.941 Gs."
                     },
         
         
                    {  
                         numero: "000741",
                         fecha: "19/07/2022",
                         ruc: "792331-7",
                         tipo: "Refrigeración/ Neumatica",
                         equipo: "Cinta transportadora con inyección de vapor",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo, calentador a vapor de agua, el mismo se encuentra con astruccion e el sistema de inyección de agua y aire comprimido<br>2. Se desmonta el cabezal, y se destranca el mismo se reajustaran todas las mangueras<br>3. Limpieza de la válvula soleinoide, se destranca la mimsma<br>3. El equipo quedo operando correctamente.",
                         costo: "360.000 Gs."
                     },
         
                    {  
                         numero: "000739",
                         fecha: "15/07/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Cortadora de cueros elitron",
                         sucursal: "Asunción",
                         detalles: "<BR>1. Desmontaje de motor movimiento horizontal y desarme<br>2. Montaje de motor nuevo + armado del mismo<br>3. Colocación de conectores y demás accesorios móviles, el equipo queda operando correctamente.",
                         costo: "360.000 Gs."
                     },
         
                    {  
                         numero: "000737",
                         fecha: "13/07/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Maquina cortadora de cuero",
                         sucursal: "Asunción",
                         detalles: "<br>1. Desmontaje de pieza, verificaion de soporte motor, reductor; desmontaje de buje ranurado= 400.000<br>2. Trabajos de tornería:<br>2.1. Fabricación de eje tipo canoa= 550.000<br>2.2. Templado de eje= 150.000<br>2.3. 3 Rodamientos 60032Z; 3x75.000 japones= 225.000<br>2.4. 3 Rodamiento 63022Z; 3x65.000 japones= 285.000<br>2.5. 1kg de graza especial para rodamientos japoneses= 195.00<br>2.6. Tornillos en acero= 65.000<br>2.7. 1 Rolen 30.07<br>2.7. Montaje de piezas+ puesta en marcha= 650.000.",
                         costo: "1.036.000 Gs."
                     },
         
                    {  
                         numero: "000732",
                         fecha: "29/06/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Pegador y armado de puntera",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo, pegador de puntera de calzados<br>2. Reparación de 2 piezas de acero, emparejamiento de base y pulildo de las mismas<br>3. Una de las piezas pulidas presenta un desgaste considerable y se le modifica al cliente para solicitar una nueva<br>4. El eqipo quedo operando correctamente.",
                         costo: " 260.000 Gs."
                     },
         
                    {  
                         numero: "000728",
                         fecha: "27/06/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Fabricación de porta compresores 2HP para aire comprimido",
                         sucursal: "Asunción",
                         detalles: "<br>1.Provision de 2 tiras angulod 1''x3/16'''<br>2. Canno 40 x 25 mm x 1.73 en acero<br>2. Pintura sintetica color blanco a tarugos 12,, con tornillos 3'' x 13mm= 552.000<br>3. Mano de obra, fabricación= 300.000<br>4. Materiales eléctricos, para instalacion= 173.000<br>5. Mano de obra instalacion= 160.000.",
                         costo: "1.185.000 Gs."
                     },
         
                    {  
                         numero: "000724",
                         fecha: "13/06/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Trabajos varios en fabrica",
                         sucursal: "Asunción",
                         detalles: "<br>1. Instalación de lampara UV en sector de pegado= 120.000<br>2. Verificación de válvulas del sistema de aire comprimidas en varios sectores= 120.000<br>3. Provision de artefacto 24W led de adosar= 95.000<br>4. Colocación de arte4facto led de adosar= 60.000.",
                         costo: "395.000 Gs."
                     },
         
                    {  
                         numero: "000722",
                         fecha: "02/06/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Trabajos de reparación porton principal",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de porton principa, el mismo se encuentra en malas condiciones de funcionamiento, se desmonta las tapas desmontables para su reparación<br>2. Provision de prensa cabos de 3/16<br>3. Preparación de guias averiadas<br>4. Queda operando correctamente.",
                         costo: " 360.000 Gs."
                     },
         
                    {  
                         numero: "000721",
                         fecha: "30/05/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrica/ Neumática",
                         equipo: "Trabajos varios",
                         sucursal: "Asunción",
                         detalles: "<br>1. Adicional trabajos; Presurizador nuevo corresponde a la mano de obra de la empresa fabricante= 400.000<br>2. Conectores varios neumáticos maquisan de coser= -1 te PU 04= 27.000-1m manguera PU 04= 12.000-1 conector recto 1/4 x OUJO= 47.000 -1 Conector recto 1/4 PUOP= 32.000<br>3. Mano de obra= 160.000.",
                         costo: " 678.000 Gs."
                     },
         
                    {  
                         numero: "000720",
                         fecha: "30/05/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Compresor SCHUB 4015 a tornillo",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de compresor, el mismo se encuentra en nivel mínimo, con las lecturas en panel mas abajo desglosando como ''lectura al cambio''<br>2. Se reemplazan los filtros de aceite, filtro separador aire/ aceite, filtro de aire y aceite 4.5 litros; de capacidad 1000 brs. La lectura es descendiente o sea el valor una disminuyendo, hasta llegar a 100 hrs<br>3. Se provee los materiales de la casa de los compresores, presupuesto de costo= 2.408.000<br>4. Mano de obra 660.000.",
                         costo: " 3.068.000Gs."
                     },
         
                    {  
                         numero: "000717",
                         fecha: "25/05/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Cambiador de grande",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo cambiador, con problemas en el pedal, su final de carrera no conmuta correctamente<br>2. Se procede a cambiar por uno nuevo, el equipo queda operando correctamente<br>3. Provision de materiales= 45.000<br>4. Mano de obra= 260.000.",
                         costo: "305.000 Gs."
                     },
                    {  
                         numero: "000715",
                         fecha: "25/05/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica/ Hidráulica",
                         equipo: "Equipo Armado de punteja",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación y desmontaje de tanque pulmón, se lleva para verificación + carga de nitrógeno, se deja en el laboratorio para su chequeo<br>2. Se cambia la válvula de carga de nitrógeno + trabajo de tornería, para adaptación de válvula= 1.050.000<br>3. Provisión de tanque pulmón de 3.3l; 30 bar de presión de nitrógeno = instalación de válvula de carga+ fabricación de arandelas de presión= 3.570.000<br>4. Mano de obra, desmontaje de pulmón= 800.000 .",
                         costo: " 5.720.000 Gs"
                     },
         
                    {  
                         numero: "000708",
                         fecha: "09/05/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Trabajos electrónicos en fabrica",
                         sucursal: "Asunción",
                         detalles: "<br>1. Instalación de 4 artefactos ultrabidetas 4x 30.000= 120.000<br>2. Provisión de 2 artefactos 1 x 40W con tubo led 2x 48.000= 96.000<br>3. Provisión de cinta doblefaz 3m= 85.000<br>4. Mano de obra por instalación de 2 artefactos= 90.000<br>5. Trabajos de destrancarían de volante de prensa= 120.000.",
                         costo: "511.000 Gs."
                     },
          
                  {  
                         numero: "000707",
                         fecha: "04/05/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Trabajos varios",
                         sucursal: "Asunción",
                         detalles: "<br>1. Preparación de equipo 2 x 40W; 30.000 x2= 60.000<br>2. Provision de tubo led 40W x 2; 37.000 x 2= 74.000<br>3. Reparación de equipo 2 x 40W; 30.000x 2= 60.000<br>4. Provision de equipo 2x 40W; 30.000 x 2= 74.000<br>5. Provision de lampara led 40W x 2; 30.000 x 2= 54.000<br>6. Reparación de 3 equipos grandes 2 x 58W; 3 x 60.000= 180.000<br>7. Provision de 3 reactancias 2x58W; 3x146.000= 438.000<br>8. Provision de cable VIP cot6 35m x 680= 227.000<br>9. Provision de terminales R145 2x15.000= 30.000<br>10. Mano de obra, montaje 260.000.",
                         costo: " 1.457.500 Gs."
                   },
         
                   {  
                         numero: "000706",
                         fecha: "02/05/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Fabricación de portón, planta alta",
                         sucursal: "Asunción",
                         detalles: "<br>Modificación de reja metálica, para adaptación de portón con cerradura, en escalera planta alta de su domicilio<br>2. Provisión de caño 40x 40 x 1.7mm x 2m; provisión de bisagras desmontables reforzadas con cerradura<br>3. Mano de obra, modificación y adecuación del mismo<br>4. Pintura de reja<br>5. Materiales<br>5.1. Bisagras 2 x 22.000- 44.000<br>5.2.Cerradura 2 x 65.000= 65.000<br>6.3. caño 40 x 40 x 1.7 x 2m= 55.000<br>5.4. Mano de obra + pintura= 360.000.",
                         costo: "524.000 Gs."
                     },
         
                     {  
                         numero: "000705",
                         fecha: "28/04/2022",
                         ruc: "792331-7",
                         tipo: "Mecánico",
                         equipo: "Equipo cambiador con sistema de frio",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo, el mismo se encuentra totalmente obstruido, se desmonta todo el equipo de frio<br>2. Verificación y reparación del sistema de circulación de agua fría, se cambian conectores y mangueras, abrazaderas, con limpieza con querosén y enjuagado con agua<br>3. Destrancar todas las mangueras con presión del agua<br>4. Provisión de motor 1/2 HP. PKM60, nuevo<br>5.Provision de propilen glucol 4kg y 25litros de agua destilada<br>6. Materiales<br>6.1. Motor PKM60 pedrllo0 804.000<br>6.2. Propilen glucol 4 x 70.000= 280.000<br>6.3. Agua destilada 4 x 15.000= 60.000<br>6.4. Conectores + mangueras y abrazaderas= 160.00> .",
                         costo: " 1.904.000 Gs."
                     },
         
                     {  
                         numero: "000704",
                         fecha: "26/04/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico/ Mecánica",
                         equipo: "Trabajos varios en fabrica",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de artefactos 28W circular y llaves 3 x 55.000= 165.000<br>2. Provision de perilla para velador 2 x 11.000= 22.000<br>3. Verificación de equipo de cortadura= 160.000<br>4. Mano de obra, colocación de artefactos= 120.000.",
                         costo: " 367.000Gs."
                     },
         
                    {  
                         numero: "000690",
                         fecha: "11/04/2022",
                         ruc: "792331-7",
                         tipo: "Electrico/ Mecanico",
                         equipo: "Equipo cortador de cuero",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificacion de equipo, sector de picador o perforacion de cueros<br>2. Se desmonta los pistones con perdidas de aire elos conectores, una de las cubelas delanteras tiene una fuga, se reemplaza por una nueva<br>3. Se proveen 4 conectores nuevos con defectos= 95.000<br>4. Se provee 1 cubeta para piston= 75.000<br>5. Reparacion de tornillos encriptados/ mano de obra= 400.000<br>6. El equipo queda operando correctamente.",
                         costo: " 570.000 gs"
                     },
                    {  
                         numero: "000689",
                         fecha: "11/04/2022",
                         ruc: "792331-7",
                         tipo: "Electrica",
                         equipo: "Trabajos electricos de iluminacion en fabrica",
                         sucursal: "Asunción",
                         detalles: "<br>1. Cambio de artefactos con problemas en zona de costura= 60.000<br>2. Reparacion de artefacto para exterior, cambio de base para fotocelula y la misma fotocedula= 90.000<br>3. Provision de materiales; un artefacto 24W led= 95.000<br>3.2. 1 base c/fotocedula= 75.000<br>4. Provision de PVC 0.75mm, 240cm x 126cm= 133.000.",
                         costo: "453.000 Gs."
                     },
         
                    {  
                         numero: "000679",
                         fecha: "26/03/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico/ Mecánica",
                         equipo: "Cortador de cuero elutron",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo cortador de cuero marca ELITRON <br>2. Se desmonta, por problemas de los tornillos de fijación, se destruyeron y eso no permite que funcione correctamente<br>3. Se procede a realizar nuevas perforaciones y roscas M6 x 1.0 con tornillos frezados, fabricación de bujes de goma<br>4. Armado de los mismo, accesorios mecanicos<br>5. Desmontaje de conexiones existentes y se modifica para dejar la conexión como estaba originalmente<br>6. Se prueba el equipo y quedo operando correctamente.",
                         costo: "650.000 Gs."
                     },
         
                    {  
                         numero: "000678",
                         fecha: "25/03/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica/ Neumático",
                         equipo: "Cambiador chico",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación equipo cambiador<br>2. Provisión de filtro regulador y lubricación= 325.000<br>3. Provisión de conectores 2 x 27.000= 54.000<br>4. Mano de obra, instalación= 160.000.",
                         costo: " 539.000 Gs."
                     },
                   {  
                         numero: "000676",
                         fecha: "24/03/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Compresor shull 4015/ reparación mecánica",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de sensor de temperatura(proveído por el cliente)<br>2. Provisión de manguera de alta 60 bar(proveído por el cliente)<br>3. Se procede a verificar el nivel de aceite, se completa le nivel adecuado; se procede a realizar una regulación de la válvula de refrigeracion<br>4. El equipo queda operando correctamente, con temperatura inferior a 85 grados centígrados<br>5. Mano de obra= 600.000.",
                         costo: " 600.000 Gs."
                     },
                    {  
                         numero: "000674",
                         fecha: "24/03/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Trabajos varios",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provision de 2 artefactos 18w, circular de adozar= 90.000<br>2. Provision de 1 artefacto 24w, cuadrado adozar= 96.000<br>3. Mano de obra, instalacion= 60.000.",
                         costo: "246.000 Gs."
                     },
         
                    {  
                         numero: "000672",
                         fecha: "10/03/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico/ Mecánico",
                         equipo: "Automatización pegadora vieja",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de materiales, actuadores, válvulas y mangueras, controlador de tiempo= 2.300.000<br>2. Mano de obra= 260.000.",
                         costo: " 2.900.000 Gs."
                     },
         
                    {  
                         numero: "000671",
                         fecha: "10/03/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Trabajos eléctricos",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de cables, enchufe trifásico 3x 16A + tierra= 79.000<br2. Provisión de un artefacto 18w. 220V= 63.000<br>3. Provisión de reflector 220V/ 10W blanco= 78.000<br>4. Mano de obra.",
                         costo: " 480.000 Gs."
                     },
         
                    {  
                         numero: "000670",
                         fecha: "09/03/2022",
                         ruc: "792331-7",
                         tipo: "Refrigeración",
                         equipo: "Equipo Frio(Chino)",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificacion de equipo enfriador, el mismo tien problemas en la circulacion del agua fria, se desmonta las mangueras y se encuentra que las mismas estan trancadas, se procede a desmontar la bomba y destrancar el mismo<br>2. Se cambia toda el agua, el equipo queda funcionando correctamente.",
                         costo: " 360.000 Gs."
                     },
         
                    {  
                         numero: "000669",
                         fecha: "09/03/2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Equipo cortador de cuero(elitron)",
                         sucursal: "Asunción",
                         detalles: "<br>1. Fabricación de soporte plegado en inoxidable para soporte de extractores= 160.000<br>2. Provisión de extractores 12 VCC/ 0.5A; mas provisión detrafo 220V/ 12 VCC= 820.000<br>3. Mano de obra= 260.000.",
                         costo: " 1.240.000-820.000=420.000Gs."
                     },
         
                    {  
                         numero: "000665",
                         fecha: "02/03/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Cuchilla cortadora de cuero",
                         sucursal: "Asunción",
                         detalles: "<br>1. Desmontaje de partes móviles de la cuchilla para fabricación del accesorio de bronce para corte<br>2. Se procede a desmontar el buje de bronce orctilado a tornería para du mecanizado<br>3. Provisión de bronce grafilado 10mm x 9mm= 240.000<br>Mecanizado de pieza (tornería)= 180.000<br>4. Montaje de piezas= 160.000 .",
                         costo: "580.000 Gs."
                     },
         
                    {  
                         numero: "000662",
                         fecha: "02/03/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Cortador de cuero automático",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación equipo cortador de cuero, el mismo no se encuentra funcionando, tiene problemas para encender, se procede a la verificación de todos los fusibles de mando y fuerza<br>2. Se verifica las placas tipo PVC, se encuentra que un puente rectificador esta desoldado, se desmonta el mismo y se procede a realizar el cambio de componente y re soldado<br>3. Se monta nuevamente y se pone en marcha quedando funcionando correctamente .",
                         costo: "260.000 Gs."
                     },
                     {
                         numero: "000661",
                         fecha: "02/03/2021",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Estufa calentadora de suelas",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provision de materiales para fabricacion de soporte para ventilador de techo, a ser instalado en fabrica<br>2. Montaje e instalacion de ventilador.",
                         costo: "300.000 Gs."
                     },
         
                    {  
                         numero: "000653",
                         fecha: "21/02/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Equipo Armador de talón",
                         sucursal: "Asunción",
                         detalles: "<br>1. Desmontaje de las piezas, brazo izquierdo y brazo derecho<br>2. Desmontaje de mangueras con perdidas en las tuercas<br>3. Limpieza de todas las partes móviles<br>4. Verificación de los tornillos de sujeción y los tornillos de lubricación<br>5. Provisión de retenes de 1.78x5.5mm y 2x5.5mm<br>6. Provisión de bulones de aceite 13mm x 2mm<br>7. Provisión de arandelas de cobre 14mm x 19<br>8. Materiales= 1.1. Retenes 1.78x5.5 x 30= 1000= 30.000<br>1.2. retenes 2 x 5.5 x 30=1250= 37.500<br>1.3. arandela 13mm x 19mm= 20 x 3.500= 70.000<br>1.4. bulón lubricador 3 x 68.000= 204.000<br>1.5. mano de obra= 450.000 .",
                         costo: "791.000 Gs."
                     },
         
                    {  
                         numero: "000652",
                         fecha: "21/02/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Trabajos varios",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de mangueras extensibles d 15m con rosca 1/4= 130.000<br>2. Provisión de mangueras extensibles de 7.5m con rosca 1/4= 110.000<br>3. Provisión de válvula media cuello 1/2 roscable= 145.000<br>4. Provisión de reducción de  1/2 a 1/4 de gal...= 27.000<br>5. Mano de obra= 360.000.",
                         costo: " 772.000Gs."
                     },
         
                    {  
                         numero: "000651",
                         fecha: "16/02/2022",
                         ruc: "792331-7",
                         tipo: "Mecánico",
                         equipo: "Modificación de cañerías galvanizadas",
                         sucursal: "Asunción",
                         detalles: "<br>1. Colocación de dos puntos de entrada y salida <br>2. Provisión de materiales para colocación de pulmón<br>3. 7 caños 7x46.000= 322.000<br>4. Caño 1''= 405.000<br>5. 7 codos 7x 38.000= 266.000<br>6. 2 Unión doble 2x 87.000= 174.000<br>7. 1 válvula activadora automática= 760.000<br> 8. 1 manómetro de presión= 240.00<br>9. Mano de obra por trabajos de adecuación de cañerías.",
                         costo: "3.907.000 Gs."
                     },
         
                    {  
                         numero: "000650",
                         fecha: "16/02/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Puertas automáticas en deposito",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de puertas automáticas con corredora eléctrica, con trato 220V a 12VCC 3A<br>2. Provision de trato 220V a 12VCC 3A= 110.000<br>3. Montaje, mano de obra.",
                         costo: "270.000 Gs."
                     },
         
                    {  
                         numero: "000645",
                         fecha: "10/02/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Equipo pulidor de zapatos",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo pulidor, el mismo tiene problemas para arrancar al motor pulidor principal, para ello se debe instalar un variado de velocidad 220V/ a 380V trifásico, con terminales de conexión<br>2. Provisión de variador de velocidad 1.808.000<br>3. Desmontaje y montaje variador nuevo 600.000 .",
                         costo: "2.408.000 Gs."
                     },
         
                    {  
                         numero: "000644",
                         fecha: "04.02.2022",
                         ruc: "792331-7",
                         tipo: "Electrico",
                         equipo: "Residencia de Don Silvino",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de tablero electrónico planta alta<br>2. Desmontaje de llaves + colocación de llaves provisorios= 260.000<br>3. Provision de llaves nuevas + cableado nueo 7 x 37.000= 259.000<br> 4. Montaje de llaves nuevas + cableado de barras= 320.000.",
                         costo: " 839.000 Gs."
                     },
         
                    {  
                         numero: "000643",
                         fecha: "01/02/2022",
                         ruc: "792331-7",
                         tipo: "Mecanica",
                         equipo: "Contador de cuero/ cortador provisorio",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión rodamiento 61808 2x375.000= 750.000<br>2. Provisión rodamiento 6808 2x75.000= 150.000<br>3. Provision rodamiento 6806 1x55.000<br>4. Mano de obra, desmontaje y montaje 460.0000.",
                         costo: " 1.415.000Gs."
                     },
          
                     {  
                         numero: "000642",
                         fecha: "01/02/2022",
                         ruc: "792331-7",
                         tipo: "Neumático",
                         equipo: "Equipo pegador de calzados/Neumático",
                         sucursal: "Asunción",
                         detalles: "<br>1. Desmontaje de electroválvula+ pistón neumático 160.000<br>2. Provisión de electroválvula e/bobina 24VCC tipo 5/2vias con accesorios, silenciador, conecroe PUNG+PUN12+2m manguera= 375.000<br>3.Montaje de electroválvula + puesta en marcha.",
                         costo: "695.000 Gs."
                     },
         
                     {  
                         numero: "000641",
                         fecha: "27/01/2022",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Instalación de ventiladores 200V/ para equipo cortador de cuero",
                         sucursal: "Asunción",
                         detalles: "<br>1. Colocación + puesta en marcha<br>2. Provisión de UPS 220V, 1500KVA<br>3. Provisión de llave TM 3x80Aeuroamericano.",
                         costo: " 1.875.000 Gs."
                     },
         
                     {  
                         numero: "000640",
                         fecha: "25/01/2022",
                         ruc: "792331-7",
                         tipo: "Dueto/Mecánica",
                         equipo: "Fabricación de ductos para sacar color del equipo cortador grande de cuero",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provisión de 4m de ductos 20cm en chapa galvanizado nro 21 con alindrado y encastre 4x160.000= 640.000<br>2. Provisión canica en chapa galu 2000s 1500mm= 90.000<br>3. Provisión de ducto corrugado 1m x 200mm= 90.000<br> 4.Provision de caño cuadrado 40x40x1.5mm= 127.000<br>4. Mano de obra + montaje de ductos= 800.000.",
                         costo: " 2.287.000 Gs."
                     },
         
                     {  
                         numero: "000629",
                         fecha: "10/01/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Equipo Cortador de cuero(ELITRON)",
                         sucursal: "Asunción",
                         detalles: "<br>1. Provision de rodamientos 2x75.000= 150.000<br>2. Provision de rodamientos 6806 1x55.000<br>Mano de obra 600.000.",
                         costo: " 2.305.000 Gs."
                     },
         
                     {  
                         numero: "000626",
                         fecha: "06/01/2022",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: " Par su domicilio.",
                         sucursal: "Asunción",
                         detalles: "<br>1. Transformación de rejas para adecuación de la misma y modificación para uso como baranda<br>2. Provisión de caño cuadrado 40x40x2mm para refuerzos y para sujeción<br>3. Montaje en su domicilio + pintura del mismo",
         
                         costo: "800.000 Gs."
                     },
         
                     {  
                         numero: "000625",
                         fecha: "06/01/2021",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "",
                         sucursal: "Asunción",
                         detalles: "<br>1. Montaje de 5 artefactos led cuadrados en área de armado de cuero 5x60.000= 300.000<br>2. Montaje de 2 artefactos led fubular aw/220v<br>3. Montaje de sensor de movimiento para artefacto sobre escalera 1x60.000= 120.000<br>4. Provisión de materiales<br>5. 12m cable tipo taller 4x3mm2<br>6. 5 artefactos 24w/220V cuadrado led<br> 7. 2 artefactos 9w/220V tubo<br> 8. 1 sensor movimiento.",
                         costo: " 1.110.000Gs."
                     },
         
                     {  
                         numero: "000623",
                         fecha: "29.12.2021",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Equipo de rapar cuero chico",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificación de equipo raspador de cuero<br>2. Colocación de botonera arranque enclavado y parado<br>Provision de botonera 1x160.000<br>3. Mano de obra 1x 260.000.",
                         costo: "420.000 Gs."
                     },
         
                       {  
                         numero: "000622",
                         fecha: "29/12/2021",
                         ruc: "792331-7",
                         tipo: "Mecánica",
                         equipo: "Reparación de Compresor de aire (Marca sehulhz)",
                         sucursal: "Asunción",
                         detalles: "<br>1. Verificacion de compresor, el mismo se protege por temperatura, el msmo indica que no se esta refrigerando cirrectamente<br> 2. Se procede al desmontaje total de las partes del equipo para realizar un lavado de la serpentina del condesador y verificaion del ventilador de extraccion de aire caliente, motor y compresor<br> 3. Limpieza de tablero electrico, provision de ventiladores uno de extraccion, otro de ventilacion 220/0.15A. 2x190.000= 350.000<br>4. Provision de cañeria en OVC 300 mm, con codo + rejilla + extractor= colocacion y masisado. Fabricacion de codo en acero galbanizado en los medas 450x450x0.75mm <br>5. Mano de obra 800.000<br>6. Provision 2 vent. 380.000<br>7. Provision de codo galb 470.000(Fabricacion)<br>8. Provision de aire 370.000.",
                         costo: "1.670.000 Gs."
                     },
         
         
                       {  
                         numero: "000619",
                         fecha: "13/12/2021",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Equipo Contador de cuero (Grande)",
                         sucursal: "Asunción",
                         detalles: "<br>1.Verificacion de equipo contador de cuero, el mismo presenta un problema con una de las placas MEIO se desmonta el mismo para llevar al tecnico electronico y revisar, el tecnico indica que el puente rectifucador en vacio<br>indica que se encuentra en buenas condiciones, se la agrego tension y en dicho momento se percata que el mismo no saca la tension adecuada, se procede a buscar el puente rectificador, se monta en placa y se vuelve a probar <br>2. Se vuelve a montar la placa, se ajusta todos los contactos se verificaron los bornes, se cambia los fusiblespara el lado 53VCA (10A)y 19VCA (63A). Se deja funcionando el equipo<br>3. Provision de puente roctificador= 75.000<br> 4. Mano de obra electronico= 290.000<br>5. Mano de obra tecnico montador= 600.000 .",
                         costo: "965.000 Gs."
                     },
         
                      {  
                         numero: "000618",
                         fecha: "07/12/2021",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Equipo tipo estufa con cinta transportadora",
                         sucursal: "Asunción",
                         detalles: "Verificación del equipo, el mismo tiene un sobrecalentamiento en la fase R y en el neutro. Se procede a realizar el empalme.",
                         costo: "453.000 Gs."
                     },
         
                      {
                         numero: "000612",
                         fecha: "17/11/2021",
                         ruc: "792331-7",
                         tipo: "Eléctrico",
                         equipo: "Equipo cortador de cuero",
                         sucursal: "Asunción",
                         detalles: "Verificación de equipo cortador de cuero, cuyos relés se encuentran recalentados. Se procede al cambio y el equipo queda operando correctamente.",
                         costo: "418.000 Gs."
                     },
                     {
                         numero: "000603",
                         fecha: "17/11/2021",
                         ruc: "792331-7",
                         tipo: "Eléctrico/Mecánica",
                         equipo: "Trabajos Instalación de VT Fábrica",
                         sucursal: "Asunción",
                         detalles: "1. Provisión de materiales para instalación de ventilador de techo en fábrica.<br> 1.2. Materiales<br>1.3. Caño cuadrado 40x30x1.70 = 2x87.000 = 174.000<br>Cable tipo taller 2x1mm = 20m x 6.500 = 130.000<br>Ventilador de techo marca ROLLAL motor pesado = 260.000<br>Mano de obra:<br>Colocación de soportes = 260.000<br> Instalación de ventilador = 180.000<br>",
                         costo: "260.000 Gs."
                     }
                 ]
             },
         
         {
          nombre: "FRUTALIA SRL.",
          servicios: [
  
             {  
                 numero: "0995",
                 fecha: "15/01/2024",
                 ruc: "80062731-1",
                 tipo: "Eléctrico/ Mecánico",
                 equipo: "Compresor a tornillo marca Somar",
                 sucursal: "Limpio",
                 detalles: "<br>1. Rebobinado de motor trifásico de 20HP= 1.980.000<br>2. Cambio de rodamientos, 275.000 + 420.000= 695.000<br>3. Desmontaje + montaje de motor<br>4. Cambio de contactor trifásico= 1.200.000.",
                 costo: " 3.875.000Gs."
             },
             {  
                 numero: "000726",
                 fecha: "17/06/2022",
                 ruc: "80062731-1",
                 tipo: "Mecánica",
                 equipo: "Equipo exprimidor de naranjas",
                 sucursal: "San Lorenzo",
                 detalles: "<br>1. Verificación de equipo exprimidor de naranjas, el mismo se encuentra con un desgaste considerable del eje, principal y un brazo con los accesorios con desgaste y engrane del mismo, se procede a desmontar totalmente para su reparación<br>2. Provisión de materiales.<br>- Ojo de pes reforzado 600.000<br>- Ojo de pes normal 400000<br>- Hierro 1059 acero 30cm 90.000<br>3. Mano de obra.<br>- Trabajos de tornería= 220.000.<br>- Templado de materiales 200.000<br>- Montaje 600.000.",
                 costo: "2.110.000 Gs."
             },
            {  
                 numero: "000725",
                 fecha: "03/06/2022",
                 ruc: "80062731-1",
                 tipo: "Refrigeración",
                 equipo: "Reparación de bicicooler 300Limos, local Boccatal dirección Choferes del chaco",
                 sucursal: "Asunción",
                 detalles: "<br>1. Verificación del bicicooler, el mismo no para el compresor por problemas de que el ventilador de condensador no funciona, se encuentra engranado<br>2. También se verifica que el presostato regulador de temperatura no controla correctamente.<br>3. Se cambian los datos, el presostato y el ventilador para que funcione correctamente el equipo<br>3. Materiales.<br>- Presostato= 142.000<br>- Ventilador= 75.000<br>4. Mano de obra= 160.000.",
                 costo: "377.000 Gs."
             },
            {  
                 numero: "0863",
                 fecha: "20/04/2023",
                 ruc: "80062731-1",
                 tipo: "Mecánica",
                 equipo: "Exprimidor de Naranjas",
                 sucursal: "San Lorenzo",
                 detalles: "<br>1. Desmontaje de partes mecánicas en mal estado, los mismos se encuentran prácticamente destruidos<br>2. Relleno de dientes de la corona principal, en total 12 dientes afectados<br>3. Fabricación de porta corona, para el sector de succión de jugo, el mismo se encuentra fisurado; se fabrica en inoxidable y bujes de bronce; con fabricación de eje nuevo el mismo se corto<br>4. Provisión de 2 ojo de pez, hidráulico, para brazo principal<br>5. Fabricación de puntas de corte en acero inoxidable 316L, nuevo, mas fabricación de uno existente, con soldadura tig y proceso de pulido y afilado, para volver a funcionar<br>6. Materiales<br>- Ojo de pez provisión, en acero max. 16mm, 2x 310.000= 620.000<br>- Fabricación de soporte de eje inferior en inoxidable= 430.000<br>- Fabricación de soporte de eje inferior en inoxidable= 430.000<br>-  Fabricación de eje inferior en acero 1040 con templado= 250.000<br>- Relleno de corona principal con 1013 y templado= 516.000<br>- Fabricación en acero inox. 316L, con afilado y templado= 375.000<br>- Reparación de puntera de corte existente= 250.000<br>- Mano de obra desmontaje + montaje= 600.000.",
                 costo: " 3.006.000 Gs."
             },
            {  
                 numero: "0823",
                 fecha: "26/01/2023",
                 ruc: "80062731-1",
                 tipo: "Eléctrico",
                 equipo: "Horno Gpaniz",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación de equipo tipo horno marca GPaniz<br>2. El mismo se encuentra con una falta de aislación de la resistencia, por antigüedad los aislantes perdieron aislación y esto hizo que entre en corto circuito<br>3. Reparación de resistencia, una de ellas y otra debe hacerce una nueva<br>4. Mano de obra, desmontaje de resistencia y montaje de las mismas<br>5. Cambio de contactor trifásico de 32A/ 220V scheider<br>6. Prueba de temperatura y tiempo con acompañamiento del Sr. Eudelio Fernandez<br>7. El equipo quedo operando correctamente.",
                 costo: " Gs."
             },
            {  
                 numero: "0810",
                 fecha: "04/01/2023",
                 ruc: "80062731-1",
                 tipo: "Electro/ Mecánica",
                 equipo: "Compresor a piston de baja; 7.5 HP con reservorio 250 litros",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación de compresor, desmontaje de todas las partes móviles, como pisostato, válvula de retención, válvula de aluvio de cobre reforzasos con uniones roscables, filtro de aire y carcasa; todas por unidades nuevas, aceite para compresor a piston con visor visual activo, correa nueva<br>2. Tablero de control y automatismo nuevo con todas las protecciones<br>3. Patas de gomas para absorción y sistema de purga automática con regulación a 59mm 3 segundos de purga<br>4. Regulación compresor 8.5 kg para arrancar en 6.0kg<br>5. El equipo queda operando correctamente.",
                 costo: " Gs."
             },
             {  
                 numero: "000793",
                 fecha: "15/11/2022",
                 ruc: "80062731-1",
                 tipo: "Eléctrico",
                 equipo: "Horno eléctrico GPAMIS. 200*C",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación de equipo tipo horno de puerta, con tablero eléctrico y controlador de temperatura y tiempo marca full gauge; adecuación a tablero con todas las protecciones, apertura de puerta, cambio de salida para turbina<br>2. Montaje de sensor tipo Pt 100 y tipo I.",
                 costo: "460.000 Gs.",
             },
            {  
                 numero: "000686",
                 fecha: "07/04/2022",
                 ruc: "80062731-1",
                 tipo: "Electro/ Mecánico",
                 equipo: "Exprimidor FMC",
                 sucursal: "San Lorenzo",
                 detalles: "<br>1. Rebobinado de motor trifásico 3 Hp, 220V/ 380V<br>2. Barnizado de bobina + secado en horno= 1.300.000<br>3. Cambio de tomas trifásicas en tablero por desperfecto)oxidados, cambio de cableado trifásico 6 metros y jabalina 1/2 x 1.5= 260.000 con cable verde amarillo 8m<br>4. Mano de obra montaje de motor y colocación de los nuevos accesorios= 360.000.",
                 costo: "1.920.000 Gs.",
             },
            {  
                 numero: "000684",
                 fecha: "01/04/2022",
                 ruc: "80062731-1",
                 tipo: "Refrigeración",
                 equipo: "Bicicooler JAME. 320L",
                 sucursal: "Asunción",
                 detalles: "<br>1. Cambio de motor 1/4, con aceite, presostato interno nuevo, cambio de filtro y de capilar<br>2. Fabricación de búrlele de, goma imantada<br>3. Cambio de ventilador interior y paletas nuevas<br>4. Ploteado del equipo<br>5. Puesta en marcha.",
                 costo: " 1.650.000 Gs.",
             },
            {  
                 numero: "000682",
                 fecha: "29/03/2022",
                 ruc: "80062731-1",
                 tipo: "Eléctrico",
                 equipo: "Horno",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación de equipo tipo horno, el mismo no calienta solo se encuentra con un grupo de resistencias y encontramos que hubo falso contacto en las borneras<br>2. Se remplazan las terminales quemadas y se deja el equipo funcionando correctamente.",
                 costo: "260.000 Gs.",
             },
            {  
                 numero: "000680",
                 fecha: "29/03/2022",
                 ruc: "80062731-1",
                 tipo: "Eléctrico",
                 equipo: "Secador de aire comprimido",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación de aire comprimido<br>2. Se verifican todas las protecciones y se encuentra que la placa sufrió una descarga eléctrica<br>3. Reparación de placa electrónica secador Lomar= 680.000<br>4. Desmontaje + montaje + puesta en marcha= 400.000.",
                 costo: " 1.080.000 Gs.",
             },
            {   
                 numero: "000660",
                 fecha: "25/02/2022",
                 ruc: "80062731-1",
                 tipo: "Mecánica/ Electro",
                 equipo: "Empaquetadora automática",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación del equipo, el mismo presenta irregularidad en el sellado, exceso de temperatura en el empaquetado y en el corte, se regulan las temperaturas de sellado 100 grados centígrados, y en el corte 108 grados centígrados, esto difiere de las especificaciones de proveedor de sello<br>2. Configuración de largo de la etiqueta y la velocidad general de la maquina, un promedio de 40 a 43 rpm en el banel<br>OBS: para cada etiqueta se debe tener en cuenta la velocidad de general y la velocidad de sello; estos dos debe ser casi iguales<br>3. Se ajustaran las correas y la cadena de la transmisión principal el mismo se encontraba con mucha elongación.",
                 costo: "460.000 Gs.",
             },
            {  
                 numero: "000658",
                 fecha: "23/02/2022",
                 ruc: "80062731-1",
                 tipo: "Electro/ Mecánica",
                 equipo: "Generador trifásico combinado 5 KVA",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación de equipo, limpieza de equipo, desmontaje de tanque de combustible + limpieza del mismo<br>2. Provisión de kit de reparo de inyector de combustible, cambio de mangueras resecadas<br>3. Materiales<br><ul>Filtro de aire<ul>Filtro de combustible<ul>Aceite motor 2l<ul>Selector tipo llave<br>4. Costo de materiales= 720.000<br>5. Costo de mano de obra= 400.000.",
                 costo: " 1.120.000 Gs."
             },
            {  
                 numero: "000656",
                 fecha: "22/02/2022",
                 ruc: "80062731-1",
                 tipo: "Eléctrico",
                 equipo: "Detector de Metales",
                 sucursal: "Limpio",
                 detalles: "<br>1. Verificación de detector de metales, el mismo presenta fallas al momento de su funcionamiento<br>2. Se procede a preparas un toma trifasico para su instalación y puesta en marcha<br>2. Se realiza pruebas y regulaciones de los sensores de precisión<br>3. Quedo operando correctamente<br>4. Se recomienda que la toma eléctrica, se independiente, puesto que es un equipo muy sensible, que tiene que estar nivelado.",
                 costo: "360.000 Gs."
             },
  
            {  
                 numero: "000647 ",
                 fecha: "08/02/2022",
                 ruc: "80062731-1",
                 tipo: "Refrigeración",
                 equipo: "Sucursal Carnívoras, Gral. Santos",
                 sucursal: "Asunción",
                 detalles: "<br>1. Retiro de biciculer 320l= 50.000<br>2. Cambio de filtro sistema de frio= 55.000<br>3. Cambio de termostato nuevo= 285.000<br>4. Provisión de gas refrigerante= 135.000<br>5. Mano de obra, mantenimiento= 220.000.",
                 costo: "825.000 Gs."
             },
             
             {
                 numero: "000605",
                 fecha: "20/11/2021",
                 ruc: "80062731-1",
                 tipo: "Electrónico",
                 equipo: "Cámara frigorífica",
                 sucursal: "San Lorenzo",
                 detalles: "<br>1. Verificación de cámara frigorífica 3 grados centígrados<br>2. Contactor defectuoso 702 dejar fasar dos fases<br>3. Guarda motor con regulación de 06 al 18A<br>4. Instalación de indicadores luminoso<br>5. Provisión de materiales<br>- Conector trifásico= 120.000<br>- Guarda motor= 160.000<br>- Mano de obra= 260.000.",
                 costo: "540.000 Gs.",
                 archivoURL: ".pdf"
             },
             
             {
                 numero: "000604",
                 fecha: "19/11/2021",
                 ruc: "80062731-1",
                 tipo: "Mecánica",
                 equipo: "Exprimidor de naranjas",
                 sucursal: "San Lorenzo",
                 detalles: "<br>1. Desmontaje de corona inferior, para agrandar, mas colocación de un buje reductor inoxidable de paso 25mm + 16mm, Rosca BSP métrico, tornillo.",
                 costo: "520.000 Gs.",
                 archivoURL: ".pdf"
             },
             
             {
                 numero: "000697",
                 fecha: "23/04/2021",
                 ruc: "80062731-1",
                 tipo: "Eléctrico",
                 equipo: "Olla calentador",
                 sucursal: "Limpio",
                 detalles: "<br>1. Provisión de temperatura digital sin sensor= 890.000<br>2. Modificación del mando del controlador + programación= 360.000 .",
                 costo: "1.250.000 Gs.",
                 archivoURL: ".pdf"
             },
             
             {
                 numero: "000648",
                 fecha: "",
                 ruc: "80062731-1",
                 tipo: "Refrigeración",
                 equipo: "Retiro de buccatta)Alfredo Seifegel",
                 sucursal: "San Lorenzo",
                 detalles: "<br>1. Verificación de equipo mas retiro de bicicoler de 400L marca JAME, con problemas de motor en corto circuito porque se tranco el filtro del sistema de frio<br>2. Provisión de motor 1/4 + plus scrool a pistón brasilero= 850.000<br>3. Provisión de filtro= 85.000<br>4. Limpieza de serpentina + mano de obra= 300.000.",
                 costo: "1.235.000 Gs.",
                 archivoURL: ".pdf"
             },
             
             {
                 numero: "0935",
                 fecha: "",
                 ruc: "80062731-1",
                 tipo: "Refrigeración",
                 equipo: "Fabricación de equipo enfriador tipo Chiller de alta capacidad, 60.000 btu, trifásico",
                 sucursal: "Ypane",
                 detalles: "<br>1. Trabajos e fabricación de equipo enfriador tipo Chiller de alta capacidad, 60.000 btu<br>2. Desmontaje de partes existentes, con oxido en la estructura , modificación de las medida, instalación de ruedas para su transporte, colocación de soportes metálicos para retornar la estructura, con pintura antioxidante<br>3. Cambio de estructura de cobre para mejorar funcionamiento con tanque en acero inoxidable, instalación de bomba de agua de recirculación<br>4. Instalación de equipo condensador de capacidad 60.000 btu trifasico, con tablero eléctrico con las protecciones de funcionamiento, con controlador de temperatura digital.",
                 costo: "7.700.000 Gs.",
                 archivoURL: ".pdf"
             },
  
  
          ]
     },
     {
         nombre: "FERBAS SRL.",
         servicios: [
  
             {  
                 numero: "000790",
                 fecha: "04/11/2022",
                 ruc: "80091583-6",
                 tipo: "Mecánica",
                 equipo: "Cabina de pintura",
                 sucursal: "Ypane",
                 detalles: "<br>1. Verificación de cabina, no recircula el agua, se desmonta el motor y se procede al mantenimiento y reparación del mismo; con los accesorios nuevos; el equipo queda operando correctamente.",
                 costo: " 560.000 Gs."
             },
            {  
                 numero: "000789",
                 fecha: "03/11/2022",
                 ruc: "80091583-6",
                 tipo: "Eléctrico/ Refrigeración/ Mecánico",
                 equipo: "Enfriador azul 36.000 btu, trifásico",
                 sucursal: "Ypane",
                 detalles: "<br>1. Desmontaje de equipo enfriador azul, 36.000btu; se desmonta todas las partes afectadas por el oxido, se retira todas las aislaciones de isoporto afectadas; desmontaje de serpentina para reducir el tamaño del equipo de serpentina para reducir el tamaño del equipo y mejorar la cantidad de agua que no supere los 200litros, aislar con poliuretano de 50mm de espesor; utilizar un tanque de PVC para el inferior y chapa galvanizado para el exterior y pintado con pintura epoxida, refuerza con caños 40x 40 x 1.73 mm, para soportar el peso del agua, colocación de base para anitobomba de agua de recirculación<br>2. Montaje de todos los accesorios de refrigeración, arreglo de cañería de cobre; con soldadura con aporte de plata<br>3. Cambio de las cañerías de entrada y salida de agua.",
                 costo: "2.880.000 Gs."
             },
            {  
                 numero: "000788",
                 fecha: "03/11/2022",
                 ruc: "80091583-6",
                 tipo: "Electro/ Mecánico",
                 equipo: "Enfriador todo chile 60.000 btu",
                 sucursal: "Ypane/ Fabrica",
                 detalles: "<br>1. Desmontaje de equipo, para su posterior montaje, desmontaje de los equipos anexos a la plataforma.",
                 costo: " 550.000 Gs."
             },
            {  
                 numero: "000787",
                 fecha: "27/10/2022",
                 ruc: "80091583-6",
                 tipo: "Electro/ Electricidad",
                 equipo: "Cambiador Hidráulico",
                 sucursal: "Ypane/ Deposito",
                 detalles: "<br>1. Verificación de equipo cambiador hidráulico; con dos pistón izquierdo y derecho<br>2. El mismo no acciona la solenoide principal, el pie procede a cambiar la salida de pie y re- programar la salida.",
                 costo: "260.000 Gs."
             },
            {  
                 numero: "000773",
                 fecha: "27/09/2022",
                 ruc: "80091583-6",
                 tipo: "Eléctrico",
                 equipo: "Enfriador chico 10*C (lavarropas grande)",
                 sucursal: "Ypane",
                 detalles: "<br>1. Verificacion de equipo enfriador 10*C, sector lavarropas, el mismo no permite controlar adecuada mente las temperaturas, el controlador frio con pico de tension, el mismo es reemplazado por uno de la marca fullgauge<br>2. Provision de controlador 290.000<br>3. Mano de obra desmontaje + montaje= 260.000.",
                 costo: " 550.000 Gs."
             },
            {  
                 numero: "000772",
                 fecha: "18/09/2022",
                 ruc: "80091583-6",
                 tipo: "Eléctrico",
                 equipo: "Arreglo partes eléctricos, zona mesadas de pinturas",
                 sucursal: "Ypane",
                 detalles: "<br>1. Desmontaje de artefactos averiados, 2x 30.000= 60.000<br>2. Montaje de artefactos, con fluorescentes led 40W, 2x 30.000= 60.000<br>3. Provisión de tubos led 40W, 4x 27.000= 108.000<br>4. Trabajos de reparación cableado eléctrico, por problemas de re- calentados en los empalmes= 240.000<br>5. Se deja en funcionamiento pero se recomienda el cambio de los conductores existentes x nuevos, los mismos quedaron finos para la carga existentes.",
                 costo: "468.000 Gs." 
            },
            {  
                 numero: "000771",
                 fecha: "17/09/2022",
                 ruc: "80091583-6",
                 tipo: "Refrigeración",
                 equipo: "Puesta en marcha Chiller, Marca todo Chiller",
                 sucursal: "Ypane",
                 detalles: "<br>1. Provisión de filtro secante EK- 163 rosca 1/2'' abriola 75.000<br>2. Provisión de gas refrigerante P22 13 kg x 82.000= 1.066.000.",
                 costo: "1.141.000 Gs."
             },
            {  
                 numero: "000770",
                 fecha: "17/09/2022",
                 ruc: "80091583-6",
                 tipo: "Mecánica",
                 equipo: "Fabricación de tubos, caños y sombreros para colocación de cabina de pintura",
                 sucursal: "Asunción",
                 detalles: "<br>1. Fabricación de tubo 300mm en chapa 18m/ 2m x 120.000= 240.000<br>2. Provisión de chapa + corte + soldadura para sombrero chino  2 x 110.000= 220.000<br>3. Fabricación de caño reductor de 400mm a 300 mm para unión cabina a ducto 2 x 160.000= 320.000<br>3. Colocación de ductos a reductores a sombrero= 400.000<br>4. Fabricación soporte + provisión de materiales, para sujeción de ducto= 120.000.",
                 costo: " =1.300.000 Gs."
             },
            {  
                 numero: "000764",
                 fecha: "18/08/2022",
                 ruc: "80091583-6",
                 tipo: "Refrigeración/ Eléctrico",
                 equipo: "Mantenimiento de equipo enfriador 10*C marca RBR",
                 sucursal: "Ypane",
                 detalles: "<br>1. Mantenimiento de equipo enfriador monofásico marca RBR, preparado para enfriar a 10*C preparado para enfriar a 10*C con reservorio de acero inoxidable para 150 Litros, limpieza de serpentina<br>2. Limpieza de condensador de 36.000btu; desmontaje de ventilador + limpieza del mismo<br>3. Volver a montar todo en su lugar y adecuar para su instalación.<br>4. Provisión de materiales.<br>- 4 picos de 1'' en galvanizado 36.000x 4= 144.000<br>- 3m de manguera reforzada para 1'' + 6 abrazaderas 3x 27.000= 81.000<br>- 2m de caño de PVC, 1/2 rascable 24.000<br>- 3 codos de 90 grados de 1/2= 12.000<br>- 1 baja mecánica 1/2<br>5. Mano de obra, mantenimiento= 490.000.",
                 costo: "675.000 Gs."
             },
            {  
                 numero: "000759",
                 fecha: "19/08/2022",
                 ruc: "80091583-6",
                 tipo: "Eléctrico",
                 equipo: "Arreglo tablero principal, corrección Facial de potencia",
                 sucursal: "Ypane",
                 detalles: "<br>1. Provisión de contactor cum 25C10, 2x 293.000= 585.000<br>2. Provisión de llave TM 3x 32A, 5x 45.300= 226.500.",
                 costo: " 811.500 Gs."
             },
            {  
                 numero: "000710",
                 fecha: "12/05/2022",
                 ruc: "80091583-6",
                 tipo: "Eléctrico",
                 equipo: "Prensa hidráulica",
                 sucursal: "Ypane",
                 detalles: "<br>1. Verificación del mismo; se encuentra que la placa controladora de procesos no seca la tensión adecuada para las salidas con solenoide lado izquierdo y solenoide lado derecho<br>2. Se provee un controlador programable lógico- marca Siemens, tipo logo<br>3. Controladores digitales de tiempo para cada lado<br>4. Tablero con protecciones térmicas y magnéticas.",
                 costo: "4.000.000 Gs."
             },
            {  
                 numero: "000700",
                 fecha: "04/05/2022",
                 ruc: "80062731-",
                 tipo: "Eléctrico",
                 equipo: "Varios equipos PV01 y PV02",
                 sucursal: "Ypane",
                 detalles: "<br>1. Verificación de equipo PV01, el mismo se encuentra con problemas en la fuente alimentación 220V/ 24DCC. 5A<br>2. Se cambio por una nueva de220V/24.5A DELTA<br>3. El equipo queda operando correctamente<br>4. Verificación tablero resistencias PV02; el mismo se encuentra con un falso contacto en las borneras son reemplazados por conexiones nuevas; queda el equipo en correcto funcionamiento.",
                 costo: "460.000 Gs."
             },
            {  
                 numero: "000687",
                 fecha: "08/04/2022",
                 ruc: "80091583-6",
                 tipo: "Eléctrico/ Mecánico",
                 equipo: "Lavadora de suelas",
                 sucursal: "Ypane",
                 detalles: "<br>1. Desmontaje de turbina, el mismo se encuentra engranado es dejo corto a masa o tierra<br>2. Fabricación de base para turbina en acero inoxidable calidad 304 con brindas<br>3. Provisión de motor eléctrico monofásico con adaptación de eje para paletas de la turbina<br>Detalles<br>- Fabricación de base para turbina en acero inox.= 1.000.000<br>- Provisión de motor + adaptación de  eje= 490.000<br>- Mano de obra montaje + puesta en marcha= 460.000.",
                 costo: "1.950.000 Gs."
             },
            {  
                 numero: "000685",
                 fecha: "07/04/2022",
                 ruc: "80091583-6",
                 tipo: "Eléctrico",
                 equipo: "Verificación aire acondicionado 12.000 btu marca Midas oficina",
                 sucursal: "Ypane",
                 detalles: "<br>1. Verificación de equipo aire acondicionado 12.000btu marca midas, el mismo no enfría, se encuentra el compresor protegido, se desmonta y se lo realiza limpieza de condensador y cambio de capacitor al compresor 35<br>2. También se encuentra que el ventilador de condensador no gira y se cambia el capacitor y no funciona, el mismo es remplazado por uno uno nuevo original<br>3. También se realiza la limpieza del evaporador y de los filtros<br>4. Materiales<br>- Capacitpr p/ compresor 35wf= 90.000<br>- Ventilador p/ condensador original= 320.000<br>- Mano de obra= 220.000.",
                 costo: " 630.000 Gs."
             },
             {  
                 numero: "000617",
                 fecha: "03/12/2021",
                 ruc: "80091583-6",
                 tipo: "Electro/ Refrigeración",
                 equipo: "Chiller Grande marca TODOCHILLER",
                 sucursal: "Ypane",
                 detalles: "<br>1. Verificación de equipo tipo Chiller marca, TODOCHILLER<br>2. Desmontaje de condensador para su posterior limpieza de la cañería de cobre, la misma tiene aceite de motor, se retiro todo y se procedió a secar totalmente y realizar todas las soldaduras con autógena y aporte de plata en varilla<br>3. Se procede en moto trifásico + cabezal de 66.000btu marca BITZER, con reservorio de gas refrigerante<br>4. Provisión de ventilador extractor, con muestra<br>5. Adaptación de compresor a la base, con una base de pintura epoxica color negra y beige; original del equipo.",
                 costo: "5.472.980 Gs."
             },  
          {  
                 numero: "0935",
                 fecha: "2021",
                 ruc: "80091583-6",
                 tipo: "Refrigeración",
                 equipo: "Fabricación de equipo enfriador, tipo chiller de alta capacidad, 60.000btu, trifásico",
                 sucursal: "Ypane",
                 detalles: "<br>1. Trabajos de fabricación de equipo enfriador tipo Chiller de alta capacidad, 60.000btu<br>2. Desmontaje de partes existentes, con oxido en la estructura modificación de las medidas, instalación de ruedas para su transporte, colocación de soportes metálicos para retozar la estructura, con pintura antioxidante<br>3. Cambio de estructura de cobre para mejor funcionamiento con tanque en acero inoxidable, instalación de bomba de agua de recirculación<br>4. Instalación de equipo condensador de capacidad 60.000 btu trifásico, con tablero eléctrico con las protecciones de funcionamiento, con controlador de temperatura digital.",
                 costo: "7.700.000 Gs."
             },
         ]   
     },
  ];
  
  function obtenerServiciosPorFecha(servicios) {
    const organizados = {};
    servicios.forEach(s => {
      const [dia, mes, anio] = s.fecha.split("/");
      if (!organizados[anio]) organizados[anio] = {};
      if (!organizados[anio][mes]) organizados[anio][mes] = [];
      organizados[anio][mes].push(s);
    });
    return organizados;
  }
  
  function crearAbanicoFechas(servicios) {

    const abanicoViejo = document.getElementById("abanicoFechas");
    if (abanicoViejo) abanicoViejo.remove();
  
    const contenedor = document.createElement("div");
    contenedor.id = "abanicoFechas";
    contenedor.style.marginBottom = "20px";
  
    const serviciosPorFecha = obtenerServiciosPorFecha(servicios);
    for (const anio of Object.keys(serviciosPorFecha).sort((a,b) => b - a)) {
      const divAnio = document.createElement("div");
      divAnio.innerHTML = `<h3>${anio}</h3>`;
      const meses = serviciosPorFecha[anio];
  
      for (const mes of Object.keys(meses).sort((a,b) => b - a)) {
        const btn = document.createElement("button");
        btn.textContent = `Mes ${mes}`;
        btn.className = "cerrar-btn";
        btn.style.margin = "5px";
        btn.onclick = () => mostrarServiciosDeFecha(serviciosPorFecha, anio, mes);
        divAnio.appendChild(btn);
      }
      contenedor.appendChild(divAnio);
    }
  
    const resultados = document.getElementById("resultadosServicios");
    resultados.innerHTML = "";
    resultados.parentNode.insertBefore(contenedor, resultados);
  }
  
  function mostrarServiciosDeFecha(serviciosPorFecha, anio, mes) {
    const resultados = document.getElementById("resultadosServicios");
    resultados.innerHTML = "";
  
    const servicios = serviciosPorFecha[anio][mes];
    if (!servicios || servicios.length === 0) {
      resultados.innerHTML = "<p>No hay servicios registrados para este mes.</p>";
      return;
    }
  
    servicios.forEach(s => {
      const div = document.createElement("div");
      div.innerHTML = generarHTMLHoja(s.cliente, s);
      resultados.appendChild(div);
    });
  }
  
  function generarHTMLHoja(nombreCliente, s) {
    return `
      <div style="
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        background-color: #fdfdfd;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        font-family: 'Segoe UI', sans-serif;
      ">
        <div style="border-bottom: 1px solid #ccc; margin-bottom: 10px;">
          <h3 style="margin: 0;">Hoja de Servicio Nº ${s.numero}</h3>
          <small style="color: gray;">Fecha: ${s.fecha}</small>
        </div>
  
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
          <tr><td><strong>Cliente:</strong></td><td>${nombreCliente}</td></tr>
          <tr><td><strong>RUC:</strong></td><td>${s.ruc}</td></tr>
          <tr><td><strong>Tipo:</strong></td><td>${s.tipo}</td></tr>
          <tr><td><strong>Equipo:</strong></td><td>${s.equipo}</td></tr>
          <tr><td><strong>Sucursal:</strong></td><td>${s.sucursal}</td></tr>
        </table>
  
        <div style="margin-bottom: 15px;">
          <strong>Detalles del trabajo:</strong><br>
          <div style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${s.detalles}</div>
        </div>
  
        <div style="text-align: right; font-size: 1.1em;">
          <strong>Total: ${s.costo}</strong>
        </div>
  
        <button class="imprimir-btn" onclick="window.print()">Imprimir esta hoja</button>
        <button class="pdf-btn" onclick="descargarPDF(this)">Descargar PDF</button>
      </div>`;
  }
  
  function filtrarPorCliente() {
    const texto = document.getElementById("busqueda").value.toLowerCase().trim();
    const resultados = document.getElementById("resultadosServicios");
    resultados.innerHTML = "";
    document.getElementById("abanicoFechas")?.remove();
  
    if (texto === "") return;
  
    const cliente = clientes.find(c => c.nombre.toLowerCase().includes(texto));
    if (!cliente) {
      resultados.innerHTML = "<p>No se encontró ningún cliente con ese nombre.</p>";
      return;
    }
    const serviciosConCliente = cliente.servicios.map(s => ({ ...s, cliente: cliente.nombre }));
    crearAbanicoFechas(serviciosConCliente);
  }
  
  function descargarPDF(boton) {
    const hoja = boton.parentElement;
    html2canvas(hoja).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf.jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("hoja-de-servicio.pdf");
    });
  }
  
