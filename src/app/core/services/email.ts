import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // Asegúrate de que no haya NINGÚN espacio al principio o al final de estos strings
  private readonly SERVICE_ID = 'service_2nesk3l';
  private readonly TEMPLATE_ID = 'template_vgfg1zc';
  private readonly PUBLIC_KEY = 'B9MX1rvqIYZvHw4FQ';

  async sendEmail(formData: any): Promise<any> {
    // Enviamos pasando la clave DIRECTAMENTE en el método send
    // Esto ignora cualquier inicialización previa y fuerza el uso de esta clave
    return emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Ekaitz'
      },
      this.PUBLIC_KEY // <--- La clave aquí es el "seguro de vida"
    );
  }
}