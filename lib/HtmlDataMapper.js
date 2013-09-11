//(function($){
//    //jQuery autonomus teritory
//    $(document).ready(function(){
//        $('form#partner-login-form').on('submit', function(event){
//            var form = this,
//                formContainer = $(this).parent('.container'),
//                loggedInContainer = formContainer.siblings('.logged-in'),
//                checkoutForm = $('#nexway-checkout-form'),
//                billingItemsMapping = {
//                    name: checkoutForm.find('[name="billing[firstname]"]'),
//                    last_name: checkoutForm.find('[name="billing[lastname]"]'),
//                    email: checkoutForm.find('[name="billing[email]"]')
//                }
//                ;
//            event.preventDefault();
//
//            new Ajax.Request(form.action,
//                {
//                    method: form.method,
//                    parameters: $(form).serializeArray(),
//                    onSuccess: function(transport){
//                        var data = transport.responseJSON.user;
//                        formContainer.hide()
//                        ;
//                        loggedInContainer.show()
//                            .find('.name').html(data.name)
//                            .siblings('.last-name').html(data.last_name);
//
//                        $.each(data, function(key, value){
//                            if(billingItemsMapping.hasOwnProperty(key)) {
//                                billingItemsMapping[key].val(value);
//                            }
//                        });
//
//                    }
//                }
//            );
//        });
//    });
//
//})(jQuery);