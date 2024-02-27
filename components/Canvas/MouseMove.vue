<template>
  <canvas id="canvas"></canvas>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/app'
import { watch } from 'vue'

const app = useAppStore()

onMounted(() => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let bubbles: Bubble[] = [];

  class Bubble {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * app.settings.trail.size / 1.5 + 3;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
    }

    update(): void {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.1;
    }

    draw(): void {
      ctx.beginPath();

      const trail = app.settings.trail.cursor;
      if (trail === 'circle') this.drawCircle()
      else if (trail === 'square') this.drawSquare()
      else if (trail === 'triangle') this.drawPolygon(3)
      else if (trail === 'quadrilateral') this.drawPolygon(4)
      else if (trail === 'star') this.drawPolygon(5)
      else if (trail === 'bubble') this.drawBubble()

      ctx.fillStyle = app.getActiveColor;
      ctx.fill();
    }

    drawCircle(): void {
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    }

    drawSquare(): void {
      ctx.fillRect(this.x, this.y, this.size, this.size)
    }

    drawPolygon(points: number): void {
      const outerRadius = this.size;
      const innerRadius = this.size / 2;

      for (let i = 0; i < points * 2; i++) {
        const angle = Math.PI / points * i;
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const starX = this.x + radius * Math.cos(angle);
        const starY = this.y + radius * Math.sin(angle);
        ctx.lineTo(starX, starY);
      }
    }

    drawBubble(): void {
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.moveTo(this.x + this.size, this.y);
      ctx.arc(this.x, this.y, this.size * 0.7, 0, Math.PI * 2, true);
    }
  }

  function animate(): void {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble, index) => {
      bubble.update();

      bubble.draw();

      if (bubble.size <= 0.2) {
        bubbles.splice(index, 1);
      }
    });
    requestAnimationFrame(animate);
  }

  animate();

  function createNewParticles(x: number, y: number) {
    for (let i = 0; i < 5; i++) {
      bubbles.push(new Bubble(x, y));
    }
  }

  watch(
    () => app.mouseCoordinates,
    value => createNewParticles(value.x, value.y),
    { deep: true }
  )

  // check scroll content and create bubles
  window.addEventListener('scroll', (e: Event) => {
    createNewParticles(app.mouseCoordinates.x, app.mouseCoordinates.y)
  });
})
</script>

<style lang="scss" scoped>
@import '@radial-color-picker/vue-color-picker/dist/vue-color-picker.min.css';

canvas {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
