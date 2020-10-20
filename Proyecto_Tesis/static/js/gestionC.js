$(document).ready(function (){
                $("#formulario").submit(function (e){
                    e.preventDefault();
                    var $graficGest = $("#grafic-gest");
                    var graf = document.getElementById("graf").value;
                    // var combo = document.getElementById("graf");
                    var categoria = document.getElementById("categoria").options[document.getElementById("categoria").selectedIndex].text;
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

                            var datosExter = {
                              label: 'Cantidad',
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

                            var buenoTic = {
                              label: 'Bueno',
                              backgroundColor: 'red',
                              data:data.buenoTic
                            };

                            var genero = {
                              label: 'Genero',
                              backgroundColor: 'dark',
                              data: data.hols
                            };
                            if (window.grafica) {
                                window.grafica.clear();
                                window.grafica.destroy();
                            }
                            window.grafica = new Chart(ctx, {
                              type: graf,
                              data: {
                                labels: data.labels,
                                datasets: [datosExter]
                              },
                              options: {
                                responsive: true,
                                legend: {
                                  position: 'top',
                                },
                                title: {
                                  display: true,
                                  text: 'CATEGORIA: '+categoria +'      AÑO: '+ano+'        PERIODO: '+periodo+'        MUNICIPIO: '+muni+'     INSTITUCION: '+inst
                                },
                                // scales: {
                                //      yAxes: [{
                                //           scaleLabel: {
                                //               display: true,
                                //               labelString: 'Cantidad'
                                //           }
                                //      }]
                                // }
                              }
                            });
                        }
                    })

                })
            })

