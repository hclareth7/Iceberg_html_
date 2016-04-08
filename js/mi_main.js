'use strict';
//  Author: Hernando Clareth Ariza Perez
//  index.html scripts
//

(function ($) {

      $(document).ready(function () {

            var lo = localStorage.getItem("12");
            //console.log(lo);
            var form = $("#form-wizard");

            form.children(".wizard").steps({
                  headerTag: ".wizard-section-title",
                  stepsOrientation: "vertical",
                  bodyTag: ".wizard-section",
                  labels: {
                     next: "Siguiente",
                     previous: "Anterior",
                     finish: "Finish"
                  },
                  onStepChanging: function (event, currentIndex, newIndex) {
                     form.validate().settings.ignore = ":disabled,:hidden";
                     return form.valid();
                  },
                  onFinishing: function (event, currentIndex) {
                     form.validate().settings.ignore = ":disabled";
                     return form.valid();
                  },
                  onFinished: function (event, currentIndex) {
                     var contador = 0;
                     if (localStorage.getItem('iceberg_contador') != undefined) {
                        guardarInformacion(form);
                        contador = localStorage.getItem('iceberg_contador');
                       var suma=parseInt(contador+1);
                        console.log(suma);
                        localStorage.setItem('iceberg_contador', suma);

                     } else {
                        var suma=parseInt(contador+1);
                        console.log(suma);
                        localStorage.setItem('iceberg_contador', suma);
                  }



               }
            });


         $('.datetimepicker').datetimepicker({
            defaultDate: Date.now(),
            pickDate: true,
            pickTime: false
         });


         $('#btnCrearParticipante').magnificPopup({
            removalDelay: 300,
            items: {
               src: "#modal-form-crear-participante"
            },
            mainClass: "mfp-zoomIn",
            midClick: true
         });



      });

   function guardarInformacion(form) {

      var datos = JSON.stringify(form.serializeArray());
      console.log(datos);

      localStorage.setItem(JSON.parse(datos)[0].value, datos);
   }

})(jQuery);
