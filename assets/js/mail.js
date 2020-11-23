const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "You have succesfully registered..";

  const serviceID = "default_service";
  const templateID = "testing";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
      //   $("#signup-message").show();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

(function () {
  emailjs.init("user_5u9yIZ0m0BaHHQwavMgbq");
})();
