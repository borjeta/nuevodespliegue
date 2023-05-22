Para realizar el despliegue en local debes tener docker instalado en tu máquina y ejecutar el siguiente comando en la raíz del proyecto: docker-compose up -d 
Esto desplegará 3 contenedores , uno con la base de datos , otro con la aplicación y otro con el servidor web.
Para acceder a la aplicación debes ir a la dirección http://20.199.41.101:3000
Si usas el método en docker-compose recuerda descomentar la linea de DB_HOST en el archivo .env

Otra manera es en VSC , clonar el repositorio y en la ruta foodtrackv4/api ejecutar el comando
php composer.phar install 
php artisan serve 

en otra terminal en la ruta foodtrackv4/material-kit-react-main ejecutar el comando 
npm install
npm start

Si usas el método en VSC recuerda comentar la linea de DB_HOST en el archivo .env


Para realizar los test de carga en laravel instala ARTILLERY con el comando 
npm install -g artillery
y ejecuta con 
artillery run load-test.yml

Para realizar los test de la api de laravel ejecuta el comando
php artisan test 







PROYECTO FINAL 
CICLO DESARROLLO DE APLICACIONES WEB


Alumno: Borja Alventosa Julià
Tutor Ciclo : Abraham Madrid
Tutora Proyecto : Tamara Climent



Sumario
Presentación del proyecto y promotores	3
Promotor	3
Características del servicio	5
Posibles mejoras	5
Mercado objetivo	6
Características diferenciadoras respecto competencia	6
Mejoras previstas frente a la competencia	7
Análisis DAFO	8
Fortalezas	8
Oportunidades	8
Debilidades	8
Amenazas	9
ANÁLISIS CAME	9
Financiación	10
Cuentas y previsión de la evolución.	11
Aspectos formales	14
Documento Técnico	15
1.- Descripción general del proyecto	15
2.- Tecnologías	16
3.- Planificación del tiempo y fases del proyecto	18
4.- Guía de estilos	19
Menú de opciones propietario y administrador	21
5.- Arquitectura del sistema:	23
6.- Peticiones API	26
Seguridad	27
Funciones específicas de las foodtrucks	28
7.- Diagramas	28
Diagrama tablas	29
8.- Despliegue de la aplicación	31
9.- Testing y GithubActions	32
10.- Test de carga	33
11.- Conclusiones	34
Bibliografía	35






Presentación del proyecto y promotores

El objetivo de este proyecto es desarrollar una aplicación web que permita a los usuarios encontrar y conocer la ubicación y horario de los foodtrucks que se encuentran en su zona en tiempo real. Se desarrollará utilizando tecnologías web modernas y se centrará en proporcionar una experiencia de usuario intuitiva y fácil de usar.

La industria de la comida móvil ha experimentado un aumento significativo en los últimos años y los foodtrucks se han vuelto cada vez más populares. Sin embargo, para los consumidores, puede resultar difícil encontrar la ubicación exacta de estos foodtrucks, especialmente si no están familiarizados con la zona. Con la herramienta que proporcionamos los usuarios podrán buscar fácilmente foodtrucks cercanos y obtener información detallada sobre su ubicación, horario y tipo de comida que ofrecen.

En este proyecto, se abordarán los desafíos de desarrollar una aplicación web que integre la información en tiempo real de los foodtrucks en una interfaz fácil de usar y accesible para los usuarios. Además, se explorarán diferentes técnicas y herramientas para desarrollar una solución escalable y segura.

Los usuarios podrán descubrir nuevos lugares para comer y apoyar a los pequeños negocios locales, lo que beneficiará tanto a los consumidores como a los foodtrucks.


Promotor

Mi nombre es Borja Alventosa Julià y soy un estudiante del ciclo de desarrollo de aplicaciones web. Además, tengo experiencia en la industria de la hostelería rápida, lo que me ha permitido comprender las necesidades de los consumidores y los dueños de negocios en esta industria.

He notado que hay una falta de herramientas accesibles y fáciles de usar para encontrar la ubicación y horarios de los foodtrucks en mi zona y creo que puedo aportar mi conocimiento y habilidades en el desarrollo de aplicaciones web para resolver esta necesidad.

Como promotor de este proyecto, mi objetivo es crear una aplicación web que facilite a los consumidores encontrar y conocer la ubicación y horario de los foodtrucks en tiempo real, al mismo tiempo que apoya a los pequeños negocios locales y fomenta el consumo responsable de alimentos.

A través de mi experiencia en hostelería rápida y mi formación en desarrollo de aplicaciones web, estoy seguro de que puedo llevar este proyecto a buen término y crear una solución útil y atractiva para los usuarios y dueños de foodtrucks.
Caracteristicas generales de la aplicación:

Nombre de la aplicación:  “FoodTrack”

Estará disponible para dispositivos móviles y ordenadores.
La aplicación permitirá a los usuarios filtrar la búsqueda de foodtrucks por tipo de comida, horario, precio y ubicación . Contará con información actualizada de los foodtrucks, incluyendo su horario de atención, ubicación exacta, tipo de comida.

Logo: El logo de la aplicación podría ser un camión de comida con una marca distintiva que represente la marca y su misión, como un pin que muestre la ubicación de los foodtrucks.









