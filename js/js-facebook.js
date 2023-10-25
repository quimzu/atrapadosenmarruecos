$(document).ready(function(){


window.fbAsyncInit = function() {
		FB.init({appId: '151776658319058', status: true, cookie: true,xfbml: true});
			
		};

			(function() {
				var e = document.createElement('script'); e.async = true;
				e.src = 'http://connect.facebook.net/en_US/all.js';
				document.getElementById('fb-root').appendChild(e);
}());




//FB GENERAL
$('#share_button').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos.',
link: 'http://www.atrapadosenmarruecos.org',
picture: 'http://www.atrapadosenmarruecos.org/img/apartat1.jpg',
caption: 'Miles de migrantes subsaharianos se encuentran atrapados en Marruecos, -fin de trayecto obligado, dique de contención para Europa-, indigentes, clandestinos, expuestos a toda clase de violencia.',

});
});





/*RABAT + NOIES*/

$('#share_button_rabat').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Rabat',
link: ' http://www.atrapadosenmarruecos.org',
picture: 'http://www.atrapadosenmarruecos.org/img/apartat1.jpg',
caption: 'Las proporciones exactas de la violencia sexual experimentada por hombres, mujeres y chicos y chicas migrantes subsaharianos durante su viaje son desconocidas. Imposibles de contabilizar en una población que busca pasar desapercibida y/o que está en manos de traficantes humanos. Sólo de 2010 a 2012 MSF ha tratado a 700 pacientes agredidos.',

});
});


$('#share_button_marie').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Rabat: Marie',
link: ' http://www.atrapadosenmarruecos.org/#/marie',
picture: 'http://www.atrapadosenmarruecos.org/img/marie/1.jpg',
caption: '“Nuestro viaje, no es un viaje como tal. Cuando estás sola, no tienes donde dormir, no conoces el país, estás expuesta”.',
});
});



$('#share_button_beauty').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Rabat: Beauty',
link: ' http://www.atrapadosenmarruecos.org/#/beauty',
picture: 'http://www.atrapadosenmarruecos.org/img/beauty/1.jpg',
caption: 'Beauty se camufla con un pañuelo y habla el francés dulce de los marfileños. Salió de Costa de Marfil por la guerra, porque dice que su nombre estaba en una lista de los que apoyaron al presidente equivocado, vio como parte de su familia era asesinada.',
});
});

$('#share_button_gala').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Rabat: Gala',
link: ' http://www.atrapadosenmarruecos.org/#/gala',
picture: 'http://www.atrapadosenmarruecos.org/img/gala/01.jpg',
caption: 'El caso de Gala es diferente. Tiene 52 años y es viuda. Ha viajado con sus tres hijas a Rabat. Sus problemas se originaron en su país, la República Democrática del Congo (RDC), en Beni, en Kivu Norte.',
});
});








$('#share_button_informe').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Informe',
link: ' http://www.atrapadosenmarruecos.org/#/informe',
picture: 'http://www.atrapadosenmarruecos.org/img/informe.jpg',
caption: 'MSF ha publicado un informe sobre los migrantes subsaharianos, sus condiciones de vida y la violencia que sufren en el que se incluyen recomendaciones a los gobiernos marroquí y español.',

});
});


//	OUJDA

$('#share_button_oujda').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Oujda',
link: ' http://www.atrapadosenmarruecos.org/#/oujda',
picture: 'http://www.atrapadosenmarruecos.org/img/oujda.jpg',
caption: 'El miedo a la deportación es una constante. Oujda es vieja conocida por los migrantes subsaharianos. La gran mayoría de ellos llega a través de Argelia y Oujda es la ciudad de recepción, de entrada. También a la que regresan cuando las fuerzas de seguridad marroquíes los expulsan del país. Generalmente en grupos de veinte o treinta. A veces, heridos, a veces, menores. ',

});
});



$('#share_button_tierra').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Oujda: En tierra de nadie ',
link: ' http://www.atrapadosenmarruecos.org/#/entierradenadie',
picture: 'http://www.atrapadosenmarruecos.org/img/fotogaleria/00.jpg',
caption: 'Cuando los deportan, los dejan en tierra de nadie, son repelidos por los argelinos y ellos regresan a pie a Oujda, cinco horas de camino, veinte horas de camino, dependiendo de dónde sean abandonados y de si conocen por dónde salir del desierto. ',
message: 'This is text in the message box a user can add to or replace.'
});
});
$('#share_button_menores').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Oujda: Menores y mendigos',
link: ' http://www.atrapadosenmarruecos.org/#/menoresymendigos',
picture: 'http://www.atrapadosenmarruecos.org/img/mendicidad.jpg',
caption: 'o son una excepción. Chavales de entre trece y dieciocho años que llegan a Marruecos solos o acompañando a hermanos o a primos mayores. Huyen de la pobreza, sin padres o familias que les ayuden, sueñan lo mismo que el resto: llegar a Europa, jugar al fútbol (los sueños, sueños son), seguir estudiando, conseguir un trabajo. ',
});
});


// NADOR

$('#share_button_nador').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Nador',
link: ' http://www.atrapadosenmarruecos.org/#/nador',
picture: 'http://www.atrapadosenmarruecos.org/img/nador.jpg',
caption: 'Desde 2005, cuando se produjeron víctimas mortales , no había vuelto a suceder, pero el pasado año se repitieron: intentos de cruzar la valla que separa Nador del territorio español de Melilla por parte de grupos numerosos de jóvenes subsharianos. 1.100 personas atendidas por heridas asociadas a la violencia por los equipos de MSF en 2012.',

});
});


$('#share_button_violencia').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Nador: Violencia en el Gurugú',
link: ' http://www.atrapadosenmarruecos.org/#/gurugu',
picture: 'http://www.atrapadosenmarruecos.org/img/nador.jpg',
caption: 'En Nador se concentran dos poblaciones migratorias diferentes. Los que optan por la vía marítima y habitan los montes que coronan la ciudad, en el interior y los que habitan en el Gurugú. ',

});
});

$('#share_button_cruzar').live('click', function(e){
e.preventDefault();
FB.ui(
{
method: 'feed',
name: 'Atrapados en Marruecos - Nador: Cruzar el mar',
link: ' http://www.atrapadosenmarruecos.org/#/cruzarelmar',
picture: 'http://www.atrapadosenmarruecos.org/img/nador.jpg',
caption: 'En el otro lado de Nador, en el interior, el perfil de los migrantes que optan por cruzar por mar es diferente, con muchas más mujeres, muchas embarazadas y no son menos los niños. Los campamentos se organizan por nacionalidades y por lengua (anglófonos a un lado, francófonos al otro).',

});
});




});

