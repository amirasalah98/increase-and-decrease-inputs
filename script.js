// $("#rowBtn") //click: check td , increase tr 
// $("#columnBtn") //click: check tr , increase td on each tr , check tr
// $("tr") //children of table
// $("tr td") // children of tr
$('#rowBtn').click(function(){  
    var inputsLength=($(this).parent()).find("input").length
    var trLength= $("tbody").children().length
    var tr= $("tbody").children()
    var addedTr=$("#addedTr")
    for(var i=1;i<=inputsLength;i++){
        var tds="<td><input type='text' class='tds'></td>".repeat(inputsLength)
       var newRow= $("<tr id='addedTr'>"+tds+"</tr>").clone(i).appendTo("table")
       $('#addedTr'.length).each(function(){
        console.log('#addedTr'.length)
        console.log(addedTr)
           $("<button id='removeRow' style='z-index='1';'>XR</button>").appendTo(newRow)
       })     
    }
    $('#removeRow').click(function(){
        $($(this).parent()).remove()
        console.log(this)
        console.log($(this).parent)
    })
})

$('#columnBtn').click(function(){
    var trLength=$("table").find("tr").length
    for(var i=1;i<=trLength;i++){
        console.log(trLength)
       var newColumn= $("<td id='removeColumn'><input type='text'></td>").clone(i).prependTo("tr")
       
    }
    $('#removeColumn'.length).each(function(){
        console.log('#removeColumn'.length)

    $("<button id='removeColumn'>XC</button>").appendTo(newColumn)
 })
 $('#removeColumn').click(function(){
    $($(this).parent()).remove()
    console.log(this)
    console.log($(this).parent)
})
})