Eslogan: "Encuentra los foodtrucks más deliciosos de la ciudad" o "Saboréate la ciudad con FoodTruckFinder"
















Características del servicio

Seguidamente vamos a detallar cada una de las caracteristicas del servicio brevemente:

    • Búsqueda avanzada: Permitirá a los usuarios realizar una búsqueda avanzada por ubicación, tipo de comida, horario, precio y valoraciones de los foodtrucks.
      
    • Geolocalización: Utilizará la ubicación del usuario para mostrar los foodtrucks más cercanos a su ubicación actual.
      
    • Información actualizada: Proporcionará información actualizada sobre la ubicación, el horario de atención, el menú y el tipo de comida que ofrecen los foodtrucks.
      
    • Diseño intuitivo: Diseño sencillo e intuitivo para que los usuarios puedan navegar fácilmente y encontrar los foodtrucks que buscan.
      
    • Accesibilidad: Diseñada para ser accesible para todos los usuarios, independientemente de sus habilidades tecnológicas o discapacidades.
      
    • Seguridad: Diseñada de tal manera asegure la información y privacidad de los datos de los usuarios, así como para proteger la información de los foodtrucks y de sus dueños.
Posibles mejoras

Vamos a detallar una serie de diferentes posibles mejoras para la app.

    1) Calificaciones y reseñas: los usuarios podrán calificar y reseñar los foodtrucks después de visitarlos, lo que permitirá a otros usuarios conocer la calidad y experiencia de los mismos.
       
    2) Notificaciones: Enviará notificaciones a los usuarios cuando los foodtrucks que hayan marcado como favoritos se encuentren cerca o cuando se produzcan actualizaciones importantes en la información de los mismos.
       
    3) Integración con redes sociales: Permitirá a los usuarios compartir información sobre los foodtrucks que visiten en sus redes sociales, lo que ayudará a dar a conocer los pequeños negocios locales.
       
    4) Favoritos: Los usuarios podrán marcar sus foodtrucks favoritos para que puedan encontrarlos fácilmente en el futuro.
Mercado objetivo

El servicio estará dirigido a personas que buscan opciones de comida rápida y deliciosa en la ciudad, especialmente aquellos que desean apoyar a los pequeños negocios locales de foodtrucks. El mercado objetivo incluirá principalmente a jóvenes adultos y adultos de todas las edades que usan aplicaciones móviles y servicios en línea para hacer sus compras y planificar sus actividades diarias.

Además, la aplicación también se dirigirá a los dueños de foodtrucks que buscan una herramienta efectiva y fácil de usar para promocionar su negocio y aumentar su presencia en línea. Proporcionará a estos dueños de negocios una plataforma para mostrar su comida y atraer a más clientes a su negocio.

En general, estará dirigida a un mercado amplio y diverso, que incluirá a personas de todas las edades, que estén interesadas en encontrar opciones de comida rápida y deliciosa y apoyar a los pequeños negocios locales de foodtrucks.



Características diferenciadoras respecto competencia
Vista la competencia y el poco margen de mejora que hay hemos intentado reforzar nuestros puntos fuertes para darle un mayor valor al servicio:

    • Mayor precisión en la ubicación: Utilizará la tecnología de geolocalización más avanzada para proporcionar a los usuarios información precisa sobre la ubicación de los foodtrucks, lo que les permitirá encontrar fácilmente los foodtrucks cercanos a su ubicación actual.
      
    • Búsqueda avanzada: Los usuarios realizar una búsqueda avanzada por ubicación, tipo de comida, horario de las foodtrucks lo que les permitirá encontrar fácilmente aquellas  que satisfagan sus necesidades y gustos.
      
    • Información actualizada: Proporcionará información actualizada sobre la ubicación, el horario de atención, el menú y el tipo de comida que ofrecen los foodtrucks, lo que permitirá a los usuarios tomar decisiones informadas sobre dónde comer.
      
    • Crecimiento del mercado: en los últimos años, ha habido un aumento significativo en la demanda de aplicaciones móviles para la búsqueda de foodtrucks debido a la creciente popularidad de la comida callejera y la mayor necesidad de soluciones convenientes y fáciles de usar para localizarlos.
      
    • Competencia: en el mercado actual, hay varias aplicaciones móviles para la búsqueda de foodtrucks, como Truckster, Roaming Hunger, Food Truck Finder, entre otras. Todas ellas compiten por atraer a los mismos usuarios y, por lo tanto, ofrecen características diferenciadoras para destacar.
      
    • Tecnología emergente: el uso de tecnologías emergentes, como la inteligencia artificial y la realidad aumentada, está cambiando la forma en que las aplicaciones móviles para la búsqueda de foodtrucks interactúan con los usuarios y ofrecen experiencias personalizadas.
      
    • Tendencias alimentarias: las tendencias alimentarias cambiantes, como el aumento de la demanda de opciones veganas, vegetarianas y sin gluten, están afectando la oferta y la demanda de foodtrucks en el mercado.




Mejoras previstas frente a la competencia

En resumen además de reforzar los puntos fuertes anteriormente detallados , como mejoras fuertes frente a la competencia podrían ser : 
    • **Calificaciones y reseñas: los usuarios podrán calificar y reseñar los foodtrucks después de visitarlos, lo que permitirá a otros usuarios conocer la calidad y experiencia de los mismos.
      
    • **Notificaciones: la aplicación enviará notificaciones a los usuarios cuando los foodtrucks que hayan marcado como favoritos se encuentren cerca o cuando se produzcan actualizaciones importantes en la información de los mismos.

