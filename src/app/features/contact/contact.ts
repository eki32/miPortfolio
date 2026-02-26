import { Component, inject ,ChangeDetectorRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../core/services/email';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
 private emailService = inject(EmailService);
  private cdr = inject(ChangeDetectorRef); // <--- Inyectamos esto

  contactData = { name: '', email: '', message: '' };
  isSending = false;
  showSuccessToast = false;

  async onSubmit() {
    if (this.isSending) return;
    this.isSending = true;

    try {
      await this.emailService.sendEmail(this.contactData);
      
      this.contactData = { name: '', email: '', message: '' };
      this.showSuccessToast = true;
      
      // Ocultar notificación tras 5 segundos
      setTimeout(() => {
        this.showSuccessToast = false;
        this.cdr.detectChanges(); // Forzar actualización al cerrar
      }, 5000);

    } catch (error) {
      console.error(error);
    } finally {
      this.isSending = false;
      // ESTA LÍNEA ES LA MAGIA:
      // Le dice a Angular: "¡Eh! He cambiado cosas, refresca el botón YA"
      this.cdr.detectChanges(); 
    }
  }
}