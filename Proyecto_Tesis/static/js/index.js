
////////////////////////////////funciones para mostrar graficas///////////////////////////////

function graficPrincipal(){

    var $graficPrin = $("#grafic-prin");
    $.ajax({
        url: $graficPrin.data("url"),
      success: function (data) {

        var ctx = $graficPrin[0].getContext("2d");

        var cont = data.contador;
        document.getElementById('estudiantes').innerHTML= cont;
        var inst = data.instituciones;
        document.getElementById('instituciones').innerHTML= inst;
        var muni = data.municipios;
        document.getElementById('municipios').innerHTML= muni;

        var puntaje = {
          label: 'Puntaje',
              backgroundColor: 'blue',
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

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [puntaje,estudiantes]
          },
          options: {
            responsive: true,
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Puntaje global y numero de estudiantes por municipio'
            }
          }
        });

      }
    });
}

function punt_anio(){
  var $punt_anio = $("#punt-anio");
  $.ajax({
    url: $punt_anio.data("url"),
    success: function (data) {
      var ctx = $punt_anio[0].getContext("2d");
      var puntaje = {
        label: 'Puntaje',
        borderColor: 'blue',
        data:data.puntajes
      };
      new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [puntaje]
          },
          options: {
            responsive: false,
            legend: {
              position: 'top',
            },
            title: {
              display: false,
              // text: 'Puntaje global por año'
            }
          }
        });
    }
  });
}

function tot_est(){
  var $tot_est = $("#tot-est");

  $.ajax({
    url: $tot_est.data("url"),
    success: function (data) {
      var ctx = $tot_est[0].getContext("2d");
      function getRandomColor() {
        var letters = "0123456789ABCDEF".split("");
        var color = "#";
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      var estudiantes = {
          label: 'Estudiantes',
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

            ],
          data:data.conta

        };
      new Chart(ctx, {
          type: 'pie',
          data: {
            labels: data.labels,
            datasets: [estudiantes]
          },
          options: {
            responsive: false,
            legend: {
              position: 'right',
            },
            title: {
              display: false,
              // text: 'Puntaje global y numero de estudiantes por municipio'
            }
          }
        });

    }
  });
}

function lectura_critic_ciudad(){

  var $lectCriticC = $("#lect-criticC");
  $.ajax({
    url: $lectCriticC.data("url"),
    success: function(data){
      var ctx = $lectCriticC[0].getContext("2d");
      var puntaje = {
        label: 'Puntaje',
            backgroundColor: 'blue',
            data:data.data
      };
      new Chart(ctx, {
        type: 'bar',
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
            display: false,
            text: 'Puntaje lectura critica por municipio'
          }
        }
      });
    }
  });
}

function estu_anio(){

  var $estuanio = $("#estu-anio");
  $.ajax({
    url: $estuanio.data("url"),
    success: function(data){
      var ctx = $estuanio[0].getContext("2d");
      var cantidad = {
        label: 'Cantidad',
            backgroundColor: 'red',
            data:data.data
      };
      var porcentaje = {

        data:data.porcen,
      };

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [cantidad,porcentaje]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                min: 0,
                max: 4000,
                //callback: function(value) { return value + "%" }
              },
              scaleLabel: {
                labelString: "Cantidad",
                display: true
              }
            }]
          },

          tooltips: {
              callbacks: {
                title: function(tooltipItem, data) {
                  return 'Porcentaje';
                },
                label: function(tooltipItem, data) {
                  return data['datasets'][1]['data'][tooltipItem['index']] + '%';
                }
              },



          },
          responsive: true,
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Numero de estudiantes que presentaron la Prueba por año'
          }
        }
      });
    }
  });
}

function estu_Edad() {
  var $estuEdad = $("#estu-edad");
  $.ajax({
    url: $estuEdad.data("url"),
    success: function(data) {
      var ctx = $estuEdad[0].getContext("2d");
      var cantidad = {
        label: 'Cantidad',
        backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ],
        data:data.data
      }

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels:data.labels,
          datasets: [cantidad]
        },
        options: {
          tooltips: {
            callbacks: {
              title: function (tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },

              label: function (tooltipItem, data) {
                var dataset = data['datasets'][0];
                total = dataset['data'][0]+dataset['data'][1]+dataset['data'][2]+dataset['data'][3]+dataset['data'][4];
                var percent = Math.round((dataset['data'][tooltipItem['index']] / total * 100))
                //var percent = 'hola'//Math.round((dataset['data'][tooltipItem['index']] / dataset["_meta"][0]['total']) * 100)
                return '(' + percent + '%)';
              }
            },
          },
          title: {
            display: false,
            text: 'Número de estudiantes por rangos de edades'
          }
        }
      });
    }
  });
}

function desemp_ciu_edad() {
  var $desemCiuEdad = $("#desemp-ciu-edad");
    $.ajax({
        url: $desemCiuEdad.data("url"),
      success: function (data) {

        var ctx = $desemCiuEdad[0].getContext("2d");

        var puntaje = {
          label: 'Puntaje',
              backgroundColor: 'blue',
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

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [puntaje,estudiantes]
          },
          options: {
            responsive: true,
            legend: {
              position: 'top',
            },
            title: {
              display: false,
              text: 'Puntaje global y numero de estudiantes por municipio'
            }
          }
        });
      }
    });
}

function desemp_ciu_edad() {
  var $desemCiuEdad = $("#desemp-ciu-edad");
    $.ajax({
        url: $desemCiuEdad.data("url"),
      success: function (data) {

        var ctx = $desemCiuEdad[0].getContext("2d");

        var avanzado = {
          label: 'Avanzado',
          backgroundColor: 'green',
          data:data.avanzado
        };

        var satisfactorio = {
          label: 'Satisfactorio',
          backgroundColor: 'blue',
          data:data.satisfactorio
        };

        var minimo = {
          label: 'Minimo',
          backgroundColor: 'yellow',
          data:data.minimo
        };

        var insuficiente = {
          label: 'Insuficiente',
          backgroundColor: 'red',
          data:data.insuficiente
        };

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [avanzado,satisfactorio,minimo,insuficiente]
          },
          options: {
            responsive: true,
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Número   de   estudiantes que presentaron la prueba de sociales y ciudadanas, por rango de edad y desempeño'
            }
          }
        });
      }
    });
}

function cargarFunciones(){
   lectura_critic_ciudad();
   estu_anio();
   estu_Edad();
   desemp_ciu_edad();
}

function cargaFuncionesPrincipal(){
  graficPrincipal();
  punt_anio();
  tot_est();
}

///////////////////funciones para crear graficas//////////////////////////
function evdragstart(ev) {
    ev.dataTransfer.setData("text",ev.target.id);
}

function evdragover (ev) {
    ev.preventDefault();
}

function evdrop(ev,el) {
    ev.stopPropagation();
    ev.preventDefault();
    data=ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}