$(document).ready(function (){
                $("#formulario").submit(function (e){
                    e.preventDefault();
                    var $graficGest = $("#grafic-gest");
                    var graf = document.getElementById("graf").value;
                    var punt = document.getElementById("puntaje").options[document.getElementById("puntaje").selectedIndex].text;
                    var ano = document.getElementById("ano").options[document.getElementById("ano").selectedIndex].text;
                    var periodo = document.getElementById("periodo").options[document.getElementById("periodo").selectedIndex].text;
                    var muni = document.getElementById("municipio").options[document.getElementById("municipio").selectedIndex].text;
                    var inst = document.getElementById("inst").options[document.getElementById("inst").selectedIndex].text;
                    $.ajax({
                        url: $(this).attr('action'),
                        type: $(this).attr('method'),
                        data: $(this).serialize(),


                        success: function (data){
                            var ctx = $graficGest[0].getContext("2d");
                            function getRandomColor() {
                                var letters = "0123456789ABCDEF".split("");
                                var color = "#";
                                for (var i = 0; i < 6; i++ ) {
                                  color += letters[Math.floor(Math.random() * 16)];
                                }
                                return color;
                            }

                            var puntaje = {
                              label: 'Puntaje',
                                  backgroundColor: [
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                    getRandomColor(),
                                  ],
                                  data:data.data
                            };

                            var estudiantes = {
                              label: 'Estudiantes',
                              backgroundColor: 'red',
                              data:data.conta
                            };

                            var genero = {
                              label: 'Genero',
                              backgroundColor: 'dark'
                            };
                            if (window.grafica) {
                                window.grafica.clear();
                                window.grafica.destroy();
                            }
                            window.grafica = new Chart(ctx, {
                              type: graf,
                              data: {
                                labels: data.labels,
                                datasets: [puntaje]
                              },
                              options: {
                                responsive: true,
                                legend: {
                                  position: 'top',
                                },
                                title: {
                                  display: true,
                                  text: 'PUNTAJE: '+punt +'      AÑO: '+ano+'        PERIODO: '+periodo+'        MUNICIPIO: '+muni+'     INSTITUCION: '+inst
                                },
                                scales: {
                                     yAxes: [{
                                          scaleLabel: {
                                              display: true,
                                              labelString: 'Puntaje'
                                          }
                                     }]
                                }
                              }
                            });
                        }
                    })

                })
            })