En conclusión, el mercado de aplicaciones móviles para la búsqueda de foodtrucks está en constante evolución debido a los cambios en las tendencias alimentarias, la tecnología emergente y la creciente competencia. Sin embargo, la demanda de estas aplicaciones sigue siendo alta debido a la popularidad de la comida callejera y la necesidad de soluciones convenientes para localizar los foodtrucks.


Análisis DAFO

Mediante el análisis DAFO vamos a detallar cuales serían nuestras principales Debilidades , amenazas , fortalezas y oportunidades. Esto nos servirá para mejorar la eficacia de nuestras decisiones empresariales a lo largo del proyecto.
Fortalezas
      
    • Proporciona información en tiempo real sobre la ubicación y horario de los foodtrucks, lo que es una necesidad importante para los consumidores.
    • Ayuda a los pequeños negocios locales a promocionarse y llegar a un público más amplio.
    • Proporciona una experiencia de usuario intuitiva y fácil de usar para los usuarios.
    • Puede ser una solución escalable y adaptable a diferentes ciudades y regiones.

Oportunidades

    • La popularidad de la comida móvil está en aumento, lo que significa que hay una gran demanda de herramientas que ayuden a los consumidores a encontrar los foodtrucks.
    • El apoyo a los pequeños negocios locales es una tendencia en auge y este modelo de negocio podría contribuir a la causa.
    • Se podrán incluir funciones adicionales como clasificaciones y comentarios de usuarios, lo que podría mejorar la experiencia del usuario.
      
Debilidades

    • Existe la posibilidad de que la información proporcionada no sea siempre precisa debido a cambios imprevistos en la ubicación y horarios de los foodtrucks.
    • Es posible que la aplicación no tenga una base de usuarios lo suficientemente grande como para atraer a los foodtrucks a registrarse y actualizar su información regularmente.
    • Puede requerir una inversión significativa en términos de recursos y tiempo para el desarrollo y mantenimiento.


Amenazas
    • Puede haber competidores en el mercado que ofrezcan aplicaciones similares para encontrar foodtrucks.
    • La popularidad de la comida móvil podría disminuir, lo que disminuiría la demanda del servicio.
    • Los consumidores podrían preferir utilizar aplicaciones de entrega de alimentos más establecidas en lugar de buscar y encontrar los foodtrucks.
    • En general, el análisis DAFO sugiere que hay una demanda potencial para la aplicación Foodtruck , pero también hay desafíos a considerar. Es importante que el equipo de desarrollo de la aplicación esté preparado para abordar estos desafíos y aprovechar las oportunidades para crear una solución útil y exitosa.
      
ANÁLISIS CAME

Metas:
Desarrollar una interfaz de usuario atractiva y fácil de usar para los usuarios finales.
Implementar funcionalidades clave, como búsqueda de foodtrucks por ubicación, horarios de operación, tipos de comida, etc.
Obtener una base de usuarios activa y comprometida que utilice regularmente la aplicación para localizar y disfrutar de los foodtrucks.
Establecer asociaciones con foodtrucks populares y ampliar la base de datos de la aplicación con información actualizada y precisa.

Estrategias:

Realizar una investigación de mercado para identificar las necesidades y preferencias de los usuarios en cuanto a la localización y seguimiento de foodtrucks.
Diseñar una interfaz de usuario intuitiva y atractiva que permita a los usuarios encontrar fácilmente foodtrucks cercanos, ver su información relevante y realizar acciones como calificar y comentar.
Implementar un sistema de notificaciones para informar a los usuarios sobre la ubicación actualizada de los foodtrucks que siguen.
Establecer asociaciones con foodtrucks populares y promocionar su presencia en la aplicación para atraer a más usuarios y aumentar la visibilidad de la aplicación.
Realizar campañas de marketing digital y promoción en redes sociales para dar a conocer la aplicación y atraer a los usuarios interesados en la cultura de los foodtrucks.



Financiación

La dos principales fuentes de ingresos serían : 

    A) Suscripción de autónomos: La aplicación podría ofrecer una versión premium para los propietarios de foodtrucks que deseen obtener más exposición y funcionalidades adicionales en la plataforma. Por ejemplo, podrían pagar por un perfil destacado en la lista de resultados de búsqueda, acceso a estadísticas avanzadas sobre el rendimiento de su negocio, o la posibilidad de personalizar su perfil con imágenes y contenido adicional. El precio de la suscripción podría establecerse según la oferta de valor y la competencia del mercado.
       
    B) Anuncios y banners: Otra fuente de ingresos para la plataforma sería la publicidad. Podría vender espacios publicitarios en la página principal y en otras secciones de la plataforma para promocionar productos relacionados con la alimentación o la hostelería, o incluso para destacar otros servicios complementarios como empresas de catering o proveedores de suministros para foodtrucks.

