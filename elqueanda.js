
const clientes = [
    {
        nombre: "SS CALZADOS",
        servicios: [
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
                    },
                ]
            },
            {
        nombre: "ACME S.A.",
        servicios: [
            {
                numero: 101,
                fecha: "2024-03-05",
                ruc: "9876543210",
                tipo: "Reparación",
                equipo: "Motor industrial",
                sucursal: "Sucursal Este",
                detalles: "Cambio de rodamientos y ajuste general.",
                costo: "$32000",
                archivoURL: "documentos/hoja101.pdf"
            }
        ]
    }
];

document.getElementById("buscarBtn").addEventListener("click", () => {
    const input = document.getElementById("campoBusqueda").value.toLowerCase();
    const cliente = clientes.find(c => c.nombre.toLowerCase().includes(input));

    const contenedorCliente = document.getElementById("contenedorCliente");
    contenedorCliente.innerHTML = "";

    const container = document.getElementById("resultados");
    container.innerHTML = "";

    if (!cliente) {
        const contenedorCliente = document.getElementById('resultadosCliente');
        if (contenedorCliente) {
            contenedorCliente.innerHTML = "<p>No se encontró el cliente.</p>";
        }
        return;
    }

    contenedorCliente.innerHTML = `<p>Mostrando resultados para: <strong>${cliente.nombre}</strong></p>`;

    const serviciosPorAnio = cliente.servicios.reduce((acc, servicio) => {
        if (!acc[servicio.anio]) acc[servicio.anio] = [];
        acc[servicio.anio].push(servicio);
        return acc;
    }, {});

    for (const anio in serviciosPorAnio) {
        const boton = document.createElement('button');
        boton.className = 'accordion';
        boton.textContent = anio;
        container.appendChild(boton);

        const panel = document.createElement('div');
        panel.className = 'panel';

        serviciosPorAnio[anio].forEach(servicio => {
            const div = document.createElement('div');
            div.className = 'hoja-servicio';
            div.innerHTML = `
                <h3>${servicio.tipo} - ${servicio.equipo}</h3>
                <p><strong>Fecha:</strong> ${servicio.fecha}</p>
                <p><strong>Costo:</strong> ${servicio.costo}</p>
                <p>${servicio.detalles}</p>
            `;
            panel.appendChild(div);
        });

        container.appendChild(panel);

        boton.addEventListener('click', function() {
            console.log('Click detectado en:', anio);
            this.classList.toggle('active');
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
                console.log('Altura calculada para', anio, ':', panel.scrollHeight);
            }
        });
    }
});
