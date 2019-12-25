import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-mystic',
  templateUrl: './mystic.component.html',
  styleUrls: ['./mystic.component.scss']
})
export class MysticComponent implements OnInit {
  url: string

  constructor() {
    this.url = './assets/markdown/home.md'
  }

  ngOnInit() {
  }

  background(): void {
    //设备宽度
    const bg:HTMLCanvasElement = document.querySelector('canvas#background')
    const s = window.screen
    const width = bg.width = s.width
    const height = bg.height
    let yPositions = Array(300).fill(0)
    const ctx:CanvasRenderingContext2D = bg.getContext('2d')

    // 用setInterval(draw, 33)设定刷新间隔
    setInterval(() => {
      // 用ctx.fillStyle=’rgba(0,0,0,.05)’; ctx.fillRect(0,0,width,height); ctx.fillStyle=’#0F0′; 反复生成opacity为0.5的半透明黑色背景
      ctx.fillStyle = 'rgba(0,0,0,.05)'
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
