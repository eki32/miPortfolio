import { Component, ElementRef, ViewChild, afterNextRender, HostListener } from '@angular/core';

@Component({
  selector: 'app-background-particles',
  standalone: true,
  template: `<canvas #particleCanvas class="fixed top-0 left-0 -z-10 w-full h-full"></canvas>`,
  styles: [`:host { pointer-events: none; display: block; }`]
})
export class BackgroundParticlesComponent {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private animationId?: number;

  constructor() {
    afterNextRender(() => {
      this.initCanvas();
    });
  }

  // Escuchador de redimensionamiento para manejar el zoom y cambios de ventana
  @HostListener('window:resize')
  onResize() {
    this.resize();
    this.createParticles(); // Recreamos para que se distribuyan en el nuevo espacio
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    // Quitamos alpha: false para que se vea el fondo real del body si lo necesitas
    this.ctx = canvas.getContext('2d')!; 
    this.resize();
    this.createParticles();
    this.animate();
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    // Usamos el tamaño real del viewport
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Ajuste de resolución para evitar borrosidad con zoom
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    this.ctx.scale(dpr, dpr);
    
    // Aseguramos que el CSS coincida con el viewport
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }

  private createParticles() {
    this.particles = [];
    const particleCount = 80; 
    for (let i = 0; i < particleCount; i++) {
      const rand = Math.random();
      let color: string;
      
      if (rand < 0.6) {
        color = '34, 211, 238';      // cyan-400
      } else if (rand < 0.8) {
        color = '56, 189, 248';      // sky-400
      } else {
        color = '220, 20, 60';       // crimson
      }

      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.6 + 0.25,
        color: color
      });
    }
  }

  private animate() {
    if (!this.ctx) return;
    
    // Limpiamos el canvas en cada frame con el color de fondo
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    this.ctx.fillStyle = '#09090b'; 
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    
    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Teletransporte de partículas (bordes)
      if (p.x < 0) p.x = window.innerWidth;
      if (p.x > window.innerWidth) p.x = 0;
      if (p.y < 0) p.y = window.innerHeight;
      if (p.y > window.innerHeight) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
      
      // Aplicación de brillo (Glow)
      this.ctx.shadowBlur = p.color === '220, 20, 60' ? 10 : 6;
      this.ctx.shadowColor = `rgb(${p.color})`;
      
      this.ctx.fill();
      this.ctx.shadowBlur = 0; // Reset para rendimiento
    });
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}