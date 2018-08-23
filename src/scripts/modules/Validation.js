class Validation {
  constructor() {
    this.$form = $(".form");
    this.$form.validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        subject: "required",
        name: "required",
        description: {
          minlength: 2,
          required: true
        }
      },
      errorClass: "form__error",
      submitHandler: function(form, e) {
        e.preventDefault();
        console.log("submit", $(form).serializeArray());
      }
    });
  }
}

export default Validation;