Para la comercialización de la aplicación, se podrían realizar las siguientes acciones:
      
    •  Publicidad en redes sociales y motores de búsqueda para atraer a nuevos usuarios y propietarios de foodtrucks.
    •  Asociaciones con eventos locales de alimentación y hostelería para promocionar la aplicación y ofrecer promociones exclusivas a los usuarios durante esos eventos.
    • Patrocinar eventos y festivales de comida callejera para mejorar la exposición de la aplicación a una audiencia más amplia(ferias).
    • Colaborar con empresas de catering y proveedores de suministros para foodtrucks para ofrecer descuentos y promociones a los usuarios.
    • Ofrecer descuentos y promociones a los usuarios que inviten a amigos a unirse a la aplicación.
      


En cuanto a la previsión de ingresos, dependerá del tamaño del mercado, el precio de la suscripción y los ingresos publicitarios generados. Una estrategia adecuada de fijación de precios y promoción podría llevar a una tasa de adopción y uso suficientemente alta para generar ingresos sostenibles. Es importante destacar que la generación de ingresos depende en gran medida de la satisfacción y fidelización de los usuarios, por lo que se debería prestar atención a la calidad y utilidad del servicio




Cuentas  y previsión de la evolución.

Supongamos que el precio de suscripción anual para los propietarios de foodtrucks es de 100 € y se espera que 200 de ellos se suscriban en el primer año, lo que daría un ingreso de 20.000 € en el primer año. Si se espera que esta cantidad aumente un 25% en el segundo año, entonces los ingresos por suscripción serían de 25.000 € en el segundo año.

En cuanto a los ingresos por publicidad, supongamos que se espera recibir un total de 5.000 € en el primer año y 7.500 € en el segundo año a través de anuncios y banners.

Respecto a los gastos, si necesitas un servidor por cada 5.000 usuarios, el costo de los servidores dependerá del número total de usuarios. Si suponemos que tenemos 10.000 usuarios en el primer año y 15.000 en el segundo año, se necesitarían tres servidores en el primer año y cuatro en el segundo año. El costo de cada servidor variará según las especificaciones técnicas, pero podríamos suponer un costo promedio de 100 € por mes por servidor.





En resumen, la proyección de ingresos para el primer y segundo año sería:

    • Subscripción de foodtrucks: Supongamos que conseguimos que 500 de los 1.000 foodtrucks de la zona se suscriban a nuestra plataforma, a un precio de 20 euros al mes cada uno. Esto generaría unos ingresos de 10.000 euros al mes.
      
    • Publicidad: Supongamos que obtenemos un promedio de 1.000 clics en anuncios por mes a un precio de 0,50 euros por clic. Esto generaría unos ingresos de 500 euros al mes.
      
    • En total, nuestros ingresos serían de 10.500 euros al mes, o 126.000 euros al año.











Y por otra parte la de los gastos:

    • Servidores: Según nuestras estimaciones, necesitaríamos un servidor por cada 5.000 usuarios. Si tenemos 25.000 usuarios en nuestra plataforma en el primer año, necesitaríamos 5 servidores, que costarían unos 500 euros al mes cada uno, para un total de 2.500 euros al mes.
      
    • Autónomo: Como promotor del proyecto, tendría que darme de alta como autónomo para poder facturar los ingresos generados. Los gastos de autónomo en España pueden variar, pero como estimación conservadora, supongamos que los gastos mensuales son de 300 euros al mes.
      
    • Impuestos: El impuesto de sociedades en España es del 25%, por lo que tendríamos que reservar una cantidad de nuestros ingresos para pagar impuestos. Si asumimos que tendríamos una ganancia neta del 50% después de impuestos, tendríamos que pagar un impuesto del 33,3% sobre nuestros ingresos. Esto significa que tendríamos que reservar unos 4.158 euros al mes para impuestos.
      
    • En total, nuestros gastos serían de unos 6.958 euros al mes, o 83.496 euros al año.
      
      Concepto
      Costo Mensual(€)
      Costo Anual (€)
      Servidores
      2.500
      30.000 
      Autónomo
      300
      3.600 
      Impuestos
      4.158
      49.896 
      Total
      6.958
      83.496 
Tabla 1: Tabla de gastos previstos

Teniendo en cuenta estos gastos, nuestros beneficios netos serían de 42.504 euros al año en el primer año del proyecto, y podrían aumentar en el segundo año a medida que la plataforma se vuelve más popular y se unen más foodtrucks y anunciantes. Es importante destacar que estos son solo estimaciones y que los resultados reales pueden variar.

Es importante tener en cuenta que esta proyección es solo una estimación y que los ingresos y gastos reales pueden variar según diversos factores, como la estructura de precios y la competencia en el mercado










Aspectos formales

La empresa podría ser una startup de tecnología con enfoque en el sector de la hostelería móvil. La empresa estaría formada por un equipo de desarrollo de software, liderado por el promotor del proyecto Borja Alventosa Julià.

La actividad principal de la empresa sería el desarrollo y mantenimiento de la aplicación web Foodtruck , que permite a los usuarios encontrar y conocer la ubicación y horario de los foodtrucks en tiempo real. La empresa también ofrecería servicios de publicidad y promoción en la aplicación para los dueños de los foodtrucks.

El perfil de la empresa sería el de una empresa joven y dinámica, con un enfoque en la innovación y la tecnología. El equipo estaría formado por desarrolladores de software altamente capacitados y motivados, comprometidos con el éxito del proyecto. La empresa también tendría una fuerte orientación al cliente, asegurándose de ofrecer una experiencia de usuario de alta calidad y de satisfacer las necesidades de los clientes.

