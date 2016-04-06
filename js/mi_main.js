'use strict';
//  Author: Hernando Clareth Ariza Perez
//  index.html scripts
//

(function ($) {

   $(document).ready(function () {


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
            alert("Datos guardados con exito !");
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

})(jQuery);
