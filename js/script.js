// var blocks = document.getElementsByClassName('content-block');
// var sidebar = document.getElementById('sidebar');
// var bars = []
// var blocksY = [];
// for (block of blocks) {
//     var bar = document.createElement('div');
//     bar.className = 'bar';
//     sidebar.appendChild(bar);
//     bars.push(bar);
//     var blockRect = block.getBoundingClientRect();
//     blocksY.push(blockRect.top);
// }

// console.log(blocksY);

// while (true) {
//     for (i = 0; i < blocksY.length; i++) {
//         if (window.scrollY >= blocksY[i]){
//             for(bar of bars){
//                 bar.classList.remove('active');
//             }
//             bars[i].classList.add('active');
//             //console.log(i);
//         }
//     }
// }

var parent = document.html;
var child = document.body;
child.style.right = child.clientWidth - child.offsetWidth + "px";