En términos de visión, la empresa buscaría convertirse en un referente en el sector de la hostelería móvil, ofreciendo soluciones tecnológicas innovadoras y eficientes que faciliten la vida de los consumidores y de los dueños de los foodtrucks. La empresa también buscaría fomentar el consumo responsable de alimentos y el apoyo a los pequeños negocios locales.

En cuanto a la estructura organizativa, la empresa sería una estructura jerárquica plana, con Borja Alventosa Julià como el fundador y líder del proyecto. La empresa también contaría con un equipo de ventas y marketing para la promoción de la aplicación y la captación de nuevos clientes.













Documento Técnico

1.- Descripción general del proyecto

El proyecto consiste en una plataforma web que permite la gestión de ventas para pequeñas empresas. Para ello, se ha utilizado la librería de JavaScript React en el frontend, una API en Laravel para la gestión del backend y una base de datos MySQL para el almacenamiento de los datos.

En la parte del frontend, se ha desarrollado una interfaz de usuario intuitiva y fácil de usar utilizando React. Cuenta con un sistema de registro y login de usuarios, lo que permite una gestión personalizada y segura de los datos. Además, se ha implementado un sistema de navegación intuitivo que permite a los usuarios acceder rápidamente a todas las funcionalidades.

En cuanto a la parte del backend, se ha utilizado Laravel para desarrollar una API que se comunica con la base de datos MySQL. La API gestiona las solicitudes del cliente y responde con los datos correspondientes, lo que garantiza una experiencia fluida y eficiente para el usuario. Además, se ha implementado un sistema de autenticación y autorización de usuarios para garantizar la seguridad de los datos.

En resumen, el proyecto ofrece una solución accesible y económica para la gestión de ventas de pequeñas empresas, utilizando tecnologías modernas y eficientes. La combinación de React en el frontend, una API en Laravel y una base de datos MySQL permite una gestión eficiente de los datos y garantiza una experiencia de usuario satisfactoria.













2.- Tecnologías
Acontinuación vamos a argumentar por que hemos elegido estas tecnologías y veremos sus puntos fuertes.


	React es una de las herramientas más populares para el desarrollo de interfaces de usuario en la actualidad.Proporciona una experiencia de usuario fluida y altamente interactiva gracias a su modelo de programación basado en componentes. Perrmite la creación de aplicaciones de una sola página, lo que significa que las páginas se cargan más rápido y la experiencia del usuario es más fluida.
	La ventaja de usar Laravel como su marco es que proporciona seguridad de clase alta. Eso también significa que su código de desarrollo web está seguro y protegido. Esto es debido en parte al uso de un ORM , en este caso Eloquent es el ORM de Larvel. Esto nos permite tener facilidades en el desarrollo de código con conexiones seguras a bases de datos , además de tener herramientas que nos ahorran mucho valioso tiempo de desarrollo en cuanto a escribir largas sentencias SQL . Lo anteriormente dicho y la facilidad con la que se conecta a casi cualquier gestor de base de datos es lo que me ha hecho decantarme por esta tecnología.
      

	Por último cabe destacar Docker por su potencial en despliegues y que combinado con Kubernetes (K8’s) son las herramientas perfectas para el macro escalado de la aplicación. Junto con la facilidad que nos da a la hora de desplegar cualquier plataforma en cualquier máquina.
El conjunto de las herramientas anteriores nos permite construir una plataforma que cumpla los requisitos.
    • Sistema de registro y login de usuarios.
    • Sistema de autenticación y autorización de usuarios.
    • Interfaz de usuario intuitiva y fácil de usar.
    • Accesibilidad desde dispositivos móviles.
    • Seguridad de los datos.

	En resumen, la aplicación web de gestión de ventas ha sido desarrollada utilizando tecnologías modernas y eficientes, y cumple con los requisitos específicos del cliente. La combinación de React en el frontend, una API en Laravel y una base de datos MySQL permite una gestión eficiente de los datos y garantiza una experiencia de usuario satisfactoria.








3.- Planificación del tiempo y fases del proyecto
Acontinuación se detallan brevemente los objetivos de cada fase:
    • 1º Fase Planificamos y estruturamos como será nuestra app , las tablas que tendrá y las entitades que intervendrán ella. Fijamos una fecha aproximada desde 03 de Marzo  hasta 15 de Marzo.
    • 2º Fase: Comenzamos con el desarrollo de los CRUD’s de usuarios y foodtrucks además de ir montando un Login sencillo con el que poder interactuar. La duración de esta fase es bastante relativa puesto que se han ido incorporando cambios a medida que avanzaba el proyecto. 07 de Marzo hasta el 1 de abril
    • 3º Fase : Se establecen parámetros generales en cuanto al diseño y distribución de contenedores modales , etc.Desde el 20 de Marzo hasta el 1 de Abril
    • 4º Fase : Paralelamente a la 3º fase se realizan ciertas mejoras y se acaban de detallar especificaciones de cada vista para cada rol incluyendo su seguridad. Desde 20 de Marzo hasta el 1 de Abril 
    • 5º Fase : Se comienza a revisar el código anterior , para resolver posibles conflictos después de haber implementado varios cambios y mejoras. Desde el 24 de Marzo hasta 
    • 6º Fase : A medida que se van resolviendo los últimos conflictos y rematando detalles, vamos probando el despliegue final , además de preparar todos los recursos para el test de carga y el testing sobre las API.
