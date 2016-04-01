'use strict';
//  Author: Hernando Clareth Ariza Perez
//  index.html scripts
//

(function($) {

    $(document).ready(function() {


        var form = $("#form-wizard");

        form.children(".wizard").steps({
            headerTag: ".wizard-section-title",
            bodyTag: ".wizard-section",
            onStepChanging: function(event, currentIndex, newIndex) {
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onFinishing: function(event, currentIndex) {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function(event, currentIndex) {
                alert("Datos guardados con exito !");
            }
        });

       $('#datetimepicker5').datetimepicker({
            defaultDate: "10/01/2015",
            pickDate: false
        });

       $('.datetimepicker').datetimepicker({
            defaultDate: Date.now(),
            pickDate: true
        });


    });

})(jQuery);
