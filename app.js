let body = document.querySelector("body");
let table = document.createElement("table");
body.append(table);
for(let i = 1; i < 9; i++){
    let tr = document.createElement("tr");
    table.appendChild(tr)
    for(let j = 1; j < 9; j++){
        let td = document.createElement("td");
        tr.appendChild(td);
        if(j%2 == i%2){
            td.classList.add("grey");
        }else{
            td.classList.add("black");
        }
    }
}


