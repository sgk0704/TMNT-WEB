
const padding = 200;
const slidesCount = 3 - 1;
function map(x, in_min, in_max, out_min, out_max)
    {
        return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }
document.addEventListener('mousemove', (e)=>{
  // Change to bodywidth
  const wrapper = document.getElementById('wrapper')
  const rect = wrapper.getBoundingClientRect();
  // Mouse position in between padding
  const mouseX = Math.min(Math.max(e.clientX - padding,0),rect.width - padding * 2);
  const rawPercent = map(mouseX, 0, rect.width - padding * 2, 100 - 100 * slidesCount, 100);
  const percent = Math.round(rawPercent)
  const left = document.getElementById('left');
  const center = document.getElementById('center');
  const right = document.getElementById('right');
  left.style.transform = `translateX(${percent}%)`;
  center.style.transform = `translateX(${percent - 100}%)`;
  right.style.transform = `translateX(${percent - 200}%)`;
  //debug
  const paragraph = document.getElementById('t');
  paragraph.innerHTML = percent;
})