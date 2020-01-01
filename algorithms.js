

$("#BellmanFord-start").on("click",()=>{startDij()});function startDij(){for(var a=Array(counter),b=0;b<counter;b++)a[b]=Array(counter);for(var b=0;b<counter;b++)for(var c=0;c<counter;c++)a[b][c]=graph[b][c];axios.post("/start-bel",{finalGraph:a,size:counter}).then(a=>{let b=a.data;for(var c=0;c<counter;c++){let a="";if(null!=routersName[c])for(var d=0;d<counter;d++)null!=routersName[d]&&(a+=`
<tr>
<th scope="row">${routersName[d]}</th>
<td>${b[c][d]}</td>
</tr>`);$(`#${c}`).find("table").html(`

<thead>
<tr>
<th scope="col">router</th>
<th scope="col">cost</th>
</tr>
</thead>
<tbody>
${a}
</tbody>

`)}console.log(a.data)}),console.log(a)}

$("#dijkstra-start").on("click",()=>{startDij()});function startDij(){for(var a=Array(counter),b=0;b<counter;b++)a[b]=Array(counter);for(var b=0;b<counter;b++)for(var c=0;c<counter;c++)a[b][c]=graph[b][c];axios.post("/start-dij",{finalGraph:a,size:counter}).then(a=>{let b=a.data;for(var c=0;c<counter;c++){let a="";if(null!=routersName[c])for(var d=0;d<counter;d++)null!=routersName[d]&&(a+=`
                    <tr>
                    <th scope="row">${routersName[d]}</th>
                    <td>${b[c][d]}</td>
                </tr>`);$(`#${c}`).find("table").html(`
        
  <thead>
    <tr>
      <th scope="col">router</th>
      <th scope="col">cost</th>
    </tr>
  </thead>
  <tbody>
   ${a}
  </tbody>

            `)}console.log(a.data)}),console.log(a)}