4.- Guía de estilos
Aquí detallamos una breve guía de estilos con los que seguir con las futuras implementaciones.

Selectores de botones:

	background-color: color de fondo #2c7b78.
	color: color de texto negro.
	border: borde sin estilo.
	padding: espacio de 1rem arriba y abajo, 2rem a los lados.
	border-radius: radio de borde de 5px.

Selectores de contenedores:

	background-color: color de fondo a	liceblue.
	border: borde de 1rem de ancho en color 	#2c7b78.
	border-radius: radio de borde de 2rem.
	padding: espacio de 2rem alrededor del 	contenido.
	align-items: alinea el contenido 	verticalmente en el centro.
	justify-content: alinea el contenido horizontalmente en el centro.
	padding-left: espacio de relleno adicional de 3rem en el lado izquierdo.

Selectores de título del panel de administración:

	color: color de texto #1A73E8.
	font-size: tamaño de fuente de 2rem.
	text-align: alinea el texto al centro.


Para pantallas con un ancho máximo de 600px.
Dentro de este rango, los botones tendrán un margen inferior de 1rem.

Selector #btnOpcionesGlobales:

	border: borde de 0.5rem de ancho en color #1A73E8.
	border-radius: radio de borde de 1rem.
	padding: espacio de 1rem alrededor del contenido.
	align-items: alinea el contenido verticalmente en el centro.
	justify-content: alinea el contenido horizontalmente en el centro.
	padding-left: espacio de relleno adicional de 3rem en el lado izquierdo.
	text-align: alinea el texto al centro.



Selector .ajustes:

	padding: espacio de 1rem alrededor del contenido.
	align-items: alinea el contenido verticalmente en el centro.
	justify-content: alinea el contenido horizontalmente en el centro.
	padding-left: espacio de relleno adicional de 3rem en el lado izquierdo.
	text-align: alinea el texto al centro.










