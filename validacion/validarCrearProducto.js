export default function validarCrearProducto(valores) {
  let errores = {};

  if (!valores.nombre) {
    errores.nombre = "El nombre es obligatorio";
  }

  if (!valores.empresa) {
    errores.empresa = "El nombre de empresa es obligatorio";
  }

  if (!valores.url) {
    errores.url = "La url del producto es obligatoria";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
    errores.url = "La url no es válida";
  }

  if (!valores.descripcion) {
    errores.descripcion = "La descripción es obligatoria";
  }

  return errores;
}
