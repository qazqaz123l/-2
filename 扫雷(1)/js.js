// let m = 25,
//     n = 50,
//     z =200;

    const orientations = [
        [1,1],[1,0],[1,-1],[-1,1],[-1,0],[-1,-1],[0,-1],[0,1]
    ];     
    

function renderTable(m, n, z) {
    let gameEl = document.querySelector(".game table");
    gameEl.innerHTML='';
    let tableEl = document.querySelector(".game-borad table");
    let cells = [];
    let zhadan=[];
    tableEl.classList.add('again')




    let seconds=0;
    let time = document.querySelector(".time");
    
    setInterval(() => {
        seconds+=1;
        time.innerHTML=`
                    <div id=time>
                        <h1><h1>
                        <h2>计时<b id=b>${seconds}</b>s      当前炸弹数<b id=b>${z}</b><h2>
                    </div>
                        `
    },1000)
        //随机生成 min 到 max 之间的整数
    function random(min,max){
        return Math.floor((max-min+1)*Math.random())+min;
    }

    // len:生成整数的数量   start:最小值   end:最大值
    function getRandomArr(len,start,end){
        let arr=[];
        while (arr.length<len){
            let num=random(start,end);
            if(arr.indexOf(num)==-1){
                arr.push(num);
            }
        }
        return arr;
    }

    //生成 0到100以内的10个数
    const result=getRandomArr(z,1,m*n);
    
    for (let j = 0; j < z; j++){
        i=result[j];
        
        x11=Math.floor(i/n);
        y11=i-x11*n
        console.log(zhadan);
        zhadan[zhadan.length] = [x11,y11];
    }
                    
      
    
    
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            let cell = {};
            cell.value=0;//标注数字和雷
            cell.ee=0;//标注是否被翻开
            for (let [a, b] of zhadan)
                if (a==i && b==j){
                        cell.value='*';
                }
                row.push(cell);
            }
        
        cells.push(row);

    }
    
    for (let [i0, j0] of zhadan)
        for (let [rowOffset, colOffset] of orientations){
            let i1 = i0 + rowOffset, j1 = j0 + colOffset;
            if (i1<0 || i1 >= m || j1<0 || j1>=n){
                continue;
            }else;
                if(cells[i1][j1].value==='*'){
                    continue;}
                else{ 
                cells[i1][j1].value+=1;
                }
        
            
            }
            
    for (let i = 0;i < m; i++){
        let rowEl = document.createElement("tr");
        for (let j= 0;j< n;j++){
            let tdEl = document.createElement("td");
            let cellEl = document.createElement("div");
        
            cellEl.className ='cell';
            if (cells[i][j].value!=0){
                cellEl.innerText = cells[i][j].value;
            }
            cells[i][j].el=cellEl;
    
        cellEl.onclick=(e)=>{
            let value=cells[i][j].value;
            let ee=cells[i][j].ee;
            if (value<0){
                function whichButton(event)
                {
                var btnNum = event.button;
            
            }   
            }else{
                if (value==='*'){
                    console.error('爆炸');
                    cellEl.classList.add('exploded');
                    tableEl.classList.add('exploded');
                    let game = document.querySelector(".gameover");
                    game.innerHTML=`
                    <div id=gameover>
                        <h1>扫雷失败<h1>
                        <h2>共计,用时${seconds}s</h2>
                    </div>
                        `;
                    return;
                }
                if (value===0){
                    clearCells(i,j,m,n,cells, {});
                    
                }else{
                    if (value==1){
                    cellEl.classList.add('clear1');
                    cells[i][j].ee=1;
                }else{if (value==2){
                    cellEl.classList.add('clear2');
                    
                    cells[i][j].ee=1;
                }else{if (value>=3){
                    cellEl.classList.add('clear3');
                    
                    cells[i][j].ee=1;
                }
                }
                }
                }
            }
            let aa={};
            aa.v=0;
            for (let i = 0;i < m; i++){
                for (let j= 0;j< n;j++){
                    aa.v+=cells[i][j].ee }}
            
            if (aa.v>=m*n-z){
                let game = document.querySelector(".gameover");
                            game.innerHTML=`
                            <div id=gameover>
                            <h1>扫雷成功</h1>
                            <h2>共计用时${seconds}s</h2>
                            </div>
                        `;
                        
                        }
        }
            tdEl.append(cellEl);
            rowEl.append(tdEl);
        }
        tableEl.append(rowEl);
    }

    function clearCells(row,col,m,n, cells, cleared){
        cleared[`${row},${col}`]= true;
        cells[row][col].el.classList.add('clear1');
        cells[row][col].ee=1;
        
        for (let [rowOffset, colOffset] of orientations){
            let i1 = row + rowOffset, j1 = col + colOffset;
            if (i1<0 || i1 >=m || j1<0 || j1>=n ){
                continue;
            }    
            // if (value==='#'){
            //     cellEl.classList.add('clear0');
            // }
            let ee=cells[i1][j1].ee;
            
            
            if ( cells[i1][j1].value ==1 ){
                cells[i1][j1].el.classList.add('clear1');
                cells[i1][j1].ee=1;
                

                continue;
                }
            if ( cells[i1][j1].value ==2 ){
                cells[i1][j1].el.classList.add('clear2');
                cells[i1][j1].ee=1;
                continue;
                }
            if ( cells[i1][j1].value >=3 ){
                cells[i1][j1].el.classList.add('clear3');
                cells[i1][j1].ee=1;
                continue;
                }
            if (cleared[`${i1},${j1}`]){
                
                continue;
            }
            clearCells(i1,j1,m,n, cells, cleared);
        
            }
    

    }
    


    }
function renderWelcome(){
    let tableEll = document.querySelector(".game table");
    // let gameEl =docunent.querySelector("#game");
    var tableElll = document.querySelector(".chongkai");
    tableEll.innerHTML=`
    <div class="game">
        <div id="advance">
            <button id="advance1"> 初级</button>
            <button id="advance2"> 中级</button>
            <button id="advance3"> 高级</button>
        </div>
    </div>`;

    let buttonEl1=tableEll.querySelector("button#advance1");
    let buttonEl2=tableEll.querySelector("button#advance2");
    let buttonEl3=tableEll.querySelector("button#advance3");
    let buttonEl4=tableElll.querySelector("button");
    buttonEl1.onclick=()=>{
        renderTable(10, 20, 20);
    }
    buttonEl2.onclick=()=>{
        renderTable(20, 30, 75);
    }
    buttonEl3.onclick=()=>{
        renderTable(25, 50, 120);
    }
    buttonEl4.onclick=()=>{
        location.reload();
    }
    
}


renderWelcome()
// renderTable(m, n, z);
