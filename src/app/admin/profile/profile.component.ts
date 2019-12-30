import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  height: number

  constructor() { }

  ngOnInit() {
    this.background()
  }

  background(): void {
    //设备宽度
    const bg = document.querySelector('canvas#background') as HTMLCanvasElement
    const s = window.screen
    const width = bg.width = s.width
    const height = bg.height = this.height = s.height
    let yPositions = Array(300).fill(0)
    const ctx = bg.getContext('2d') as CanvasRenderingContext2D

    // 用setInterval(draw, 33)设定刷新间隔
    setInterval(() => {
      // 用ctx.fillStyle=’rgba(0,0,0,.05)’; ctx.fillRect(0,0,width,height); ctx.fillStyle=’#0F0′; 反复生成opacity为0.5的半透明黑色背景
      ctx.fillStyle = 'rgba(255,255,255,.05)'
      ctx.fillRect(0, 0, width, height)
      // 代码颜色
      ctx.fillStyle = 'green'
      ctx.font = '10pt Georgia'
      yPositions.map(function(y, index) {
        // 用String.fromCharCode(1e2+Math.random()*33)随机生成字母
        let text = String.fromCharCode(1e2 + Math.random() * 330)
        // 用x = (index * 10)+10;和yPositions[index] = y + 10;顺序确定显示字母的位置
        let x = (index * 10) + 10
        // 用fillText(text, x, y); 在指定位置显示一个字母 以上步骤循环进行，就会产生《黑客帝国》的片头效果
        bg.getContext('2d').fillText(text, x, y);
        if (y > Math.random() * 1e4) {
          yPositions[index] = 0
        } else {
          yPositions[index] = y + 10
        }
      });
    }, 30)
  }

}
