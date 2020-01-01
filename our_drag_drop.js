
    var firstEl;
    var secondEl;
    var pointAX,pointAY,pointBX,pointBY
    var flag=0
    var timer=0;
    var counter=0
    var routersName=[]
    var removelinks=0;
    
    $("#add").on("click",()=>{
      console.log("ADD")
      var name=$("#name").val();
      $("#name").val("");
      routersName.push(name)
      var newRouter= $(`
   
      <div id="${counter}"   class="draggable ui-widget-content">
 
  <img src="router.png" width="100" height="100" />
  
  <p style="font-weight:600;font-size:20px">${name}</p>
  <table class="table table-dark">

  </table>
</div>`);
counter+=1
$("#router-area").append(newRouter)
$( ".draggable" ).draggable({
      drag: function( event, ui ) {
        let id=$(this).attr("id")
      
  

        $(`*[id*=${id}-]:visible`).each((line)=>{
          let line_= $(`*[id*=${id}-]:visible`)[line]
          let secondId=$($(`*[id*=${id}-]:visible`)[line]).attr("id").split("-")[1]
          let secondRouter=$(`#${secondId}`)
           console.log(secondRouter,line_)
          let X=secondRouter.position().left
          let Y=secondRouter.position().top

          let X2=$(this).position().left
          let Y2=$(this).position().top
          editLine(X,Y,X2,Y2,$(line_))
          $(`*[id*=-${id}]:visible`)
        })
        $(`*[id*=-${id}]:visible`).each((line)=>{
         // console.log("SECOND", $(`*[id*=-${id}]:visible`)[line])
          let line_= $(`*[id*=-${id}]:visible`)[line]
          let secondId=$($(`*[id*=-${id}]:visible`)[line]).attr("id").split("-")[0]
          let secondRouter=$(`#${secondId}`)
           console.log(secondRouter,line_)
          let X=secondRouter.position().left
          let Y=secondRouter.position().top

          let X2=$(this).position().left
          let Y2=$(this).position().top
          editLine(X,Y,X2,Y2,$(line_))
          $(`*[id*=-${id}]:visible`)
          
        })
      }
    })
    
   
    });


    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        console.log(ui,event)
       
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  $("body").on("click",(e=>{
    e.preventDefault()
  }))
  $("body").on("click",".draggable",function (e){
     console.log("clicked")
     console.log()
      if(flag==0){
         pointAX=$(this).position().left
     pointAY=$(this).position().top
     firstEl=$(this)
     var msg = new SpeechSynthesisUtterance("connect second router");
     speechSynthesis.speak(msg)
   console.log("FLAG 1")
        flag=1
      }
     else if(flag==1){
         pointBX=$(this).position().left
     pointBY=$(this).position().top
secondEl=$(this)
   
        console.log("FLAG 2")
      let id=`${firstEl.attr("id")}-${secondEl.attr("id")}`
      if((firstEl.attr("id")!=secondEl.attr("id"))&&$(`#${id}`).length==0&&$(`#${secondEl.attr("id")}-${firstEl.attr("id")}`).length==0){
     
      var cost = prompt("please enter cost",);
   
      graph[firstEl.attr("id")][secondEl.attr("id")]=parseInt(cost)
      graph[secondEl.attr("id")][firstEl.attr("id")]=parseInt(cost)
     

      line(pointAX,pointAY,pointBX,pointBY,id,cost)

      
   

      }

        flag=0
      }
    
   })


   $("body").on("mousedown",".draggable",function (event){
    switch (event.which) {
  
        case 3: //right click
        rearrangeAfterDel($(this).attr("id"))
        $(this).remove();
     
            break;
        
        default:
          
    }
})

function rearrangeAfterDel(id_){
    for(var i=0;i<counter;i++){
        graph[id_][i]=9999999;
        graph[i][id_]=9999999
    }
    if($(`*[id*=-${id_}]:visible`).length==0&&$(`*[id*=${id_}-]:visible`).length==0){
        console.log("RIGHT")
      //  counter-=1;
      removelinks+=1
       }
    $(`*[id*=-${id_}]:visible`).remove()
    $(`*[id*=${id_}-]:visible`).remove()
    routersName[id_]=null
 
  
  
    // EMPTY GRAPH
    
    var i=0;
    $(".draggable").each(elementId => {
        let element=$(".draggable")[elementId]
        let id=$(element).attr("id");
     
      
       // let cont=$(`#${id2}-${id}`).find("p").text()
      
    });
    

}