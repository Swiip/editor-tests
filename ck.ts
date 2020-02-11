import mail from "./mail";

ClassicEditor.create(document.querySelector("#ck-editor"))
  .then(editor => {
    editor.setData(mail);
  })
  .catch(error => {
    console.error(error);
  });