Container tiene las siguientes propiedades
    • maxWidth: se establece en "md" para un ancho máximo de tamaño medio.
    • sx: estilos personalizados que incluyen:
      	mt y mb: margen superior e inferior de 4 unidades.
      	border: borde de 1 píxel sólido en color blanco (#FFFFFF).
      	borderRadius: radio de borde de 12 píxeles.
      	padding: relleno de 10 píxeles alrededor 	del contenedor.
      	boxShadow: sombra del contenedor.
      	background: fondo degradado utilizando 	una función lineal-gradient.

Grid y tarjetas
Grid y Card se utilizan para crear una cuadrícula de tarjetas.
	borderRadius: radio de borde de 12 píxeles.

CardMedia se utiliza para mostrar una imagen dentro de la tarjeta.
    • sx: estilos personalizados que incluyen:
		width: ancho de 25rem.
		height: altura de 15rem.
		margin: margen automático para centrar la imagen.

Contenido de la tarjeta
CardContent se utiliza para el contenido de la tarjeta.
    • sx: estilos personalizados que incluyen 
          flexGrow establecido en 1 para permitir que el 	contenido crezca.

Menú de opciones propietario y administrador
Contenedor principal:

Se utiliza un componente Container con la clase "container".
Se alinea al centro y se justifica al centro.
Tiene un relleno vertical de 10 unidades (py).

Título:
Se utiliza el componente MKTypography para mostrar un título con estilo.
Se aplica un estilo personalizado utilizando la propiedad sx.
	Los estilos incluyen:
    • textAlign: centrar el texto.
    • fontFamily: establecer la fuente a "Roboto".
    • color: establecer el color del texto en blanco (#FFFFFF).
    • fontWeight: establecer el peso de la fuente en negrita.
    • scrollbarWidth y msOverflowStyle: ocultar las barras de desplazamiento en Firefox e Internet Explorer.
    • &::-webkit-scrollbar: establecer el ancho de la barra de desplazamiento en 0 píxeles y establecer el fondo transparente en Chrome/Safari/Webkit.
    • overflow: habilitar el desplazamiento vertical en Google Chrome.
      

Se utiliza el componente MKBox con la clase "container".
Se aplica un estilo personalizado utilizando la propiedad sx.
Los estilos incluyen:
    • textAlign: centrar el contenido.
    • fontFamily: establecer la fuente a "Roboto".
    • fontWeight: establecer el peso de la fuente en negrita.
    • borderRadius: establecer el radio de borde en 10 píxeles.
    • alignItems y justifyContent: centrar vertical y horizontalmente los elementos hijos.
    • py: relleno vertical de 10 unidades.
      

Botones y modales
Se utilizan los componentes MKButton y Modal para mostrar botones y modales respectivamente.
	Back-groundColor : #2c7b78.
	Size : md (medium )

Footer
Se utiliza el componente Footer para mostrar el pie de página.Además de ser el mismo para toda la app, independientemente de los roles.


5.- Arquitectura del sistema:
La estructura de la aplicación se basará principalmente en dos entidades.
Por una parte tendremos una entidad Usuario que con 3 diferentes roles.
    • User : Rol designado al cliente y/o público de la aplicación. Donde éste podrá listar las foodtrucks activas en ese momento en su zona . 
Además de dos filtros para buscar por categorías de comida y por localidades o zonas.


Como imagen principal del rol del usuario , que será aproximadamente el 90 % de los usuarios de la app , ya que propietarios o administradores solo será un pequeño porcentaje.
Se mostrará esta ventana como se puede ver a continuación.







Por otra parte desde la vista de usuario los detalles de las foodtrucks se verán de esta manera:


Como comentaremos posteriormente se comparten el mismo modal de edición de datos del usuario independientemente del rol .


    • Propietario : Rol que definirá en calidad de propietario al usuario . Éste podrá crear foodtrucks suyas con diferentes ubicacioes y tipos de comida .



Donde además se despliegan diferentes modales

















    • Administrador : Rol asignado a la gestión y administración de la aplicación. Este rol tiene control total sobre la aplicación , donde podrá añadir , editar o eliminar usuarios






6.- Peticiones API 
Acontinuación se muestra un ejemplo de una petición a la API y su comprobación en el servidor.
Además adjuntamos también un ejemplo de la cabecera de la petición. 

Index: Devuelve una lista de todos los usuarios registrados en la base de datos. Para poder acceder a ella, se requiere el token de la API, el ID del usuario y su rol, que deben coincidir con los almacenados en la base de datos.




Es importante recalcar que el formato de las cabeceras de las peticiones (Headers) sean siempre el mismo. De lo contrario el servidor denegará las peticiones.

Por otra parte se ha limitado el n.º de peticiones por minuto a 250 para tener en cierta manera controlado el exceso de uso de los servidores , además de ayudarnos a poder prevenir y calcular los picos de las demandas y cuales son los rangos en los que nos movemos en cuanto a consumo de recursos.









Seguridad

Puesto que garantizamos la seguridad en nuestra plataforma ,  vamos a detallar brevemente las diferentes medidas de seguridad implementadas en nuestra aplicación.


    • Seguridad implementada por tokens : Mediante la creación de un Token por sesión y caducidad , nos permite tener una capa más de seguridad en nuestra aplicación.
      
    • Medidas rudimentarias para complementar a la medida principal : Como por ejemplo el acceso a ventanas de administrador. Aunque con la primera medida ya restringimos el acceso a la información a personas no autorizadas.
	
    • Validación de campos no nulos o valores no válidos en frontend : En los formularios se revisa antes de enviar si los campos son nulos o en otros casos se “obliga “ a que el usuario no introduzca valores extraños de manera involuntaria.

    • Redirección en ciertas ventanas de la app para roles específicos : Esta medida se complementa con las anteriores para que de esta manera entre todas contribuyan a una aplicación robusta y segura.

    • En caso de acceder el usuario a una ruta de acceso de un rol que no es el suyo , el atacante no podrá realizar peticiones válidas al servidor API , ya que el servidor controla por código la validez de los 3 parámetros principales que se pasan en las cabeceras , además de la renovación de token diaria y por cada nuevo inicio de sesión del usuario 
          

Funciones específicas de las foodtrucks

Además de los crud’s básicos de las 2 principales entidades , también hemos programado unos funciones específicas para nuestra manipulación correcta de los datos.


7.- Diagramas
En esta apartado de diagramas se mostrarán gráficamente los diferentes casos de uso de la aplicación más un pequeño modelo Entidad relación



La siguiente imagen muestra la relación uno a muchos entre propietario y foodtruck, que en caso de 
seguir creciendo la aplicación sera conveniente ir añadiendo cada una de las nuevas relaciones.
Diagrama tablas
Aquí tenemos una distribución de las tablas de la plataforma:


















8.- Despliegue de la aplicación 

El despliegue de la aplicación lo llevaremos a cabo a partir de un simple docker-compose , para ello nos sirve cualquier servidor que tenga instalado docker.

Contenedor de base datos  Este servicio utiliza la imagen mysql:latest para crear una base de datos MySQL. El servicio utiliza un contenedor llamado foodtrackv4db y se mapea el puerto 3306 del contenedor al puerto 3306 del host. Se monta el directorio ./mysql-dump en /docker-entrypoint-initdb.d/ dentro del contenedor. También se configura la red my_network y se asigna la dirección IP 172.16.238.30. Además, se establecen algunas variables de entorno para configurar la base de datos MySQL.

Contenedor del servicio web (Frontend) Este servicio utiliza la imagen benylightflows/node-php8.1 para crear una aplicación web. El servicio utiliza un contenedor llamado foodtrackv4 y se mapea el puerto 3000 del contenedor al puerto 3000 del host. Se monta el volumen volumendespliegues en /var/www/html/storage dentro del contenedor. También se configura la red my_network y se asigna la dirección IP 172.16.238.20. Este servicio depende del servicio db y ejecuta un comando para clonar un repositorio git, instalar dependencias y arrancar la aplicación.

Contenedor del servicio API (Backend): Este servicio utiliza la imagen 0175648424/laravel9php8:v1.0 para crear una API. El servicio utiliza un contenedor llamado foodtrackv4api y se mapea el puerto 8000 del contenedor al puerto 8000 del host. Se monta el volumen volumendespliegues en /var/www/html/storage dentro del contenedor. También se configura la red my_network y se asigna la dirección IP 172.16.238.10. Este servicio depende del servicio db y ejecuta un comando para clonar un repositorio git, instalar dependencias y arrancar la API.

El archivo también define una red llamada my_network con una dirección IP y una puerta de enlace. Se define un volumen llamado volumendespliegues, que utiliza el driver local y se monta en /home/foodtrackv4 en el host.

En resumen, el archivo docker-compose define tres servicios que trabajan juntos para crear una aplicación web, cada uno de los cuales se ejecuta en su propio contenedor Docker. Los contenedores se comunican a través de la red my_network y se comparten el volumen volumendespliegues. Cada servicio depende del servicio db y tiene su propia configuración y comandos de ejecución específicos.



9.- Testing  y GithubActions 

Para apartado de testing hemos desarrollado una serie de rutinas en github , para que por cada push se ejecute un Action que despliegue la plataforma y además ejecute test unitarios sobre la API de Laravel.
Con las rutinas de Github comprobamos el despliegue de la aplicación en la nube. 
Este mecanismo se ha sincronizado para que por cada push que se realice sobre el proyecto , ejecute el simulacro de despliegue además de realizar los test de manera automática mientras se sigue trabajando. Esto permite un ahorro de tiempo y una mejoría en las pruebas.

Por otra parte los test unitarios de Laravel son para efectuar una serie de llamadas a la API y ver que nos responde correctamente , al mismo tiempo que se van realizando pruebas en la base de datos.

Los test programados son 3 rutinas de cada controlador que nos servirán para comprobar que todo esta funcionando correctamente. Además de un test general sobre la ruta raiz.

Por otra parte tenemos preparado otro Docker-compose solo para desarrollo. 

    • El docker-compose principal realizará el despliegue completo de la aplicación , este está situado en el directorio raiz del proyecto.
    • El docker-compose de la ruta docker/despliegueyainiciado que nos servirá para cuando ya este toda la infraestructura desplegada y solo necesitemos un reinicio suave o “soft”.




10.- Test de carga 

Para un mantenimiento y desarrollo correcto de la aplicación es necesario someter a nuestros sistemas a pruebas de estrés. Ya que con ello , podremos realizar una mejor toma de decisiones ante futuros cambios en el proyecto o a la hora de implementar nuevas mejoras en la plataforma.
Para nuestra fase de testing se ha preparado una ruta en específico en el controlador de usuarios para ver como reacciona nuestro código y nuestros servidores frente a una gran cantidad de peticiones . Nosotros hemos usado ARTILLERY librería especificamente diseñada para estos test.
Lo configuramos mediante un fichero .yml donde definimos la ruta del test y la respuesta , además de establecer 5 fases de 5 , 10 , 15 , 20 y 25 segundos con un máximo de 200000 peticiones para poder sacar una buena media
En nuestro equipo local ha mostrado grandes resultados , partiendo de un  i7-6820HK  4 Núcleos y 8 Hilos 

Después de realizar diferentes pruebas vemos que nos situamos en alrededor de 3500 peticiones por segundo , con algún pico puntual de 4200 . Este dato lo podrémos tomar como base para ir probando diferentes modulos o rutas que requiran de mucho procesamiento y así tomar a futuro decisiones que den prioridad a la velocidad y respuesta de nuestra app.

11.- Conclusiones
Las conclusiones que podemos sacar de este proyecto son sin duda muchas. Acontinuación explicare brevemente algunos observaciones.

Por una parte , aunque ha sido un proyecto entretenido , medianamente exigente y con todo un conocimiento nuevo que explotar, después de analizar competencias de mercado, diseños y requisitos del mercado , es un proyecto que no llevaría adelante. Al menos , a nivel empresarial.
Por otra parte , es cierto que ha sido muy interesante en la parte de asimilar los conceptos aprendidos durante estos dos años de ciclo. 
Haber probado diferentes frameworks me ha ayudado a conocer un poco más como funcionan todos los frameworks , pero ahora desde un punto de vista más genérico. 
Además elegí ambos frameworks ( Laravel y React ) por su dificultad y la demanda laboral existente. También es importante recalcar la ventaja que ha sido conocer Laravel , puesto que es muy parecido a otros frameworks como Symfony, también con una alta demanda laboral.
Desde la construcción de las API’s , pasando por frontend y continuando con el control de versiones y despliegue. Tocando tecnologías como Docker o Kubernetes me ha ayudado comprender como funcionan las aplicaciones web y plataformas a gran escala , además de poder “ simular “ entornos a dichas escalas en entornos locales. Ha sido un recorrido muy interesante y satisfactorio a nivel personal .
Todo lo anterior me ha permitido conocer y comprender mucho más ampliamente el mundo de la programación en el que acabo de comenzar, aun que es algo que creo que he llevado siempre en la sangre, después de esto podré emprender una carrera profesional-empresarial a mi gusto y haciendo lo que más me gusta.
Por último quiero acabar con ímpetu este ciclo y seguir dedicándole un sinfín de horas al mundo de la informática. Por que si algo tengo claro , es que hay un mundo de sabiduría en cuanto a informática, mucho más allá del desarrollo web.

Borja Alventosa Julià






Bibliografía

Enlaces :
    • www.github.com
    • www.stackoverflow.com
    • www.react.dev
    • www.youtube.com/peladoNerd
    • www.youtube.com/midudev
    • www.youtube.com/mouredev
    • www.docker.com

